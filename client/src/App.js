import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import landingPage from './components/LandingPage/landingPage';
import Home from './components/Home/home';
import pokemonCreate from './components/PokemonCreate/pokemonCreate';
import detail from './components/Detail/detail';

 
function App() {
  return (
    <BrowserRouter>
      <div>
        <Switch>
            <Route exact path= "/" component={landingPage} />
            <Route path="/home" component={Home} />
            <Route exact path="/crearpokemon" component={pokemonCreate} />
            <Route path='/pokemon/:id' component={detail} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
