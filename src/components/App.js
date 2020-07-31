import React, { Component } from "react"
import "../assets/jss/App.css"
import Block from "../components/Block.js"
import WelcomeBlock from "./WelcomeBlock"
import Pitch from "./Pitch"
import SliderBlock from "./SliderBlock"
import MobileBlock from "./MobileBlock/MobileBlock.js"
import DownloadApp from "./DownloadApp.js"
import Footer from "../components/Footer.js"
import SliderBlockMobile from "./SliderBlockMobile"
// responsive
import MediaQuery from 'react-responsive'

class App extends Component {
  
  // permet de récupérer la réponse de l'api
  constructor(){
    super()
    this.state = {
    places: []
  }
  }
  
  // fonction permettant lors de la présentation du component de faire l'appel à l'api 
  // les lignes suivantes sont la tentative de mise en place de la fonction fetch permettant de faire un appel par la méthode get sur l'api
  // nous n'avons pas eu le temps d'aller plus loin à cause d'un problème sur le header de la requête. Sur cette partie il restait à récupérer les données 
  // à traiter les données.
  componentDidMount() {
    const header = {'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json'  }
    fetch('http://localhost:5000/api/v1/places/top/3', {
      headers: new Headers({header})
    })
    .then(res => console.log('res',res))
    .then((data) => { console.log('data',data);
      this.setState({ places: data });
      console.log('places', this.state.places)
    })
    .catch(err => console.error('catch', err))
  }

  render () {

    return(
      <div className="app">        
        {/* list of components */}
        <WelcomeBlock />
        <MediaQuery maxDeviceWidth={800}>
          <Pitch />
          <SliderBlockMobile/>
        </MediaQuery>
        <MediaQuery minDeviceWidth={800}>
          <SliderBlock/>
        </MediaQuery>
        <MobileBlock />
        <DownloadApp />
        <Footer />
      </div>
    )
  }
}

export default App