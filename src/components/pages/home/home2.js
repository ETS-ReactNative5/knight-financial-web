import React, { Component } from 'react';

import $ from "jquery";

import Header from '../../pages/header.js';
import Footer from '../../pages/footer.js';
import sc1 from '../../images/sc1.png';
import sc2 from '../../images/sc2.png';
import sc3 from '../../images/sc3.png';
import sc4 from '../../images/sc4.png';
import ftm from '../../images/ftm.png';
import character from '../../images/character.png';
import acharactor from '../../images/acharactor.png';
import RMape from '../../images/RMape.png';
import tokens from '../../images/charactor-2.gif';
import scroll from '../../images/scroll.png';
import web from '../../images/web.png';
import topcharactor from '../../images/topcharactor.gif';
import logoicon from '../../images/Logo-icon.gif';
import user from '../../images/User.gif';
import Trades from '../../images/Trades.gif';
import Staked from '../../images/Staked.gif';

class Home2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };

    }

    componentDidMount = () => {

        $('.count').each(function () {
            $(this).prop('Counter', 0).animate({
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

    render() {
        return (
            <div>
                <div className="main-bg">
                    <Header />
                    <section id="banner-sec">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7">
                                    <div className="banner-content">
                                        <span>Welcome to the</span>
                                        <h3>Preeminent Defi Platform <br></br>on the BNB Chain</h3>
                                        <div className="wrp-trade-total">
                                            <div className="trade-totalbox">
                                                <h3>$0.54</h3>
                                                <p>$KNIGHT Price</p>
                                            </div>
                                            <div className="trade-totalbox">
                                                <h3>$1.2M</h3>
                                                <p>$Total Liquidity</p>
                                            </div>
                                            <div className="trade-totalbox">
                                                <h3>$5M</h3>
                                                <p>Total Value</p>
                                            </div>
                                            <div className="trade-totalbox">
                                                <h3>97</h3>
                                                <p>Total Pairs</p>
                                            </div>
                                        </div>
                                        <div className="btn-banner">
                                            <a href="#" className="buy-now">Buy KNIGHT</a>
                                            <a href="#">Learn More</a>
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
                                    Providing tools for reliable and sustainable yields
                                </h3>

                            </div>
                            <div className='providing-wrp'>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <a href="#">
                                            <div className="million-box">
                                                <img src={user} />
                                                <h3>Trade</h3>

                                                <p>Enjoy the highest liquidity trades and lowest fees with no registration needed. No hassle & more money for you.</p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <a href="#">
                                            <div className="million-box">
                                                <img src={Trades} />
                                                <h3>Farms</h3>

                                                <p>Provide KNIGHT LP tokens to our farms and start earning $KNIGHT tokens & trading fees.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <a href="#">
                                            <div className="million-box">
                                                <img src={Staked} />
                                                <h3>Pools</h3>

                                                <p>Stake your $KNIGHT tokens to earn more $KNIGHT in $KNIGHT Pool
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <a href="#">
                                            <div className="million-box">
                                                <img src={Staked} />
                                                <h3>Raids</h3>

                                                <p>Stake your $KNIGHT tokens to earn partner tokens in Raids.
                                                </p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="trade-section">
                                <a href="#">
                                    <div className="trade-content">
                                        <h3>Tired of Pushing Buttons to See <br></br> Your Portfolio Grow?
                                        </h3>
                                        <p>Store your riches & watch them grow via our Auto Compounding Castle Vaults

                                        </p>
                                        <div class="btn-trades">
                                            <a href="#" class="trade-now">Earn On Autopilot</a>
                                            <a href="#">Learn More</a>
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
                                     
                                    <div className="col-lg-12">
                                        <div className="passive-content">
                                            <h3>Crypto’s More Fun & Profitable With Friends
                                            </h3>
                                            <p>Looking to LAUNCH or have a project on BNB Chain? Join the alliance with KnightSwap & unlock farms and pools
                                                <br></br>as an added benefit for your community. </p>
                                            <div class="btn-explore">
                                                <a href="#" class="explore-now">Apply To Join</a>
                                                <a href="#">Alliance Info</a>
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
                                <h3>knight makes our world<br></br>go round.</h3>
                                <p>KNIGHT token is at the heart of the KNIGHT ecosystem. Buy it, win it, farm it,<br></br>
                                spend it, stake it... heck, you can even vote with it!
                                </p>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                   
                                    <div className="lightpaper-content">
                                        <div className="btn-lightpaper">
                                            <a href="#" className="trade-now2" target="_blank">Trade Now</a>
                                            <a href="#">Learn</a>
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
export default Home2;