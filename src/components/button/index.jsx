import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Button({
  activeCategory, setActiveCategory, rightAnswer, setRightAnswer,
}) {
  const click = () => {
    setActiveCategory(activeCategory + 1);
    setRightAnswer(false);
  };

  return (
    <div>
      <button className={rightAnswer ? 'btn next' : 'btn stop'} type="button" disabled={!rightAnswer} onClick={() => click()}>Next level</button>
    </div>
  );
}

Button.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
  rightAnswer: PropTypes.bool.isRequired,
  setRightAnswer: PropTypes.func.isRequired,
};

export default Button;
