import React from "react";
import clock from "../img/clock.svg"
import diapgragm from "../img/diaphragm.svg"
import money from "../img/money.svg"
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";
const ServiceSection = () => {
    return(
        <div className="servives">
            <div className="description">
                <h2>High <span>quality</span> services</h2>
                <div className="crads">
                    <div className="card">
                        <div className="icon">
                            <img alt = "icon" src={clock} />
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt = "icon" src={teamwork} />
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt = "icon" src={diapgragm} />
                            <h3>Diapgragm</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className="card">
                        <div className="icon">
                            <img alt = "icon" src={money} />
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
            <div className="image">
                <img alt = "camera" src={home2} />
            </div>
        </div>
    )
}

export default ServiceSection;