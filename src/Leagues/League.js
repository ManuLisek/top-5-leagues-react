import React from 'react';
import PropTypes from 'prop-types';
import Highlights from '../Highlights/Highlights';
import Standings from '../Standings/Standings';
import Scorers from '../Scorers/Scorers';
import Error from '../Error/Error';
import './League.scss';

const League = (props) => {

  const {highlights, haveHighlightsError, haveStandingsError, scorers, haveScorersError, competitionName, leagueName, flagUrl, alt, table, tableKey} = props;

  return(
    (!haveHighlightsError
      ?
      <section className="league">
        <main className="league__main">
          <Highlights highlights={highlights} competitionName={competitionName} leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
        </main>
        <aside className="league__aside">
          <Standings haveStandingsError={haveStandingsError} table={table} tableKey={tableKey}/>
          <Scorers scorers={scorers} haveScorersError={haveScorersError}/>
        </aside>
      </section>
      : <Error />)
  );};

League.propTypes = {
  highlights: PropTypes.array,
  haveHighlightsError: PropTypes.bool,
  haveStandingsError: PropTypes.bool,
  scorers: PropTypes.array,
  haveScorersError: PropTypes.bool,
  competitionName: PropTypes.string,
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
  table: PropTypes.array,
  tableKey: PropTypes.object,
};

export default League;