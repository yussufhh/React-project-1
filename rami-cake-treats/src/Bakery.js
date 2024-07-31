import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Bakery({ bakeryObject }) {
  const [isSoldOut, setIsSoldOut] = useState(bakeryObject.soldOut);
  const [priceSold, setPriceSold] = useState(bakeryObject.soldOut ? 'SOLDOUT' : bakeryObject.price);

  function apply() {
    setIsSoldOut(true);
    setPriceSold('SOLDOUT');
  }

  return (
    <div>
    <li className={`pizza ${isSoldOut ? 'sold-out' : ''}`}>
      <img src={bakeryObject.photoName} alt={bakeryObject.name} />
      <div>
        <h3>{bakeryObject.name}</h3>
        <p>{bakeryObject.ingredients}</p>
        <span className="priceSpan">{priceSold}</span>
        
      </div>
      
    </li>
    <button className="btn btn-dark buttons" onClick={apply} disabled={isSoldOut}><Link path to='/contact'>Buy</Link></button>
    </div>
  );
}

export default Bakery;
