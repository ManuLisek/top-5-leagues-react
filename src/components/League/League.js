import React from 'react';
import Highlights from '../Highlights/Highlights';
import Scorers from '../Scorers/Scorers';
import Standings from '../Standings/Standings';
import PropTypes from 'prop-types';
import LoaderComp from '../LoaderComp/LoaderComp';
import Error from '../Error/Error';
import './League.scss';


const League = (props) => {
  const {areHighlightsLoading, haveHighlightsError, areStandingsLoading, areScorersLoading} = props;

  return(
    areHighlightsLoading && areStandingsLoading && areScorersLoading
      ?   <LoaderComp/>
      :   (!haveHighlightsError
        ?   <section className="league">
          <main className="league__main">
            <Highlights {...props}/>
          </main>
          <aside className="league__aside">
            <Standings {...props}/>
            <Scorers {...props}/>
          </aside>
        </section>
        :   <Error/>)

  );};

League.propTypes = {
  areHighlightsLoading: PropTypes.bool,
  haveHighlightsError: PropTypes.bool,
  areStandingsLoading: PropTypes.bool,
  areScorersLoading: PropTypes.bool,

};


export default League;