import React from 'react';
import Highlights from '../Highlights/Highlights';
import Scorers from '../Scorers/Scorers';
import Standings from '../Standings/Standings';
import PropTypes from 'prop-types';
import LoaderComp from '../LoaderComp/LoaderComp';
import Error from '../Error/Error';
import './League.scss';


const League = (props) => {
  const {highlights, areHighlightsLoading, haveHighlightsError, areStandingsLoading, haveStandingsError, scorers, areScorersLoading, haveScorersError, competitionName, leagueName, flagUrl, alt, table, tableKey} = props;

  return(
    areHighlightsLoading && areStandingsLoading && areScorersLoading
      ?   <LoaderComp/>
      :   (!haveHighlightsError
        ?   <section className="league">
          <main className="league__main">
            <Highlights highlights={highlights} competitionName={competitionName} leagueName={leagueName} flagUrl={flagUrl} alt={alt}/>
          </main>
          <aside className="league__aside">
            <Standings haveStandingsError={haveStandingsError} table={table} tableKey={tableKey}/>
            <Scorers scorers={scorers} haveScorersError={haveScorersError}/>
          </aside>
        </section>
        :   <Error/>)

  );};

League.propTypes = {
  highlights: PropTypes.array,
  areHighlightsLoading: PropTypes.bool,
  haveHighlightsError: PropTypes.bool,
  areStandingsLoading: PropTypes.bool,
  haveStandingsError: PropTypes.bool,
  scorers: PropTypes.array,
  areScorersLoading: PropTypes.bool,
  haveScorersError: PropTypes.bool,
  competitionName: PropTypes.string,
  leagueName: PropTypes.string,
  flagUrl: PropTypes.string,
  alt: PropTypes.string,
  table: PropTypes.array,
  tableKey: PropTypes.object,
};


export default League;