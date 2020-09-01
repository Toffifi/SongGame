/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Answers = React.memo(({ answers, answerClicked }) => (
  <div className="answers">
    <ul>
      {answers.map((e) => {
        let color = 'gray';
        if (e.pressed) {
          color = e.right ? 'green' : 'red';
        }
        return (
          <li key={e.id} onClick={() => answerClicked(e)}>
            <div role="button">
              <i className="fas fa-circle" style={{ color }} />
              {e.name}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
));

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
  answerClicked: PropTypes.func.isRequired,
};

export default Answers;
