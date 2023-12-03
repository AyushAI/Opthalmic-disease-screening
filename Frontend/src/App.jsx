import { BrowserRouter, Route, Routes } from "react-router-dom";
import  { Navbar } from "./components/header";
import Footer from "./components/footer";
import Doctors from "./Pages/Doctors/index";
import AboutUs from "./Pages/AboutUs/index";
import Home from "./Pages/Home";
import Predict from "./Pages/Home/predict";
import Subscription from "./Pages/subcription/index";
function App() {
  return (
    <BrowserRouter>
      
      <Navbar />
      <Routes>
        <Route eaxct path="/about" element={<AboutUs/>}/>
        <Route exact path="/" element={<Home />} />
        <Route exact path = "/Doctors" element = {<Doctors/>} />
        <Route exact path = "/home" element = {<Home/>} />
        <Route exact path = "/predict" element = {<Predict/>} />
        <Route exact path = "/subscription" element = {<Subscription/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;