import React, { Component } from 'react'
import { getWalletState } from '../../App'
import { AssetDisplay } from '../../components/pagecomps/AssetDisplay'
import { IsWalletConected } from '../navbar/Navbar'
import './proposehandler.css'

export default class ProposeHandler extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Wallet: getWalletState(),
            Assets: [],
            NumofAssets: 0
        }
    }

    render() {
        this.state.Assets = this.state.Wallet.state.Assets;
        return (
            <div className='ProposeContainer' >
                <div className='SelectedItems BoxStyling'>
                    {this.state.Assets.map((asset, index) => {
                        return (
                            <div key={index} className="AssetDisplayContainer">
                                {AssetDisplay(this.state.Assets[index].state.AssetName, this.state.Assets[index].state.AssetAmount)}
                            </div>
                        )
                    })}
                    {AssetDisplay("ADA", this.state.Wallet.state.Balance)}
                </div>
                <div className='ProposeButton'>
                    <button className="button-styling button-position">Submit Swap</button>
                </div>
                <div className='CPSelectedItems BoxStyling'>
                </div>

            </div >
        )
    }
}
