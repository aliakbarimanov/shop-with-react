const Shop = () => {
  return (
    <section className="shopPage">
      <h2 className="shopTitle">Shop page</h2>
      <ul className="cardList">

        <li className="cardItem">
          <div className="cardImage">
            <img src="https://w7.pngwing.com/pngs/594/1000/png-transparent-mortal-kombat-x-mortal-kombat-ii-mortal-kombat-mythologies-sub-zero-scorpion-insects-video-game-fictional-character.png" alt="#" />
          </div>
          <div className="cardDetails">
            <div className="cardHeader">
              <h3 className="cardTitle">AAA</h3>
              <p className="cardPrice">33 $</p>
            </div>
            <p className="cardInfo">
              Lorem ipsum dolor sit, amet consectetur adipisicing.
            </p>
            <a href="#">Learn more...</a>
          </div>
        </li>

      </ul>
    </section>
  );
};

export default Shop;
