import { useState } from 'react';
import {
  BadgeCheck,
  BookOpenCheck,
  Bot,
  BriefcaseBusiness,
  Bug,
  Coffee,
  FileJson,
  FlaskConical,
  GitBranch,
  Laptop,
  MessageSquareQuote,
  Radar,
  SearchCheck,
  Settings2,
  ShieldCheck,
  Sparkles,
  Terminal,
} from 'lucide-react';
import { getAllResumeApiResponses } from './qaBrain.js';
import { technicalCaseStudies } from './data/caseStudies.js';
import {
  interviewQuestions,
  knownIssues,
  recruiterProfile,
  skills,
  systemStatuses,
  testLabExamples,
  workModes,
} from './data/profile.js';
import { automationQualityGate } from './data/qualityGate.js';
import { engineeringToolbox } from './data/toolbox.js';
import QAArcade from './components/QAArcade.jsx';
import QACatWidget from './components/QACatWidget.jsx';

function SectionTitle({ eyebrow, title, description, titleId }) {
  return (
    <div className="section-title">
      {eyebrow && <p>{eyebrow}</p>}
      <h2 id={titleId}>{title}</h2>
      <span>{description}</span>
    </div>
  );
}

function SystemStatus() {
  return (
    <section className="hero" aria-labelledby="main-title">
      <div className="hero-copy">
        <div className="pill">
          <Sparkles size={18} /> System Status: Hireable
        </div>
        <h1 id="main-title">Galina QA Control Center</h1>
        <p>
          A playful Senior QA/SDET portfolio dashboard showing automation experience, testing judgment, cloud
          knowledge, and release-risk thinking.
        </p>
        <div className="hero-actions">
          <a href="#professional-profile">
            <Terminal size={18} /> Run Profile Check
          </a>
          <a href="#test-lab">
            <FlaskConical size={18} /> Open Test Lab
          </a>
        </div>
      </div>

      <aside className="status-console" aria-label="Current QA system status">
        <div className="console-header">
          <Radar aria-hidden="true" />
          <div>
            <span>Live Diagnostics</span>
            <strong>No production panic detected</strong>
          </div>
        </div>
        <div className="status-grid">
          {systemStatuses.map((item) => (
            <article className="status-card" key={item.label}>
              <span>{item.label}</span>
              <strong>{item.value}</strong>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </aside>
    </section>
  );
}

function ApiView() {
  const responses = getAllResumeApiResponses();

  return (
    <div className="api-stack">
      {responses.map((response) => (
        <article className="endpoint-card" key={response.path}>
          <div className="endpoint-title">
            <span>{response.method}</span>
            <strong>{response.path}</strong>
            <em>{response.statusCode} OK</em>
          </div>
          <pre aria-label={`${response.path} response`}>{JSON.stringify(response, null, 2)}</pre>
        </article>
      ))}
    </div>
  );
}

function SkillTree() {
  return (
    <div className="skill-grid">
      {skills.map((skill) => (
        <article className="skill-card" key={skill.name}>
          <div className="skill-header">
            <h3>{skill.name}</h3>
            <strong>Level {skill.level}</strong>
          </div>
          <div className="skill-bar" aria-label={`${skill.name} level ${skill.level}`}>
            <span style={{ width: `${skill.level}%` }} />
          </div>
          <p>{skill.note}</p>
        </article>
      ))}
    </div>
  );
}

function RecruiterMode() {
  const groups = [
    ['Professional Summary', [recruiterProfile.summary]],
    ['Core Skills', recruiterProfile.coreSkills],
    ['Selected Strengths', recruiterProfile.selectedStrengths],
    ['Tools and Technologies', recruiterProfile.tools],
    ['Best Team Fit', [recruiterProfile.bestTeamFit]],
    ['Certifications', recruiterProfile.certifications],
    ['Contact', [recruiterProfile.contact]],
  ];

  return (
    <div className="recruiter-grid">
      {groups.map(([title, items]) => (
        <article key={title}>
          <h3>{title}</h3>
          {title === 'Contact' ? (
            <p>
              Contact details available through resume,{' '}
              <a href="mailto:galina.florinskaya@gmail.com">galina.florinskaya@gmail.com</a> or{' '}
              <a
                href="https://www.linkedin.com/in/gflorinskaya"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/gflorinskaya
              </a>
              .
            </p>
          ) : items.length === 1 ? (
            <p>{items[0]}</p>
          ) : (
            <ul>
              {items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}

function ProfessionalProfile() {
  const [tab, setTab] = useState('api');

  return (
    <section className="panel" id="professional-profile" aria-labelledby="professional-profile-title">
      <SectionTitle
        titleId="professional-profile-title"
        title="Professional Profile"
        description="My QA/SDET profile in three views: API-style experience data, practical skill tree, and recruiter-friendly highlights."
      />

      <div className="tabs" role="tablist" aria-label="Professional profile views">
        <button className={tab === 'api' ? 'active' : ''} onClick={() => setTab('api')} type="button">
          <FileJson size={18} /> API View
        </button>
        <button className={tab === 'skills' ? 'active' : ''} onClick={() => setTab('skills')} type="button">
          <GitBranch size={18} /> Skill Tree
        </button>
        <button className={tab === 'recruiter' ? 'active' : ''} onClick={() => setTab('recruiter')} type="button">
          <Laptop size={18} /> Recruiter Mode
        </button>
      </div>

      {tab === 'api' && <ApiView />}
      {tab === 'skills' && <SkillTree />}
      {tab === 'recruiter' && <RecruiterMode />}
    </section>
  );
}

function TestLab() {
  return (
    <section className="panel" id="test-lab" aria-labelledby="test-lab-title">
      <SectionTitle
        titleId="test-lab-title"
        title="Test Lab"
        description="Practical QA examples: bug reports, test cases, API checks, regression risks, and exploratory charters."
      />
      <div className="lab-grid">
        {testLabExamples.map((example) => (
          <article className="lab-card" key={example.title}>
            <div className="card-kicker">
              <BookOpenCheck size={18} />
              <span>{example.type}</span>
            </div>
            <h3>{example.title}</h3>
            {Object.entries(example)
              .filter(([key]) => !['type', 'title'].includes(key))
              .map(([key, value]) => (
                <div className="field-row" key={key}>
                  <strong>{key}</strong>
                  {Array.isArray(value) ? (
                    <ul>
                      {value.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{value}</p>
                  )}
                </div>
              ))}
          </article>
        ))}
      </div>
    </section>
  );
}

function EngineeringToolbox() {
  return (
    <section className="panel" aria-labelledby="engineering-toolbox-title">
      <SectionTitle
        titleId="engineering-toolbox-title"
        title="Engineering Toolbox"
        description="Tools I use, how I use them, and what they show about my QA/SDET approach."
      />
      <div className="toolbox-grid">
        {engineeringToolbox.map((item) => (
          <article className="toolbox-card" key={item.area}>
            <div className="card-kicker">
              <Settings2 size={18} />
              <span>{item.area}</span>
            </div>
            <div className="tool-tags" aria-label={`${item.area} tools`}>
              {item.tools.map((tool) => (
                <span key={tool}>{tool}</span>
              ))}
            </div>
            <div className="field-row">
              <strong>Practical usage</strong>
              <p>{item.usage}</p>
            </div>
            <div className="field-row signal-row">
              <strong>What this shows</strong>
              <p>{item.seniorSignal}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function TechnicalCaseStudies() {
  return (
    <section className="panel" aria-labelledby="technical-case-studies-title">
      <SectionTitle
        titleId="technical-case-studies-title"
        title="Technical Case Studies"
        description="Practical examples of how I approach load, regression, permissions, and cross-layer debugging."
      />
      <div className="case-study-grid">
        {technicalCaseStudies.map((study) => (
          <article className="case-study-card" key={study.title}>
            <div className="card-kicker">
              <BriefcaseBusiness size={18} />
              <span>Case Study</span>
            </div>
            <h3>{study.title}</h3>
            <div className="field-row">
              <strong>Problem</strong>
              <p>{study.problem}</p>
            </div>
            <div className="field-row">
              <strong>Approach</strong>
              <p>{study.approach}</p>
            </div>
            <div className="field-row">
              <strong>Validated</strong>
              <ul>
                {study.validated.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="field-row signal-row">
              <strong>Result</strong>
              <p>{study.result}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function WorkModeSimulator() {
  const [activeMode, setActiveMode] = useState(workModes[0]);

  return (
    <section className="panel" aria-labelledby="work-mode-title">
      <SectionTitle
        titleId="work-mode-title"
        title="Work Mode Simulator"
        description="A playful translation layer for common workplace phrases and the risks hiding behind them."
      />

      <div className="simulator-layout">
        <div className="mode-list">
          {workModes.map((mode) => (
            <button
              key={mode.title}
              className={activeMode.title === mode.title ? 'mode active' : 'mode'}
              onClick={() => setActiveMode(mode)}
              type="button"
            >
              <strong>{mode.title}</strong>
              <span>{mode.input}</span>
            </button>
          ))}
        </div>

        <article className="result-card" aria-live="polite">
          <div className="result-heading">
            <div>
              <p>Simulation Result</p>
              <h3>{activeMode.title}</h3>
            </div>
            <SearchCheck aria-hidden="true" />
          </div>

          <div className="callout">
            <span>Input</span>
            <strong>{activeMode.input}</strong>
          </div>

          <h4>Detected risks</h4>
          <ul>
            {activeMode.detectedRisks.map((item) => (
              <li key={item}>
                <ShieldCheck size={18} /> {item}
              </li>
            ))}
          </ul>

          <h4>QA actions</h4>
          <ul>
            {activeMode.actions.map((item) => (
              <li key={item}>
                <BadgeCheck size={18} /> {item}
              </li>
            ))}
          </ul>

          <div className="result-footer">
            <div className="status-box">
              <span>Status</span>
              <strong>{activeMode.status}</strong>
            </div>
            <div className="status-box">
              <span>Recommendation</span>
              <strong>{activeMode.recommendation}</strong>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function KnownIssues() {
  return (
    <section className="panel" aria-labelledby="known-issues-title">
      <SectionTitle
        titleId="known-issues-title"
        title="Known Issues"
        description="Harmless quirks, documented with the same seriousness as any good defect."
      />
      <div className="table" role="table" aria-label="Known issues">
        <div className="table-row header" role="row">
          <span>Issue</span>
          <span>Severity</span>
          <span>Workaround</span>
          <span>Status</span>
        </div>
        {knownIssues.map((item) => (
          <div className="table-row" role="row" key={item.issue}>
            <span>{item.issue}</span>
            <span>{item.severity}</span>
            <span>{item.workaround}</span>
            <span>{item.status}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AutomationQualityGate() {
  return (
    <section className="panel" aria-labelledby="automation-quality-gate-title">
      <SectionTitle
        titleId="automation-quality-gate-title"
        title="Automation Quality Gate"
        description="This portfolio has its own quality gate because QA work should come with evidence."
      />
      <div className="gate-grid">
        {automationQualityGate.map((item) => (
          <article className="gate-card" key={item.check}>
            <div>
              <span>{item.check}</span>
              <strong>{item.status}</strong>
            </div>
            <code>{item.command}</code>
            <p>{item.signal}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

function InterviewMode() {
  const [activeQuestion, setActiveQuestion] = useState(interviewQuestions[0]);

  return (
    <section className="panel" aria-labelledby="interview-mode-title">
      <SectionTitle
        titleId="interview-mode-title"
        title="Interview Mode"
        description="Quick answers about how I test, automate, investigate, and work with engineering teams."
      />
      <div className="interview-layout">
        <div className="question-list">
          {interviewQuestions.map((item) => (
            <button
              key={item.question}
              className={activeQuestion.question === item.question ? 'question active' : 'question'}
              onClick={() => setActiveQuestion(item)}
              type="button"
            >
              <MessageSquareQuote size={18} />
              {item.question}
            </button>
          ))}
        </div>
        <article className="answer-card">
          <Bot aria-hidden="true" />
          <h3>{activeQuestion.question}</h3>
          <p>{activeQuestion.answer}</p>
        </article>
      </div>
    </section>
  );
}

export default function App() {
  return (
    <main>
      <SystemStatus />
      <ProfessionalProfile />
      <TestLab />
      <EngineeringToolbox />
      <TechnicalCaseStudies />
      <QAArcade />
      <WorkModeSimulator />
      <KnownIssues />
      <AutomationQualityGate />
      <InterviewMode />
      <footer>
        <Coffee size={18} />
        <span>QA Control Center idle state: still watching the edge cases.</span>
      </footer>
      <QACatWidget />
    </main>
  );
}
