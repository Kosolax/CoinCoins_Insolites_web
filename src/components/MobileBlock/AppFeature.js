import React, { Component } from "react"
import "../../assets/jss/MobileBlock/AppFeature.css"
import classNames from 'classnames'

class AppFeature extends Component {
  constructor() {
    super()   

  }
 
  render () {
    const featureClass = classNames({
      'app-feature': true,
      'is-selected': this.props.feature.id === this.props.itemSelected.id
    });
    
    return(
      <div className={featureClass} onClick={() => this.props.function(this.props.feature)}>
        <h2 className="title-feature"> {this.props.feature.title} </h2>
        <div className="content-feature">
            {this.props.feature.content}            
        </div>
      </div>
    )
  }
}

// function Block () {
//   return(
//     <div className="Block">
//       <h1> Hello, I'm Block! </h1>
//     </div>
//   )
// }

export default AppFeature