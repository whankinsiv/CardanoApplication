import React from 'react'
import { getWalletState } from '../../App'
import './proposepagemain.css'
import { AssetDisplay } from '../../components/pagecomps/AssetDisplay'

const Proposepagemain = () => {
    const Wallet = getWalletState();
    const Assets = Wallet.state.Assets;

    /* {this.state.Assets.map((asset, index) => {
                        return (
                            <div key={index} className="AssetDisplayContainer">
                                {AssetDisplay(this.state.Assets[index].state.AssetName, this.state.Assets[index].state.AssetAmount)}
                            </div>
                        )
                    })}
                    {AssetDisplay("ADA", this.state.Wallet.state.Balance)} */

    return (
        <div className='proposepagemain'>
            <div className='ProposeContainer' >
                <div className='SelectedItems BoxStyling'>

                </div>

                <div className='ProposeButton'>
                    <button className="button-styling button-position">Submit Swap</button>
                </div>

                <div className='CPSelectedItems BoxStyling'>
                    CPSelectedItems
                </div>
                <div className='AvailableItems BoxStyling'>

                </div>

                <div className='CPAvailableItems BoxStyling'>
                    CPAvailableItems
                </div>

            </div >
        </div>
    )
}

export default Proposepagemain