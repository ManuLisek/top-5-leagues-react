import React from 'react';
import Match from '../Match/Match';
import PropTypes from 'prop-types';
import Standings from '../Standings/Standings';
import uuid from 'react-uuid';
import './League.scss';

const League = (props) => {

  const {leagueName, flagUrl, alt, highlights, competitionName, table, tableKey} = props;
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
      <Standings table={table} tableKey={tableKey}/>
    </div>
  );
};

League.propTypes = {
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
  highlights: PropTypes.array,
  competitionName: PropTypes.string,
  table: PropTypes.array,
  tableKey: PropTypes.object,
};

export default League;