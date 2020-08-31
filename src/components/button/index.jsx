import React from 'react';
import PropTypes from 'prop-types';

function Button({ activeCategory, setActiveCategory }) {
  return (
    <div>
      <button type="button" onClick={() => setActiveCategory(activeCategory + 1)}>Next level</button>
    </div>
  );
}

Button.propTypes = {
  activeCategory: PropTypes.number.isRequired,
  setActiveCategory: PropTypes.func.isRequired,
};

export default Button;
