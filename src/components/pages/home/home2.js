import React, { Component, useEffect, useState } from 'react';
import axios from 'axios';
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

import Earn1 from '../../images/Earn_holder1.png';
import Earn2 from '../../images/Earn_holder2.png';
import Earn3 from '../../images/Earn_holder3.png';
import Earn4 from '../../images/Earn_holder4.png';
import Earn5 from '../../images/Earn_holder5.png';
import Earn6 from '../../images/Earn_holder6.png';



const Home2 = () => {

    const [totalliquidity, setTotalliquidity] = useState([])
    const [summary, setSummary] = useState([])

    

console.log(totalliquidity)
    useEffect(() => {
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
    })

    useEffect(() => {
        fetchData();
       

    },[])


    const fetchData = async () => {
        let response = await axios.get("https://api.KnightSwap.financial/api/v2/totalliquidity")
        setTotalliquidity(response.data.data);
        
    }
   

    

    

   
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
                                        <h3>$0.5 </h3>
                                            <p>$KNIGHT Price</p>
                                        </div>
                                        <div className="trade-totalbox">
                                            {
                                              
                                                <h3>{parseFloat(totalliquidity.totalLiquidityUSD).toFixed(2)} </h3>
                                            }
                                            <p>$Total Liquidity</p>
                                        </div>
                                        <div className="trade-totalbox">
                                        <h3>{parseFloat(totalliquidity.totalVolumeUSD).toFixed(2)} </h3>
                                            <p>Total Value</p>
                                        </div>
                                        <div className="trade-totalbox">
                                            <h3>97</h3>
                                            <p>Total Pairs</p>
                                        </div>
                                    </div>
                                    <div className="btn-banner">
                                        <a href="https://dex.knightswap.financial/#/swap?outputCurrency=0xD23811058Eb6e7967D9a00dc3886E75610c4AbBa" className="buy-now">Buy KNIGHT</a>
                                        <a href="https://knights.gitbook.io/knightswap/">Learn More</a>
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
                                        <a href="https://knightcompounder.com/" class="trade-now">Earn On Autopilot</a>
                                        <a href=" https://medium.com/wolf-den/tired-of-pushing-buttons-4d9e64b8cd40">Learn More</a>
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
                                            <a href="https://docs.google.com/forms/d/e/1FAIpQLScJ9C_v8rePhbAt43YbvFzz9vqDYlmTG-ZDZ-qg1vvogKpX6A/viewform" class="explore-now">Apply To Join</a>
                                            <a href=" https://knights.gitbook.io/knightswap/join-the-alliance/the-alliance">Alliance Info</a>
                                        </div>
                                    </div>
                                    <div id="holder">
                                    <a href="https://www.wizard.financial/"><img className="image_holder" src={Earn1} /></a>
                                    <a href="https://www.wolfdencrypto.com/"><img className="image_holder" src={Earn2} /></a>
                                    <a href="https://app.knightswap.financial/"><img className="image_holder" src={Earn3} /></a>
                                    <a href=" https://www.wolfdencrypto.com/"><img className="image_holder" src={Earn4} /></a>
                                    <a href="https://spartacrypto.io/"><img className="image_holder" src={Earn5} /></a>
                                    <a href="https://forgefinance.io/"><img className="image_holder" src={Earn6} /></a>
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
                                        <a href=" https://medium.com/knight-bsc-dark-knight-ftm" className="trade-now2" target="_blank">Our Medium</a>
                                        <a href="https://knights.gitbook.io/knightswap/differentiating-factors/education">Our Gitbook</a>
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
                                <li><a href="https://t.me/undeadtoken" target="_blank"><img src={sc3} /></a></li>
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
    )
}
export default Home2;