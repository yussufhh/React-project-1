import { useState } from "react";

function Bakery({ bakeryObject }) {
  const [isSoldOut, setIsSoldOut] = useState(bakeryObject.soldOut);
  const [priceSold, setPriceSold] = useState(bakeryObject.soldOut ? 'SOLDOUT' : bakeryObject.price);

  function apply() {
    setIsSoldOut(true);
    setPriceSold('SOLDOUT');
  }

  return (
    <li className={`pizza ${isSoldOut ? 'sold-out' : ''}`}>
      <img src={bakeryObject.photoName} alt={bakeryObject.name} />
      <div>
        <h3>{bakeryObject.name}</h3>
        <p>{bakeryObject.ingredients}</p>
        <span className="priceSpan">{priceSold}</span>
        <button className="btn0" onClick={apply} disabled={isSoldOut}>Buy</button>
      </div>
    </li>
  );
}

export default Bakery;
