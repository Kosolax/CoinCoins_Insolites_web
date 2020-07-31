import React from "react";
import ReactDOM from "react-dom";
import place1 from "../assets/img/slider/Bouvines_Monument_au_morts.svg"
import place2 from "../assets/img/slider/cairn_barnenez.svg"
import place3 from "../assets/img/slider/courtil_des_fees.svg"
import place4 from "../assets/img/slider/enclos_des_bories.svg"
import place5 from "../assets/img/slider/grotte_pere_monfort.svg"
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';
import "../assets/jss/SliderMobile.css"

const SliderBlockMobile = () =>
  
 {return (  

  <div>
    <h1>Notre gallerie</h1>
    <AwesomeSlider bullets={false}>
    <div><img src={place1}/></div>
    <div><img src={place2}/></div>
    <div><img src={place3}/></div>
    <div><img src={place4}/></div>
    <div><img src={place5}/></div>
  </AwesomeSlider>
  </div>

  
);}


const rootElement = document.getElementById("root");
ReactDOM.render(<SliderBlockMobile/>, rootElement)
export default SliderBlockMobile