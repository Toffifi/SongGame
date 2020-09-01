import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

const Result = ({ score, oneMoreTime }) => (
  <div className="result_container">
    <h2>Поздравляем!</h2>
    <h4>
      Вы прошли викторину и набрали
      {score}
      из 30 возможных баллов.
    </h4>
    {score >= 29 ? <img src="https://thumbs.gfycat.com/WindyConsiderateEastrussiancoursinghounds-size_restricted.gif" width={300} alt="Like" /> : null}
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
