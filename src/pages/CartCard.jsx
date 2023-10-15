// import Contexts
import { useContext } from "react";
import { Context } from "../utils/MainContext";

const CartCard = ({ data }) => {

  const { removeCard } = useContext(Context);

  return (
    <li className="cartItem">
      <div className="cartImage">
        <img
          src={data.image}
          alt={data.title}
        />
      </div>
      <div className="cartItemDetails">
        <h4 className="cartItemTitle">{data.title}</h4>
        <p className="cartItemPrice">
          <span>{data.price}</span> $
        </p>
        <p className="cartItemQuantity">
          Quantity: <span>{data.quantity}</span>
        </p>
      </div>
      <button className="removeCard" onClick={() =>removeCard(data.id)}>X</button>
    </li>
  )
}

export default CartCard;