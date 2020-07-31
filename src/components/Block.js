import React, { Component } from "react"
import "../assets/jss/Block.css"

class Block extends Component {
  render () {
    return(
      <div className="block">
        <h1> Hello, I'm Block! </h1>
        
        {/* <h1 style={{ fontFamily: "Gotu" }}> CoinCoins Insolites</h1>         */}

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

export default Block