import React, { Component } from "react"
import "../../assets/jss/MobileBlock/MobileBlock.css"
import AppFeature from "./AppFeature"
// components
import featuresData from "../../data/featuresData"
// app images
import logon from "../../assets/img/logon.jpg"
import login from "../../assets/img/login.jpg"
import gallery from "../../assets/img/gallery.jpg"
import location from "../../assets/img/location.jpg"
import map from "../../assets/img/map.jpg"
import profile from "../../assets/img/profile.jpg"

// responsive
import MediaQuery from 'react-responsive'


class MobileBlock extends Component {

  constructor (props) {
    super(props)
    this.state = {
      features: featuresData,      
      itemSelected: featuresData[0],
      imageSelected: gallery
    }
    this.setFeature = this.setFeature.bind(this)
  }

  setFeature(itemClicked) {
    if (!itemClicked) return
    if (itemClicked) { 
      this.findImageSelected(itemClicked.id)    
      this.setState({
        itemSelected: itemClicked,
        imageSelected: this.findImageSelected(itemClicked.id)
      })
    }
  }

  findImageSelected (id) {    
    switch (id) {
      case 1:
        return map
      case 2:
        return gallery
      case 3:
        return profile
      case 4:
        return login
      case 5:
        return gallery
      case 6:
        return location 
      default:
        return null
    }   
  }


  render () {
    
    const leftList = this.state.features.slice(0,3)
    const rightList = this.state.features.slice(3,6)
    const appFeaturesLeft = leftList.map(feature => <AppFeature key={feature.title} feature={feature} function={this.setFeature} itemSelected={this.state.itemSelected} />)
    const appFeaturesRight = rightList.map(feature => <AppFeature key={feature.title} feature={feature} function={this.setFeature} itemSelected={this.state.itemSelected} />)
    
    return(
      <div className="mobile-block">
        <div className="mobile-block-header">
          <h1>CoinCoins Mobile</h1>
          <p>Découvrez Coincoins sur Mobile</p>
        </div>        
        <div className="mobile-block-content">
          <div className="features-block">{appFeaturesLeft}</div>
          <MediaQuery minDeviceWidth={1024}>
            <div className="mobile-fake">
              <img src={this.state.imageSelected} alt="screen capture from awesome Coincoins Insolites App" />
            </div>
          </MediaQuery>          
          <div className="features-block">{appFeaturesRight}</div>
        </div>
      </div>      
    )
  }
}

export default MobileBlock