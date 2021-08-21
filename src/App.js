import React, {useState, useEffect} from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
import PremierLeague from './Leagues/PremierLeague';
import PrimeraDivision from './Leagues/PrimeraDivision';
import Bundesliga from './Leagues/Bundesliga';
import SerieA from './Leagues/SerieA';
import Ligue1 from './Leagues/Ligue1';
import * as HighlightsAPI from './api/HighlightsAPI';
import './styles/global.scss';


const App = () => {

  const [highlights, setHighlights] = useState([]);

  useEffect(() => {

    HighlightsAPI.getAllHighlights()
      .then(highlightsList => {
        setHighlights([...highlightsList]);
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
                highlights={highlights} 
              />
            }
          />
          <Route 
            path="/PrimeraDivision" 
            render={() => 
              <PrimeraDivision 
                highlights={highlights} 
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
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );};

export default App;
