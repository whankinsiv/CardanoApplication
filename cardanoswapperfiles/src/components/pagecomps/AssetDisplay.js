import React from "react";
import './assetdisplay.css'
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
        </div>
    )
}