import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
      <div>
        <h1>Video Game SFX Quiz</h1>
        <p>
          Score:
          {score}
        </p>
      </div>
      <div>
        {titles.map(e => (
          <div className={e.class} key={e.key}>
            {e.name}
          </div>
        ))
        }
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
