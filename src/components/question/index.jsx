import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Player from '../player/index.jsx';

const Question = React.memo(({ question, rightAnswer }) => {
  if (question) {
    useEffect(() => {
      console.log(question.name);
    }, [question]);
    return (
      <div>
        {
        rightAnswer
          ? (
            <>
              <p>{question.name}</p>
              <img src={question.image} alt={question.name} />
            </>
          )
          : (
            <>
              <p>*****</p>
              <img alt="default" src="https://png.pngtree.com/png-vector/20190123/ourlarge/pngtree-hand-painted-cartoon-gamepad-game-png-image_539567.jpg" />
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
