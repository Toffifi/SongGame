import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function Header({ score, array, activeCategory }) {
  const titleState = array.map((e, i) => {
    const clName = () => {
      if (i === activeCategory) {
        return 'active';
      } if (i < activeCategory) {
        return 'was_active';
      }
      return 'unactive';
    };
    return {
      key: i,
      name: e,
      class: clName(),
    };
  });

  const [titles, setTitles] = useState(titleState);

  useEffect(() => {
    setTitles(titleState);
  }, [activeCategory]);
  return (
    <header>
      <div className="top">
        <h1 className="logo">
          VideoGame
          <span className="logo-span"> SFX Quiz</span>
        </h1>
        <p className="score">
          Score:
          {score}
        </p>
      </div>
      <div className="titles">
        <ul>
          {titles.map(e => (
            <li className={e.class} key={e.key}>
              <div>
                <p>
                  {e.name}
                </p>
              </div>
            </li>
          ))
          }
        </ul>
      </div>
    </header>
  );
}

Header.propTypes = {
  score: PropTypes.number.isRequired,
  array: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
  activeCategory: PropTypes.number.isRequired,
};

export default Header;
