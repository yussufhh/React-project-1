
import Bakery from "./Bakery";
import BakeryData from "./data";
import './Menu.css'
import Customers from "./Customers";

const Menu = () => {
  console.log(BakeryData);
  return (
    <div className="menu">
      <h2 className="cake-Text">Our Menu</h2>
      <p className="cake-des">
        Authentic Italian cuisine. 6 creative dishes to choose from. All from
        our stone oven, all organic, all delicious.
      </p>
      <ul className="pizzas">
        {BakeryData.map((bakery) => {
          return <Bakery key={bakery.name} bakeryObject={bakery} />;
        })}
      </ul>
  
    </div>
  );
}

export default Menu;

