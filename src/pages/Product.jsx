//import dataBase
import dataBase from "../db/dataBase";

// import useParams
import { useParams } from "react-router-dom";

// import useEffect
import { useEffect, useState } from "react";

const Product = () => {
    const { productID } = useParams();
    const [data, setData] = useState({});

    useEffect(() => {
        const getData = () => {
            let singleProduct = dataBase.find((item) => item.id === Number(productID) );
            setData(singleProduct);
        }
        getData();
    }, [productID]);

    return (
        <section className="product">
            <div className="productImage">
                <img src={data.image} alt={data.title} />
            </div>
            <div className="productDetails">
                <div className="productHeader">
                    <h3 className="productTitle">{data.title}</h3>
                    <p className="productPrice">{data.price} $</p>
                </div>
                <p className="productInfo">
                    {data.details}
                </p>
            </div>
        </section>
    )
}

export default Product;