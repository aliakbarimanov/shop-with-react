// import Routes
import {Routes, Route} from "react-router-dom";

// import sass file
import "../src/assets/scss/index.scss";

// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
