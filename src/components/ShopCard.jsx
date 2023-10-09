// import Link
import {Link} from "react-router-dom";

const ShopCard = ({data}) => {
    return (
        <li className="cardItem">
            <div className="cardImage">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="cardDetails">
                <div className="cardHeader">
                    <h3 className="cardTitle">{data.title}</h3>
                    <p className="cardPrice">{data.price} $</p>
                </div>
                <p className="cardInfo">
                    {data.details}
                </p>
                <Link to={`/product/${data.id}`} key={data.id}>Learn more...</Link>
            </div>
        </li>
    )
}

export default ShopCard;