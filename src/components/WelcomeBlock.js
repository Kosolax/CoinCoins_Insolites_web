import React, { Component } from "react"
import "../assets/jss/Welcome.css"
import background from "../assets/img/fond_Welcome.png"
import pin from "../assets/img/duckPinBlackV2.png"
import {Animated} from "react-animated-css"
// responsive
import MediaQuery from 'react-responsive'

class WelcomeBlock extends Component {
  constructor(){
    super()
    
  }
  
  render () {
    const styleLeftPin =
      {position: 'absolute',left: "4%",top: "26.5%", width: '4%', height: '15%'};
    const styleMiddlePin =
      {position: 'absolute', left: '41.5%', top:'10.9%', width: '10%'};
    const styleRightPin = 
      {position: 'absolute', right: '15%', top:'42%', width: '5%', height: '16%'};
    const styleBottomPin = 
      {position: 'absolute', left: '20%', top:'75%', width: '6%', height: '17%'};
    return(
        <div  className="welcome-container">
            <img src={background}></img>
            <div className="welcome-content">
              <div className="welcome-header">
                <h1 className="welcome-title">CoinCoins Insolites</h1>
                <MediaQuery minDeviceWidth={800}>                    
                  <p className="welcome-subtitle"> Marre des sorties moroses, des lieux touristiques plein de monde, de faire le tour de la même mare ? 
L’application coincoins insolites redonne de la couleur et du renouveau à vos balades. Découvrez les coins méconnus de votre région et partagez vos découvertes !</p>
                </MediaQuery>
              </div>
              <Animated animationIn="bounceInDown" isVisible={true} style={styleLeftPin} >
                <img src={pin} alt="logo coincoins insolites" className="duck-pin"></img>
              </Animated>
              <Animated animationIn="bounceInDown" animationInDelay={500} isVisible={true} style={styleMiddlePin}>
                <img src={pin} alt="logo coincoins insolites" className="duck-pin"></img>
              </Animated>
              <Animated animationIn="bounceInDown" isVisible={true} style={styleRightPin}>
                <img src={pin} alt="logo coincoins insolites" className="duck-pin"></img>
              </Animated>
              <Animated animationIn="bounceInDown" isVisible={true} style={styleBottomPin}>
                <img src={pin} alt="logo coincoins insolites" className="duck-pin"></img>
              </Animated>
            </div>              
        </div>
      
    )
  }
}

export default WelcomeBlock