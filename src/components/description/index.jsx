import React from 'react';
import PropTypes from 'prop-types';
import Player from '../player/index.jsx';
import './style.scss';

function Description({ selectedAnswer }) {
  return (
    <div className="description">
      {
        selectedAnswer
          ? (
            <>
              <div className="card">
                <h3>{selectedAnswer.name}</h3>
                <p>{selectedAnswer.year}</p>
                <img alt={selectedAnswer.name} src={selectedAnswer.image} />
                <Player playingItem={selectedAnswer} />
              </div>
              <p>{selectedAnswer.description}</p>
            </>
          )
          : <p>Прослушайте саундэффект и выберете из какой он игры</p>
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
