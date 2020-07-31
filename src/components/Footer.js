import React, { Component } from "react"
import "../assets/jss/Footer.css"

class Footer extends Component {
  render () {
    return(
      <div className="footer">
        <ul className="footer-list">
          <li>CGU</li>
          <li>Politique de confidentialité</li>
          <li>Mentions Légales</li>
          <li>CoinCoins Insolites ©Tous droits réservés</li>          
        </ul>
      </div>
    )
  }
}

export default Footer