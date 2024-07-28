import { Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Login from './Login';
import Menu from "./Menu";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Home from "./Home";

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
        <Route exact path="/SingUp">
          <SignUp />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
   <Footer/>
    </div>
  );
}   

export default App;
