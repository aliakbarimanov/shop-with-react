// import Context
import { useContext } from "react";
import { Context } from "../utils/MainContext";


const CartPage = () => {

  const { cart, productsSum, removeCard, totalPrice } = useContext(Context);

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
            <button className="removeCard" onClick={() => removeCard(item.id)}>X</button>
          </li>
        ))
      }
      <div className="cartTotals">
        <p className="totalProduct">Total product: <span>{productsSum}</span></p>
        <p className="totalPrice">Total price: <span>{totalPrice}</span></p>
      </div>
    </section >
  );
};

export default CartPage;
