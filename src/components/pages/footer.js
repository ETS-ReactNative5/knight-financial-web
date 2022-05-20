import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import sc1  from '../images/sc1.png';
import sc2  from '../images/sc2.png';
import sc3  from '../images/sc3.png';
import sc4  from '../images/sc4.png';
import global  from '../images/global.png';
import mediums  from '../images/mediums.png';
import '../css/style.css'
class Footer extends Component {
  render() {
	 return (
		 <div >
			 <div className="container">
			 <div className="footer-social-wrp">	
				 <ul className="footer-social-list">
				 <li><a href="https://bscscan.com/token/0xD23811058Eb6e7967D9a00dc3886E75610c4AbBa" target="_blank"><img src={sc1} /></a></li>
				 <li><a href="https://twitter.com/KnightEcosystem" target="_blank"><img src={sc2} /></a></li>
				 <li><a href="https://t.me/knightswap" target="_blank"><img src={sc3} /></a></li>
				 <li><a href="https://discord.com/invite/pvM2kQzv4C" target="_blank"><img src={sc4} /></a></li>
				 </ul>
				 <div className="social-c-right">
					<p>2022 KNIGHT ALL rights reserved.</p>
				</div>
			 </div>
			 </div>
		 </div>

    );
  }
}

export default Footer;