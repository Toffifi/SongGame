/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/index.jsx';

function Question({ question }) {
  if (question) {
    console.log(question.name);
    return (
      <div>
        <p>{question.name}</p>
        <Player playingItem={question} />
      </div>
    );
  }
  return (
    <div />
  );
}

Question.defaultProps = {
  question: null,
};

Question.propTypes = {
  question: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
  }),
};

export default Question;
