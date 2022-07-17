import React from 'react'
import { getWalletState } from '../../App'
import './proposepagemain.css'
import { AssetDisplay } from '../../components/pagecomps/AssetDisplay'

const DisplayAssets = () => {
    const Wallet = getWalletState();
    const Assets = Wallet.state.Assets;
    return (
        Assets.map((asset, index) => {
            return (
                <div key={index} className="AssetDisplayContainer">
                    {AssetDisplay(Assets[index].state.AssetName, Assets[index].state.AssetAmount)}
                </div>
            )
        })

    )
}

const Proposepagemain = () => {
    const Wallet = getWalletState();
    const Assets = Wallet.state.Assets;
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
                    {AssetDisplay("ADA", Wallet.state.Balance)}
                    <DisplayAssets />
                </div>

                <div className='CPAvailableItems BoxStyling'>
                    CPAvailableItems
                </div>

            </div >
        </div>
    )
}

export default Proposepagemain