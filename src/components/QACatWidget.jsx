import { useState } from 'react';
import { qaCatMessages } from '../data/qaCatMessages.js';

export default function QACatWidget() {
  const [messageIndex, setMessageIndex] = useState(() => Math.floor(Math.random() * qaCatMessages.length));
  const [isMinimized, setIsMinimized] = useState(false);
  const message = qaCatMessages[messageIndex];

  function showNextMessage() {
    setIsMinimized(false);
    setMessageIndex((currentIndex) => (currentIndex + 1) % qaCatMessages.length);
  }

  if (isMinimized) {
    return (
      <button className="qa-cat-button minimized" onClick={showNextMessage} type="button" aria-label="Show QA Cat">
        {'\uD83D\uDC3E'}
      </button>
    );
  }

  return (
    <aside className="qa-cat-widget" aria-label="QA Cat widget">
      <button className="qa-cat-close" onClick={() => setIsMinimized(true)} type="button" aria-label="Minimize QA Cat">
        {'\u00D7'}
      </button>
      <button className="qa-cat-button" onClick={showNextMessage} type="button" aria-label="Next QA Cat message">
        {'\uD83D\uDC08'}
      </button>
      <div className="qa-cat-bubble">
        <span>QA Cat</span>
        <p>{message}</p>
      </div>
    </aside>
  );
}
