/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Answers = React.memo(({
  answers, setActiveAnswer, setRightAnswer, score, setScore,
}) => {
  const click = (id) => {
    const answer = answers.find(e => id === e.id);
    setActiveAnswer(id);
    const right = answers.find(e => id === e.id && e.right);
    answer.pressed = true;
    if (right) {
      setRightAnswer(!!right);
      const myScore = answers.length - answers.filter(e => e.pressed && !e.right).length;
      if ((answers.filter(e => e.pressed && !e.right).length + 1) !== answers.length) {
        setScore(score + myScore);
      }
    }
  };
  return (
    <div>
      <ul>
        {answers.map(e => (
          <li key={e.id}>
            <div role="button" disabled={e.pressed} onClick={() => click(e.id)}>
              <i className="fas fa-circle" style={{ color: e.right ? 'green' : 'red' }} />
              {e.name}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
});

Answers.propTypes = {
  answers: PropTypes.arrayOf(PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    pressed: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired,
  })).isRequired,
  setActiveAnswer: PropTypes.func.isRequired,
  setRightAnswer: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};

export default Answers;
