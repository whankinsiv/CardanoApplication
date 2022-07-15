import React from 'react';
import { getWalletState } from '../../App';
import { DisplayConnectWallet } from '../../containers/navbar/Navbar';
import "./disconnectwalletpopup.css";
import { GrClose } from 'react-icons/gr';
import { IsWalletConected } from '../../containers/navbar/Navbar';
import { WalletHandler } from './WalletHandler';
import { render } from '@testing-library/react';

export const DisconnectButtonPushed = () => {
    const WalletInfo = getWalletState();
    DisplayConnectWallet();
    WalletInfo.DiconnectWallet();
    let popup = document.getElementById('styleDisconnect');
    popup.classList.remove("open-disconnect");

}

export const CloseButtonPushed = () => {
    let popup = document.getElementById('styleDisconnect');
    popup.classList.remove("open-disconnect");
}

export const DisplayWalletBalance = () => {
    const WalletHandler = getWalletState();
    const Balance = WalletHandler.state.Balance;
    const BalanceContainer = document.getElementById("BalanceDisconnectPage");
    BalanceContainer.innerText = "Balance: " + Balance;
}

export const DisplayWalletName = () => {
    const WalletHandler = getWalletState();
    const WalletName = WalletHandler.state.WalletName;
    const WalletNameContainer = document.getElementById("TitleContainer")
    WalletNameContainer.innerText = WalletName + " Connected"
}

export const DisplayRewardAddress = () => {
    const WalletHandler = getWalletState();
    const StakeAddress = WalletHandler.state.StakeAddress;
    const StakeAddressContainer = document.getElementById("StakeAddressContainer")
    StakeAddressContainer.innerText = "Stake Address: " + StakeAddress.slice(0, 11) + "..." + StakeAddress.slice(-9, -1);
}

function DisconnectWalletpopup() {
    const WalletHandler = getWalletState();
    return (
        <div className='DisconnectWalletContainer'>
            <div className="CloseWalletPopupButton">
                <button onClick={() => CloseButtonPushed()}><GrClose size={20} /></button>
            </div>
            <div className='Title' id='TitleContainer'>
                <h2>Wallet Connected</h2>
            </div>
            <div className="Info">
                <div className='Balance' id="BalanceDisconnectPage">
                    Balance:
                </div>
                <div className='StakeAddress' id="StakeAddressContainer">
                    Stake Address:
                </div>

            </div>
            <div className='DisconnectButtonContainer'>
                <button onClick={() => DisconnectButtonPushed()}>Disconnect Wallet</button>
            </div>
        </div >
    )
}

export default DisconnectWalletpopup