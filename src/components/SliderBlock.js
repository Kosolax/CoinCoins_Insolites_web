import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import place1 from "../assets/img/slider/Bouvines_Monument_au_morts.svg"
import place2 from "../assets/img/slider/cairn_barnenez.svg"
import place3 from "../assets/img/slider/courtil_des_fees.svg"
import place4 from "../assets/img/slider/enclos_des_bories.svg"
import place5 from "../assets/img/slider/grotte_pere_monfort.svg"
import backCouv from "../assets/img/slider/couverture_slide.jpg"
import "turn.js";

import "../assets/jss/Slider.css"

import Turn from "./Turn.js";

const options = {
  width: 800,
  height: 600,
  autoCenter: true,
  display: "double",
  acceleration: true,
  elevation: 50,
  gradients: !$.isTouch,
  when: {
    turned: function(e, page) {
      console.log("Current view: ", $(this).turn("view"));
    }
  }
};

const pages = [
  {image : place1,description:'La petite église du modeste village de Bouvines réserve une belle surprise à ces visiteurs. Les différents vitraux ornant les fenêtres racontent un des faits d\'armes ayant créé le royaume de France. Souvenez-vous de vos cours d\'histoire, c\'est le dimanche 27 juillet 1214 que le roi Philippe Auguste, le dernier roi des Francs, devint le 1er roi de France.' },
  {image : place2, description: 'Le plus grand cairn d\'Europe a failli disparaitre en 1955 sous les coups de boutoir des pelleteuses. Sans la perspicacité de Fanch Gourvil, journaliste à Morlaix, le \"Parthénon mégalithique\", comme l\'appelait André Malraux, ne pourrait plus nous émerveiller.'},
  {image : place3, description: 'C\'est une allée couverte bien délabrée et abandonnée aux ronces et aux fougères que l\'on trouve au sommet de la colline située au sud de St Laurent d\'Oust. Les fouilles effectuées entre 1986 et 1992 ont déterminé l\'existence d\'une allée à entrée latérale. Elle contenait les ossements de trois personnes.'},
  {image : place4,description:'L\'enclos des bories est un parc de quatre hectares situé au-dessus du village perché de Bonnieux. Le site abandonné depuis des lustres a été défriché par son propriétaire depuis 2004. Ce défrichage a fait apparaitre une vingtaine de constructions. Le site peut être considéré comme un hameau rural voué au pastoralisme. Un certain nombre de ces bories ont été ensuite patiemment restaurées.'},
  {image : place5,description:'Saint Louis Marie Grignion de Montfort était un confesseur de l\'église catholique qui vécut à la fin du 17ème siècle, et décéda à Saint Laurent sur Sèvre, autre commune vendéenne très réligieuse. Très investi dans ses missions comme la reconstruction d\'églises après les guerres de réligion, il se retira dans cette grotte pour méditer. Il a donc donné son nom à cette grotte et une chapelle dans la forêt de Mervent'}
];

const SliderBlock = () => {
  return (
        <div className='slider-container'>
            
            <Turn options={options} className="flipbook">
                <div className="hard"> 
                  <img src={backCouv}></img>
                  <p>Nos Lieux Insolites</p> 
                </div>
                <div className="hard"></div>
                    {pages.map((page, index) => (
                        <div key={index} className="page">
                            <img src={page.image} alt="" />
                            <p id="descriptionImage" >{page.description}</p>
                        </div>
                    ))}
                <div className="hard"></div>
            </Turn>
            
        </div>
    
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<SliderBlock />, rootElement);
export default SliderBlock