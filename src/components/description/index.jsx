import React from 'react';
import PropTypes from 'prop-types';

function Description({ selectedAnswer }) {
  return (
    <div>
      {
        selectedAnswer
          ? (
            <>
              <h3>{selectedAnswer.name}</h3>
              <p>{selectedAnswer.year}</p>
              <p>{selectedAnswer.description}</p>
              <img alt={selectedAnswer.name} src={selectedAnswer.image} width="640" height="404" />
            </>
          )
          : <p>Пока ничего</p>
      }
    </div>

  );
}
Description.defaultProps = {
  selectedAnswer: null,
};
Description.propTypes = {
  selectedAnswer: PropTypes.exact({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    audio: PropTypes.string.isRequired,
    pressed: PropTypes.bool.isRequired,
    right: PropTypes.bool.isRequired,
  }),
};

export default Description;
