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
		 <div className="footer-bg" id="footer-secs">
			 <div className="container">	
				 <ul className="footer-s-list">
					<li><a href="http://www.babyobaby.club/" target="_blank"><img src={global} /></a></li>
					<li><a href="https://twitter.com/BabyoBabytoken" target="_blank"><img src={sc2} /></a></li>
					<li><a href="https://t.me/babyobabyofficial" target="_blank"><img src={sc3} /></a></li>
					<li><a href="https://discord.gg/4BCpghJdQV" target="_blank"><img src={sc4} /></a></li>
					<li><a href="https://medium.com/@babyobabytoken" target="_blank"><img src={mediums} /></a></li>
				 </ul>
				 <div className="footer-p">
					<p>© Copyright 2021 BabyOBaby. All Rights Reserved.</p>
				</div>
			 </div>
		 </div>

    );
  }
}

export default Footer;