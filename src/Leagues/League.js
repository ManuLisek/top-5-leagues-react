import React from 'react';
import PropTypes from 'prop-types';
import './League.scss';

const League = (props) => {

  const {leagueName, flagUrl, alt} = props;
    
  return (
    <div className="league">
      <header >
        <div >
          <img className="league__image" src={flagUrl}  alt={alt}/>
        </div>
        <h2 >{leagueName}</h2>
      </header>

    </div>
  );
};

League.propTypes = {
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
};

export default League;