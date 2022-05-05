import React, { Component } from 'react';

import $ from "jquery";

import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import sc1  from '../../images/sc1.png';
import sc2  from '../../images/sc2.png';
import sc3  from '../../images/sc3.png';
import sc4  from '../../images/sc4.png';
import ftm  from '../../images/ftm.png';
import character  from '../../images/character.png';
import acharactor  from '../../images/acharactor.png';
import RMape  from '../../images/RMape.png';
import tokens  from '../../images/charactor-2.gif';
import scroll  from '../../images/scroll.png';
import web  from '../../images/web.png';
import topcharactor  from '../../images/topcharactor.gif';
import logoicon  from '../../images/Logo-icon.gif';
import user  from '../../images/User.gif';
import Trades  from '../../images/Trades.gif';
import Staked  from '../../images/Staked.gif';

class Home extends Component{ 
	constructor(props) {
	  super(props);
	  this.state = {
	  };
  
	}
	
	componentDidMount = () =>{

		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 4000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
		
				
	  }

	render(){
		return(
			<div>
			<div className="main-bg">
			<Header />
			<section id="banner-sec">
					<div className="container">
						<div className="row">
							<div className="col-lg-7">
							<div className="banner-content">
								<span>Welcome to</span>
								<h3>Shoot For The <br></br>Moon At KNIGHT</h3>
								<p>Trade, Earn, & Raid To Stack Your Riches While Securely Storing Them Within Our Castle Vaults
								</p>
								<div id="shiva">Total Riches Stored<span class="count"> 200</span></div>
								<div className="btn-banner">
									<a href="#" className="buy-now">Connect Wallet</a>
									<a href="#">Trade Now</a>
								</div>
							</div>
							</div>
							<div className="col-lg-5">
								<div className="top-cractor-img">
									<img src={topcharactor} alt="topcharactor" />
								</div> 
							</div>
						</div>
					</div>
				</section>
				<section id="million-sec">
					<div className="container">
						<div className="million-content">
							<img src={logoicon} />
							<h3>
								How To Stack Those Riches 
							</h3>
							
						</div>
						<div className="row">
							<div className="col-lg-3">
								<a href="#">
								<div className="million-box">
									<img src={user} />
									<h3>Trade</h3>
									<span>Trade between tokens on BSC network in seconds</span>
									<p>Enjoy the highest liquidity trades with the lowest fees and no registration needed. No hassle & more money for you</p>
								</div>
								</a>
							</div>
							<div className="col-lg-3">
								<a href="#">
								<div className="million-box">
									<img src={Trades} />
									<h3>Farms & Market </h3>
									<span>KNIGHT helps you gain passive income through farming & staking</span>
									<p>Deposit Partner Tokens in the farm To Start Recruiting More Knights To join your cause. 
									Stake your KNIGHT in the various Markets to unlock passive income streams
									</p>
								</div>
								</a>
							</div>
							<div className="col-lg-3">
								<a href="#">
								<div className="million-box">
									<img src={Staked} />
									<h3>Raid</h3>
									<span>Use Your KNIGHT To Battle Against Other Knights in Games To Win More Riches</span>
									<p>Provably Fair & Fun Games That Will Challenge Your Knighthood & Allow You To Win Millions In Prizes
									</p>
								</div>
								</a>
							</div>
							<div className="col-lg-3">
								<a href="#">
								<div className="million-box">
									<img src={Staked} />
									<h3>Castle</h3>
									<span>KStore Your Riches Within The Castle Treasury & Watch Them Grow</span>
									<p>An Autocompounding Spell Has Been Cast On The Treasury To Help Greatly Accelerate Your Accumulation Of Riches
									</p>
								</div>
								</a>
							</div>
						</div>
						<div className="trade-section">
							<a href="#">
							<div className="trade-content">
								<h3>Earn Passive <br></br> Income With Crypto
								</h3>
								<p>Farms to yield KNIGHT 
									KNIGHT to open up passive income <br></br> stream 
									Store your riches in the Castle & watch the yield<br></br> compound
									</p>
								<div class="btn-trades">
									<a href="#" class="trade-now">Start Earning Now</a>
									<a href="#">Learn</a>
								</div>
							</div>
							</a>
						</div>
					</div>
				</section>
				<div className="main-bg-sec">

				<section id="tokenomic-sec">
					<div className="container">
						
						<div className="row">
							<div className="col-lg-6">
								<div className="token-img">
									<img src={tokens} />
								</div>
								
							</div>
							<div className="col-lg-6">
								<div className="passive-content">
									<h3>A KNIGHT can do more than slay dragons & drink mead
									</h3>
									<p>KNIGHT token is the core of the $WIZARD ecosystem. Anything is possible with a great magician by your side.</p>
									<div class="btn-explore">
										<a href="#" class="explore-now">Buy KNIGHT</a>
										<a href="#">Learn more</a>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
				</div>
				<section id="lightpaper">
					<div className="container">
						<div className="head-lightpaper">
							<h3>No Hassle, only</h3>
							<p>Trade any token on Binance Smart Chain Easily & Safely.<br></br>
								Audited & Backed By Trusted Partners. <br></br>
								Simply connect your wallet and start trading now
							</p>
						</div>
						<div className="row">
							<div className="col-lg-12">
								<div className="wrp-trade-total">
									<div className="trade-totalbox">
										<h3>$10.78</h3>
										<p>$SHUSHI Price</p>
									</div>
									<div className="trade-totalbox">
										<h3>$0.96b</h3>
										<p>$Total Liquidity</p>
									</div>
									<div className="trade-totalbox">
										<h3>$128.65b</h3>
										<p>Total Value</p>
									</div>
									<div className="trade-totalbox">
										<h3>2,111</h3>
										<p>Total Pairs</p>
									</div>
								</div>
								<div className="lightpaper-content">
										<div className="btn-lightpaper">
											<a href="#" className="trade-now" target="_blank">Trade Now</a>
											<a href="#">Learn More</a>
										</div>
								</div>
							</div>
						</div>
						
					</div>
					<div className="footer-social-wrp">
							<div className="social-footer">
									<ul className="footer-social-list">
										<li><a href="https://undead.to" target="_blank"><img src={sc1} /></a></li>
										<li><a href="https://twitter.com/UndeadFinance" target="_blank"><img src={sc2} /></a></li>
										<li><a href="https://t.me/undeadtoken" target="_blank" target="_blank"><img src={sc3} /></a></li>
										<li><a href="https://discord.gg/s5rpEmje" target="_blank"><img src={sc4} /></a></li>
										
									</ul>
							</div>
							<div className="social-c-right">
								<p>2021 KNIGHT ALL rights reserved.</p>
							</div>
						</div>
				</section>

			{/* <Footer />	 */}
			</div>
			
			</div>
		);
	}

}
export default Home;