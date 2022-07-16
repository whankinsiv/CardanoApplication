import React from "react";
import './assetdisplay.css'
import crypto from '../../assets/ada.png'

const DisplayImage = (name) => {
    if (name === "ADA") {
        return (
            <img src={crypto} alt="ada" width="25px" height="25px" />
        )
    }
}

export const AssetDisplay = (name, amount) => {
    return (
        <div className="AssetDisplayContainer">
            <div className="AssetImage">
                {DisplayImage(name)}
            </div>
            <div className="AssetAmount">
                {amount}
            </div>
            <div className="AssetName">
                {name}
            </div>
        </div>
    )
}
