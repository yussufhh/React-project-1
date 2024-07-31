
import { NavLink } from "react-router-dom";
import Sidebar from "./Sidebar";
import cake from './images/image.png';
import './Navbar.css';

const Navbar = () => {

  return (
    
    <nav>
      
      <img src={cake} className="nav--icon" alt="cake icon" />
      
      <h3 className="nav--logo_text">Rami Cake Treats</h3>
     
      
      
     
      
      <div className="nav-items">
        <NavLink exact to="/" className="nav--links" activeClassName="active">
          <span className="span-1">Home</span>
        </NavLink>
        <NavLink to="/users" className="nav--links" activeClassName="active">
          Users
        </NavLink>
        <NavLink to="/menu" className="nav--links" activeClassName="active">
          Menu
        </NavLink>
        <NavLink to="/orders" className="nav--links" activeClassName="active">
          Orders
        </NavLink>
        <NavLink to="/about" className="nav--links" activeClassName="active">
          About
        </NavLink>
        <NavLink to="/contact" className="nav--links" activeClassName="active">
          Contact
        </NavLink>
        <NavLink to="/login" className="nav--links" activeClassName="active">
          Login
        </NavLink>
        <Sidebar/>
      </div>
    </nav>
  );
}

export default Navbar;
