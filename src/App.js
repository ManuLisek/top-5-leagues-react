import React, {useState, useEffect, useReducer} from 'react';
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
import { initialStateStandings, standingsReducer } from './reducers/standingsReducer';
import './styles/global.scss';



const App = () => {

  const [highlights, setHighlights] = useState([]);
  const [standingsState, standingsDispatch] = useReducer(standingsReducer, initialStateStandings);

  useEffect(() => {

    HighlightsAPI.getAllHighlights()
      .then(highlightsList => {
        setHighlights([...highlightsList]);
      }); 
  }, []);

  useEffect(() => {
    StandingsAPI.getAllStandings()
      .then(allStandings => {
        standingsDispatch({type: 'FETCH_STANDINGS', payload: allStandings});
      });
  }, []);

  console.log(standingsState);
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
                highlights={highlights} 
                standings={standingsState.standingsPL}
              />
            }
          />
          <Route 
            path="/PrimeraDivision" 
            render={() => 
              <PrimeraDivision 
                highlights={highlights} 
                standings={standingsState.standingsPD}
              />
            }
          />
          <Route 
            path="/Bundesliga" 
            render={() => 
              <Bundesliga 
                highlights={highlights}
              />
            }
          />
          <Route 
            path="/SerieA" 
            render={() => 
              <SerieA 
                highlights={highlights} 
                standings={standingsState.standingsSA}
              />
            }
          />
          <Route 
            path="/Ligue1" 
            render={() => 
              <Ligue1 
                highlights={highlights} 
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
