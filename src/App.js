// import Routes
import { Routes, Route } from "react-router-dom";

// import sass file
import "../src/assets/scss/index.scss";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product/:productID" element={<Product/>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
