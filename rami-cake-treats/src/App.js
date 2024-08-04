import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";
import './App.css';
import Navbar from './Navbar';
import Header from './Header';
import Login from './Login';
import Menu from "./Menu";
import SignUp from "./SignUp";
import Footer from "./Footer";
import Home from "./Home";
import LoadingScreen from "./LoadinScreen";
import ContactForm from './ContactForm'
import About from './About'
import Users from "./Users";
import Admin from "./Admin";
import ResetPassword from "./Reset";



const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <LoadingScreen />;
  }
  return (
    
    <div className="App">
     
      <Navbar />
      <Header />
      {/* <h4 className=" bg-blue-600">moon lover</h4> */}
   
      <Switch>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route exact path="/users">
          <Users/>
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/signup">
          <SignUp />
        </Route>
        <Route exact path="/resetpassword">
          <ResetPassword />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
        
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
        <ContactForm/>
        </Route>
       <Route exact path="/orders">
       <Admin/>
       </Route>
      </Switch>
   <Footer/>
    </div>
  );
}   

export default App;
