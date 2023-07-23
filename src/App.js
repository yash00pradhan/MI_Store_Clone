
import './App.css';
import  Prenavbar from './component/Prenavbar';
import  Navbar  from './component/Navbar';
import {  BrowserRouter as Router } from "react-router-dom"
import Slider from "./component/Slider.js"
import data from "./data/data.json"
import Offers from "./components/Offers.js"
import Heading  from "./components/Heading.js"
import StarProduct from "./components/StarProduct.js"

function App() {
  return (
    <Router>
     <Prenavbar/>
     <Navbar/>
     {/* <NavOptios miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio}  accessories={data.accessories}/> */}
     
     <Slider start={data.banner.start} />
       <Offers offer={data.offer} />
       <Heading text="STAR PRODUCTS"/>
       <StarProduct starProduct={data.starProduct} />
     </Router>
  );
}

export default App;
