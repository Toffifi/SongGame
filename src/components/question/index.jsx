import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Player from '../player/index.jsx';
import './style.scss';

const Question = React.memo(({ question, rightAnswer }) => {
  if (question) {
    useEffect(() => {
      console.log(question.name);
    }, [question]);
    return (
      <div className="question">
        {
        rightAnswer
          ? (
            <>
              <img src={question.image} alt={question.name} />
              <h3>{question.name}</h3>
            </>
          )
          : (
            <>
              <img alt="default" src="https://img.freepik.com/free-vector/hand-drawn-sketch-joystick-monochrome_93150-259.jpg?size=626&ext=jpg" />
              <h3>*****</h3>
            </>
          )
        }
        <Player playingItem={question} />
      </div>
    );
  }
  return (
    <div />
  );
});

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
    pressed: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired,
  }),
  rightAnswer: PropTypes.bool.isRequired,
};

export default Question;
