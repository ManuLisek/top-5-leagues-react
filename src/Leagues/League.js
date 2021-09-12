import React from 'react';
import PropTypes from 'prop-types';
import Highlights from '../Highlights/Highlights';
import Standings from '../Standings/Standings';
import Scorers from '../Scorers/Scorers';
import './League.scss';

const League = (props) => {

  const {leagueName, flagUrl, alt, highlights, competitionName, table, tableKey, scorers} = props;

  return(
    <section className="league">
      <main className="league__main">
        <Highlights highlights={highlights} competitionName={competitionName} leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
      </main>
      <aside className="league__aside">
        <Standings table={table} tableKey={tableKey}/>
        <Scorers scorers={scorers} />
      </aside>
    </section>
  );};

League.propTypes = {
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
  highlights: PropTypes.array,
  competitionName: PropTypes.string,
  table: PropTypes.array,
  tableKey: PropTypes.object,
  scorers: PropTypes.array,
};

export default League;