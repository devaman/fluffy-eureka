import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './containers/Home';
import AddFavorite from './containers/AddFavorite';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Switch>
        <Route path="/fav" component={AddFavorite}/>
        <Route path="/" component={Home}/>
      </Switch>
    </div>
  );
}

export default App;
