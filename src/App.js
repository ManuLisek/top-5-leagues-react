import React, {useEffect, useReducer} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import MainLayout from './MainLayout/MainLayout';
import Home from './Home/Home';
import PremierLeague from './Leagues/PremierLeague';
import PrimeraDivision from './Leagues/PrimeraDivision';
import Bundesliga from './Leagues/Bundesliga';
import SerieA from './Leagues/SerieA';
import Ligue1 from './Leagues/Ligue1';
import NotFound from './NotFound/NotFound';
import * as HighlightsAPI from './api/HighlightsAPI';
import * as StandingsAPI from './api/StandingsAPI';
import * as ScorersAPI from './api/ScorersAPI';
import { initialStateHighlights, highlightsReducer } from './reducers/highlightsReducer';
import { initialStateStandings, standingsReducer } from './reducers/standingsReducer';
import { initialStateScorers, scorersReducer } from './reducers/scorersReducer';
import './styles/global.scss';

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
      .catch(error => {
        highlightsDispatch({type: 'FETCH_HIGHLIGHTS_ERROR'});
        return error;
      });
  }, []);

  useEffect(() => {
    StandingsAPI.getAllStandings()
      .then(allStandings => {
        standingsDispatch({type: 'FETCH_STANDINGS_SUCCESS', payload: allStandings});
      })
      .catch(error => {
        standingsDispatch({type: 'FETCH_STANDINGS_ERROR'});
        return error;
      });
  }, []);

  useEffect(() => {
    ScorersAPI.getAllScorers()
      .then(allScorers => {
        scorersDispatch({type: 'FETCH_SCORERS_SUCCESS', payload: allScorers});
      }) 
      .catch(error => {
        scorersDispatch({type: 'FETCH_SCORERS_ERROR'});
        return error;
      });
  }, []);

  return(
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route 
            path="/" 
            exact 
            component={Home}
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
    </BrowserRouter>
  );};

export default App;
