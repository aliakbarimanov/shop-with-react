// import Context
import { useContext } from "react";
import { Context } from "../utils/MainContext";


const CartPage = () => {

  const { cart } = useContext(Context);

  return (
    <section className="cartPage">
      {
        cart.map((item) => (
          <li className="cartItem">
            <div className="cartImage">
              <img
                src={item.image}
                alt={item.title}
              />
            </div>
            <div className="cartItemDesc">
              <div className="cartItemDetails">
                <h4 className="cartItemTitle">{item.title}</h4>
                <p className="cartItemPrice">
                  <span>{item.price}</span> $
                </p>
              </div>
              <p className="cartItemQuantity">
                Quantity: <span>{item.quantity}</span>
              </p>
            </div>
          </li>
        ))
      }
    </section >
  );
};

export default CartPage;
