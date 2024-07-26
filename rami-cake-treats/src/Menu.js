// import Pizza from "./Pizza";
// import BakeryData from "./data";
// import './Menu.css'

// const Menu = () => {
//   console.log(BakeryData);
//   return (
//     <div className="menu">
//       <h2 className="pizaa-Text">Our Menu</h2>
//       <p className="piza-des">
//         Authentic Italian cuisine. 6 creative dishes to choose from. All from
//         our stone oven, all organic, all delicious.
//       </p>
//       <ul className="pizzas">
//         {BakeryData.map((pizza) => {
//           return <Pizza key={pizza.name} pizzaObject={pizza} />;
//         })}
//       </ul>
//     </div>
//   );
// }

// export default Menu;


import Bakery from "./Bakery";
import BakeryData from "./data";
import './Menu.css'

const Menu = () => {
  console.log(BakeryData);
  return (
    <div className="menu">
      <h2 className="pizaa-Text">Our Menu</h2>
      <p className="piza-des">
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

