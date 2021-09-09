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
        highlightsDispatch({type: 'FETCH_HIGHLIGHTS', payload: allHighlights});
      });
  }, []);

  useEffect(() => {
    StandingsAPI.getAllStandings()
      .then(allStandings => {
        standingsDispatch({type: 'FETCH_STANDINGS', payload: allStandings});
      });
    ScorersAPI.getAllScorers()
      .then(allScorers => {
        scorersDispatch({type: 'FETCH_SCORERS', payload: allScorers});
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
                standings={standingsState.standingsPL}
                scorers={scorersState.scorersPL}
              />
            }
          />
          <Route 
            path="/PrimeraDivision" 
            render={() => 
              <PrimeraDivision 
                highlights={highlightsState.highlights} 
                standings={standingsState.standingsPD}
                scorers={scorersState.scorersPD}
              />
            }
          />
          <Route 
            path="/Bundesliga" 
            render={() => 
              <Bundesliga 
                highlights={highlightsState.highlights}
                standings={standingsState.standingsBL1}
                scorers={scorersState.scorersBL1}
              />
            }
          />
          <Route 
            path="/SerieA" 
            render={() => 
              <SerieA 
                highlights={highlightsState.highlights} 
                standings={standingsState.standingsSA}
                scorers={scorersState.scorersSA}
              />
            }
          />
          <Route 
            path="/Ligue1" 
            render={() => 
              <Ligue1 
                highlights={highlightsState.highlights} 
                standings={standingsState.standingsFL1}
                scorers={scorersState.scorersFL1}
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
