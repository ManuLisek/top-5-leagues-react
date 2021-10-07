import React, {useEffect, useReducer} from 'react';
import {HashRouter as Router, Switch, Route, Redirect} from 'react-router-dom';
import MainLayout from './components/MainLayout/MainLayout';
import Home from './views/Home/Home';
import PremierLeague from './views/PremierLeague';
import PrimeraDivision from './views/PrimeraDivision';
import Bundesliga from './views/Bundesliga';
import SerieA from './views/SerieA';
import Ligue1 from './views/Ligue1';
import NotFound from './views/NotFound/NotFound';
import * as HighlightsAPI from './APIs/HighlightsAPI';
import * as StandingsAPI from './APIs/StandingsAPI';
import * as ScorersAPI from './APIs/ScorersAPI';
import { initialStateHighlights, highlightsReducer } from './reducers/highlightsReducer';
import { initialStateStandings, standingsReducer } from './reducers/standingsReducer';
import { initialStateScorers, scorersReducer } from './reducers/scorersReducer';
import './assets/styles/global.scss';

const App = () => {

  const [highlightsState, highlightsDispatch] = useReducer(highlightsReducer, initialStateHighlights);
  const [standingsState, standingsDispatch] = useReducer(standingsReducer, initialStateStandings);
  const [scorersState, scorersDispatch] = useReducer(scorersReducer, initialStateScorers);
  const commonProps = {
    highlights: highlightsState.highlights,
    areHighlightsLoading: highlightsState.areHighlightsLoading,
    haveHighlightsError: highlightsState.haveHighlightsError,
    areStandingsLoading: standingsState.areStandingsLoading,
    haveStandingsError: standingsState.haveStandingsError,
    areScorersLoading: scorersState.areScorersLoading,
    haveScorersError: scorersState.haveScorersError,
  };

  useEffect(() => {
    HighlightsAPI.getAllHighlights()
      .then(allHighlights => {
        highlightsDispatch({type: 'FETCH_HIGHLIGHTS_SUCCESS', payload: allHighlights});
      })
      .catch(() => {
        highlightsDispatch({type: 'FETCH_HIGHLIGHTS_ERROR'});
      });
  }, []);

  useEffect(() => {
    StandingsAPI.getAllStandings()
      .then(allStandings => {
        standingsDispatch({type: 'FETCH_STANDINGS_SUCCESS', payload: allStandings});
      })
      .catch(() => {
        standingsDispatch({type: 'FETCH_STANDINGS_ERROR'});
      });
  }, []);

  useEffect(() => {
    ScorersAPI.getAllScorers()
      .then(allScorers => {
        scorersDispatch({type: 'FETCH_SCORERS_SUCCESS', payload: allScorers});
      }) 
      .catch(() => {
        scorersDispatch({type: 'FETCH_SCORERS_ERROR'});
      });
  }, []);

  return(
    <Router>
      <MainLayout>
        <Switch>
          <Route 
            path="/" 
            exact 
            render={() => <Home />}
          />
          <Route 
            path="/PremierLeague" 
            render={() => 
              <PremierLeague 
                standings={standingsState.standingsPL}
                scorers={scorersState.scorersPL}
                {...commonProps}
              />
            }
          />
          <Route 
            path="/PrimeraDivision" 
            render={() => 
              <PrimeraDivision 
                standings={standingsState.standingsPD}
                scorers={scorersState.scorersPD}
                {...commonProps}
              />
            }
          />
          <Route 
            path="/Bundesliga" 
            render={() => 
              <Bundesliga 
                standings={standingsState.standingsBL1}
                scorers={scorersState.scorersBL1}
                {...commonProps}
              />
            }
          />
          <Route 
            path="/SerieA" 
            render={() => 
              <SerieA 
                standings={standingsState.standingsSA}
                scorers={scorersState.scorersSA}
                {...commonProps}
              />
            }
          />
          <Route 
            path="/Ligue1" 
            render={() => 
              <Ligue1 
                standings={standingsState.standingsFL1}
                scorers={scorersState.scorersFL1}
                {...commonProps}
              />
            }
          />
          <Route 
            render={() => 
              <Redirect to={{pathname: '/not-found'}} />} 
            component={NotFound}
          />
        </Switch>
      </MainLayout>
    </Router>
  );};

export default App;
