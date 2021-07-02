import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import MainLayout from './MainLayout';
import Home from './Home';
import PremierLeague from './Leagues/PremierLeague';
import PrimeraDivision from './Leagues/PrimeraDivision';
import Bundesliga from './Leagues/Bundesliga';
import SerieA from './Leagues/SerieA';
import Ligue1 from './Leagues/Ligue1';
import './styles/global.scss';


const App = () => {

  return(
    <BrowserRouter>
      <MainLayout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/PremierLeague" component={PremierLeague}/>
          <Route exact path="/PrimeraDivision" component={PrimeraDivision}/>
          <Route exact path="/Bundesliga" component={Bundesliga}/>
          <Route exact path="/SerieA" component={SerieA}/>
          <Route exact path="/Ligue1" component={Ligue1}/>
        </Switch>
      </MainLayout>
    </BrowserRouter>
  );};

export default App;
