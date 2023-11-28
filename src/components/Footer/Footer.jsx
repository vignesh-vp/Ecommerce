import "./Footer.scss";
import React from "react";
import {FaLocationArrow, FaMobileAlt, FaEnvelope} from "react-icons/fa";
import Payment from "../../assets/payments.png";

const Footer = () => {
    return <footer className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                         At AG Store, our mission is to provide audiophiles
                         and music lovers with access to the finest audio solutions.
                         We strive to blend cutting-edge technology with comfort and style, 
                         offering an exceptional auditory journey.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Mohali, Chandigarh Sector 32
                            </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">
                            Phone: 8755657607
                            </div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">  Email: AgStore@gmail.com  </div>
                    </div>
                    </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">Headphones</span>
                    <span className="text">Smart Watches</span>
                    <span className="text">Bluetooth Speaker</span>
                    <span className="text">Wireless Earbuds</span>
                    <span className="text">Home Theatre</span>
                    <span className="text">Projectors</span>
                    </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <div className="text">
                        AG Store 2023 Created By myTeam Premium E-Commerce Solutions.
                    </div>
                    <img src={Payment} />
                </div>
            </div>
    </footer>
};

export default Footer;
