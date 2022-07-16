import React from "react";
import './assetdisplay.css'
import crypto from '../../assets/ada.png'
import {
    Link,
} from "react-router-dom"

export const AssetDisplay = (name, amount) => {
    return (
        <div className="AssetDisplayContainer">
            <div className="AssetImage">

            </div>
            <div className="AssetAmount">
                {amount}
            </div>
            <div className="AssetName">
                {name}
            </div>
            <div className="ada_logo">
                <Link to="/"><img src={crypto} alt="ada" width="30px" height="30px" /></Link>
            </div>
        </div>
    )
}
