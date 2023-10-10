// import Link
import { Link } from "react-router-dom";

// import useContext
import { useContext } from "react";

// import Context
import { Context } from "../utils/MainContext";

const CartCard = () => {
  const { cart } = useContext(Context);
  console.log(cart);

  return (
    <>
      <li className="cartItem">
        <div className="cartImage">
          <img
            src="https://png.pngitem.com/pimgs/s/49-497525_annoyed-peter-peter-family-guy-transparent-hd-png.png"
            alt="#"
          />
        </div>
        <div className="cartItemDetails">
          <h4 className="cartItemTitle">title</h4>
          <p className="cartItemPrice">
            <span>36</span> $
          </p>
          <p className="cartItemQuantity">
            Quantity: <span>121</span>
          </p>
        </div>
      </li>
      <Link to="/cart">View Cart</Link>
    </>
  );
};

export default CartCard;
