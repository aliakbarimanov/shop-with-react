const CartCard = ({ data }) => {

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
    </li>
  )
}

export default CartCard;