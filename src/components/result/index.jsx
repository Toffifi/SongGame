import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Result = ({ score, oneMoreTime }) => (
  <div className="result_container">
    <h2>Поздравляем!</h2>
    <p>
      Вы прошли викторину и набрали
      {` ${score} `}
      из 29 возможных баллов.
    </p>
    {score >= 29
      ? (
        <>
          <p>Это абсолютная победа!</p>
          <div>
            <img src="https://thumbs.gfycat.com/WindyConsiderateEastrussiancoursinghounds-size_restricted.gif" width={300} alt="Like" />
          </div>
        </>
      )
      : null
    }
    <button
      type="button"
      className="again"
      onClick={oneMoreTime}
    >
      Попробовать еще раз
    </button>
  </div>
);

Result.propTypes = {
  oneMoreTime: PropTypes.func.isRequired,
  score: PropTypes.number.isRequired,
};

export default Result;
