import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row } from 'reactstrap';

import { ToastContainer } from 'react-toastify';
import '../css/style.css'
import '../css/responsive.css'
// import '../css/navbar.css'
import $ from "jquery";
import {Link, Router} from 'react-router-dom';
import logo from '../images/logo.png';
import burger from '../images/burger.png';
import connect from '../images/connect.png';
import gcircle from '../images/gcircle.png';
import crosss from '../images/crosss.png';


class Header extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };

  }

  componentDidMount = () =>{
   
    

    changePickupStoreMenu();

function changePickupStoreMenu(){
 
    var body = $('body'),
        mask = $('<div class="mask"></div>'),
        toggleSlideRight = document.querySelector( ".toggle-slide-right" ),
        slideMenuRight = document.querySelector( ".slide-menu-right" ),
        activeNav = '';
    ;
    $('body').append(mask);
 
    /* slide menu right */
    toggleSlideRight.addEventListener( "click", function(){
        $('body').addClass("smr-open");
        $('.mask').fadeIn();
        activeNav = "smr-open";
    } );
 
    /* hide active menu if close menu button is clicked */
    $(document).on('click', ".close-menu", function(el,i){
        $('body').removeClass(activeNav);
        activeNav = "";
        $('.mask').fadeOut();
    });
 
}
       
            
  }

	render(){
		return(
      <div className="border-b">
        <div className="">
          <div className="header-box">
          <div className="header-c1">
              <div className="logo-box">
                <a href="/">
                  <img src={logo} />
                </a>
              </div>
            </div>
  
            <div className="header-c2">
              <ul className="menu-list-d">
                      <li><a href="https://dex.knightswap.financial/#/swap">TRADE</a></li>
                      <li><a href="https://app.knightswap.financial/farms">EARN</a></li>
                      <li><a href="https://knightcompounder.com/#/bsc">VAULT</a></li>
                      <li><a href="https://www.wizard.financial/marketplace">NFT</a></li>
                      
                  </ul>
            <div className="burger-area">
               <a href="#" className="burgers toggle-slide-right"> <img src={burger} /></a>
              </div>
            </div>
            <div className="header-c3">
              <ul className="connectlist">
                <li>
                  <p><img src={connect} className="connect-img" /> <span>$19.754</span></p>
                </li>
                <li>
                  <p className="btn-mrt"><img src={gcircle} className="connect-img2" /> <a href="https://app.knightswap.financial/
                  ">Launch App</a></p>
                </li>
              </ul>
            </div>
            
          </div>
              
              <div className="menu slide-menu-right menu-list-wrp">
                  <button class="close-menu"><img src={crosss} className="img-close" /></button>
                <ul className="menu-list2">
                <li><a href="/">Home</a></li>
                    <li><a href="https://dex.knightswap.financial/#/swap" className="close-menu">TRADE</a></li>
                    <li><a href="https://app.knightswap.financial/farms" className="close-menu">EARN</a></li>
                    <li><a href="https://knightcompounder.com/#/bsc" className="close-menu">VAULT</a></li>
                    <li><a href="https://www.wizard.financial/marketplace" className="close-menu">NFT</a></li>
                    <li>
                      <p className="connect-mobile"> <a href="https://app.knightswap.financial/">Launch App</a></p>
                  </li>
                </ul>
              </div>
          
        </div>
      </div>
		);
	}
}


export default Header;

