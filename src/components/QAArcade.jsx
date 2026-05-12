import { useState } from 'react';
import { Gamepad2, ShieldCheck, Target } from 'lucide-react';
import { qaArcadeGames } from '../data/qaArcadeGames.js';

function getCoverageScore(game, selectedChoices) {
  const recommendedChoices = game.choices.filter((choice) => choice.recommended).map((choice) => choice.label);
  const selectedRecommendedCount = selectedChoices.filter((choice) => recommendedChoices.includes(choice)).length;

  return Math.round((selectedRecommendedCount / recommendedChoices.length) * 100);
}

export default function QAArcade() {
  const [activeGameId, setActiveGameId] = useState(qaArcadeGames[0].id);
  const [selectedChoicesByGame, setSelectedChoicesByGame] = useState({});
  const activeGame = qaArcadeGames.find((game) => game.id === activeGameId);
  const selectedChoices = selectedChoicesByGame[activeGame.id] ?? [];
  const coverageScore = getCoverageScore(activeGame, selectedChoices);

  function selectGame(gameId) {
    setActiveGameId(gameId);
  }

  function toggleChoice(choiceLabel) {
    setSelectedChoicesByGame((current) => {
      const currentChoices = current[activeGame.id] ?? [];
      const nextChoices = currentChoices.includes(choiceLabel)
        ? currentChoices.filter((item) => item !== choiceLabel)
        : [...currentChoices, choiceLabel];

      return {
        ...current,
        [activeGame.id]: nextChoices,
      };
    });
  }

  return (
    <section className="panel" aria-labelledby="qa-arcade-title">
      <div className="section-title">
        <h2 id="qa-arcade-title">QA Arcade</h2>
        <span>
          Small interactive scenarios about bugs, pipelines, code, cloud, APIs, data, and why quick checks are rarely
          quick.
        </span>
      </div>

      <div className="arcade-layout">
        <div className="arcade-game-list" aria-label="QA Arcade games">
          {qaArcadeGames.map((game) => (
            <button
              className={game.id === activeGame.id ? 'arcade-game active' : 'arcade-game'}
              key={game.id}
              onClick={() => selectGame(game.id)}
              type="button"
            >
              <Gamepad2 size={18} />
              <span>
                <strong>{game.title}</strong>
                <em>{game.topic}</em>
              </span>
            </button>
          ))}
        </div>

        <article className="arcade-stage" aria-live="polite">
          <div className="arcade-stage-header">
            <div>
              <span>{activeGame.topic}</span>
              <h3>{activeGame.title}</h3>
            </div>
            <div className="coverage-meter" aria-label={`${activeGame.title} investigation coverage`}>
              <strong>{coverageScore}%</strong>
              <span>investigation coverage</span>
            </div>
          </div>

          <div className="callout">
            <span>Scenario</span>
            <strong>{activeGame.scenario}</strong>
          </div>

          <div className="arcade-choice-grid">
            <span className="arcade-choice-heading">Investigation</span>
            {activeGame.choices.map((choice) => (
              <button
                className={selectedChoices.includes(choice.label) ? 'arcade-choice selected' : 'arcade-choice'}
                key={choice.label}
                onClick={() => toggleChoice(choice.label)}
                type="button"
              >
                <Target size={17} />
                {choice.label}
              </button>
            ))}
          </div>

          <div className="selected-actions">
            <span>Investigation selected</span>
            <p>{selectedChoices.length > 0 ? selectedChoices.join(', ') : 'No actions selected yet. QA radar is warming up.'}</p>
          </div>

          <div className="arcade-result-grid">
            <div className="status-box">
              <span>Result</span>
              <strong>{activeGame.result}</strong>
            </div>
            <div className="status-box">
              <span>Why it matters</span>
              <strong>{activeGame.whyItMatters}</strong>
            </div>
            <div className="status-box arcade-status">
              <ShieldCheck size={18} />
              <span>Takeaway</span>
              <strong>{activeGame.takeaway}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
