import React, { Suspense } from 'react';
import PropTypes from 'prop-types';
import Highlights from '../Highlights/Highlights';
import LoaderComp from '../LoaderComp/LoaderComp';
import Error from '../Error/Error';
import './League.scss';

const League = (props) => {
  const {
    areHighlightsLoading,
    haveHighlightsError,
    areStandingsLoading,
    areScorersLoading,
  } = props;
  const Scorers = React.lazy(() => import('../Scorers/Scorers'));
  const Standings = React.lazy(() => import('../Standings/Standings'));

  return areHighlightsLoading && areStandingsLoading && areScorersLoading ? (
    <LoaderComp />
  ) : !haveHighlightsError ? (
    <section className="league">
      <main className="league__main">
        <Highlights {...props} />
      </main>
      <aside className="league__aside">
        <Suspense fallback={null}>
          <Standings {...props} />
        </Suspense>
        <Suspense fallback={null}>
          <Scorers {...props} />
        </Suspense>
      </aside>
    </section>
  ) : (
    <Error />
  );
};

League.propTypes = {
  areHighlightsLoading: PropTypes.bool,
  haveHighlightsError: PropTypes.bool,
  areStandingsLoading: PropTypes.bool,
  areScorersLoading: PropTypes.bool,
};

export default League;
