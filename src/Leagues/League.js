import React from 'react';
import Match from '../Match/Match';
import PropTypes from 'prop-types';
import uuid from 'react-uuid';
import './League.scss';

const League = (props) => {

  const {leagueName, flagUrl, alt, highlights, competitionName} = props;
  const highlightsList = highlights.map(item => (
    item.competition.name === competitionName
      ? <li className="list" key={uuid()}>
        <Match match={item} />
      </li>
      :   ''
  ));
  return (
    <div className="league">
      <header >
        <div >
          <img className="league__image" src={flagUrl}  alt={alt}/>
        </div>
        <h2 >{leagueName}</h2>
        <ul>
          {highlightsList}
        </ul>
      </header>

    </div>
  );
};

League.propTypes = {
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
  highlights: PropTypes.array,
  competitionName: PropTypes.string,
};

export default League;