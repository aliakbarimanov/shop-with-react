// import components
import Header from "./components/Header";
import Footer from "./components/Footer";

//import pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";

const App = () => {
  return(
    <>
    <Header/>
    <main>
      <Home/>
      <Shop/>
    </main>
    <Footer/>
    </>
  )
}

export default App;