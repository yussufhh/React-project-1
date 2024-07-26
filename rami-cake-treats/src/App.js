import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Login from './Login';
import Menu from "./Menu";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Switch>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
