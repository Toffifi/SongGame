import React from 'react';
import PropTypes from 'prop-types';

const Answers = React.memo(({ answers, setActiveAnswer }) => {
  console.log('test');
  return (
    <div>
      <ul>
        {answers.map(e => (
          <li key={e.id}>
            <button type="button" disabled={e.pressed} style={{ color: e.right ? 'green' : 'red' }} onClick={() => setActiveAnswer(e.id)}>{e.name}</button>
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
};

export default Answers;
