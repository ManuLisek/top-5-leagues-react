import React, {useEffect, useReducer} from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
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

  useEffect(() => {
    HighlightsAPI.getAllHighlights()
      .then(allHighlights => {
        highlightsDispatch({type: 'FETCH_HIGHLIGHTS_SUCCESS', payload: allHighlights});
      })
      .catch(error => {
        highlightsDispatch({type: 'FETCH_HIGHLIGHTS_ERROR'});
        console.log(error);
      });
  }, []);

  useEffect(() => {
    StandingsAPI.getAllStandings()
      .then(allStandings => {
        standingsDispatch({type: 'FETCH_STANDINGS_SUCCESS', payload: allStandings});
      })
      .catch(error => {
        standingsDispatch({type: 'FETCH_STANDINGS_ERROR'});
        console.log(error);
      });
  }, []);

  useEffect(() => {
    ScorersAPI.getAllScorers()
      .then(allScorers => {
        scorersDispatch({type: 'FETCH_SCORERS_SUCCESS', payload: allScorers});
      }) 
      .catch(error => {
        scorersDispatch({type: 'FETCH_SCORERS_ERROR'});
        console.log(error);
      });
  }, []);

  console.log(scorersState);
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
                highlights={highlightsState.highlights} 
                haveHighlightsError={highlightsState.haveHighlightsError}
                standings={standingsState.standingsPL}
                haveStandingsError={standingsState.haveStandingsError}
                scorers={scorersState.scorersPL}
                haveScorersError={scorersState.haveScorersError}
              />
            }
          />
          <Route 
            path="/PrimeraDivision" 
            render={() => 
              <PrimeraDivision 
                highlights={highlightsState.highlights} 
                haveHighlightsError={highlightsState.haveHighlightsError}
                standings={standingsState.standingsPD}
                haveStandingsError={standingsState.haveStandingsError}
                scorers={scorersState.scorersPD}
                haveScorersError={scorersState.haveScorersError}
              />
            }
          />
          <Route 
            path="/Bundesliga" 
            render={() => 
              <Bundesliga 
                highlights={highlightsState.highlights}
                haveHighlightsError={highlightsState.haveHighlightsError}
                standings={standingsState.standingsBL1}
                haveStandingsError={standingsState.haveStandingsError}
                scorers={scorersState.scorersBL1}
                haveScorersError={scorersState.haveScorersError}
              />
            }
          />
          <Route 
            path="/SerieA" 
            render={() => 
              <SerieA 
                highlights={highlightsState.highlights} 
                haveHighlightsError={highlightsState.haveHighlightsError}
                standings={standingsState.standingsSA}
                haveStandingsError={standingsState.haveStandingsError}
                scorers={scorersState.scorersSA}
                haveScorersError={scorersState.haveScorersError}
              />
            }
          />
          <Route 
            path="/Ligue1" 
            render={() => 
              <Ligue1 
                highlights={highlightsState.highlights} 
                haveHighlightsError={highlightsState.haveHighlightsError}
                standings={standingsState.standingsFL1}
                haveStandingsError={standingsState.haveStandingsError}
                scorers={scorersState.scorersFL1}
                haveScorersError={scorersState.haveScorersError}
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
