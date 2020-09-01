import React from 'react';
import PropTypes from 'prop-types';

function Button({
  activeCategory, setActiveCategory, rightAnswer, setRightAnswer,
}) {
  const click = () => {
    setActiveCategory(activeCategory + 1);
    setRightAnswer(false);
  };

  return (
    <div>
      <button type="button" disabled={!rightAnswer} onClick={() => click()}>Next level</button>
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
