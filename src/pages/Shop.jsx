// import dataBase
import dataBase from "../db/dataBase";

// import ShopCard
import ShopCard from "../components/ShopCard";

const Shop = () => {
  return (
    <section className="shopPage">
      <h2 className="shopTitle">Shop page</h2>
      <ul className="cardList">

        {dataBase.map((item)=>(
          <ShopCard data={item} key={item.id} />
        ))}

      </ul>
    </section>
  );
};

export default Shop;
