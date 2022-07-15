import React from 'react'
import "./connectwalletpopup.css"
import GetWallets from '../functions/GetWallets';
import { GrClose } from 'react-icons/gr'
import { getWalletState } from '../../App';
import { IsWalletConected } from '../../containers/navbar/Navbar';

/* Popup is displayed from the Navbar component */
export const openPopup = () => {
    let popup = document.getElementById("stylePopup");
    popup.classList.add("open-popup");
}

export const closePopup = () => {
    let popup = document.getElementById('stylePopup');
    popup.classList.remove("open-popup");
}

const LoadImage = (WalletName) => {
    const currentWallet = document.getElementById(WalletName);
    if (WalletName === "eternl" && currentWallet) {
        currentWallet.classList.add("eternl");
    } else if (WalletName === "nami" && currentWallet) {
        currentWallet.classList.add("nami");
    } else if (WalletName === "flint" && currentWallet) {
        currentWallet.classList.add("flint");
    }
    /* Add more wallet options later! */
    else {

    }
}


function ConnectWalletPopup() {
    const WalletHandler = getWalletState();
    const Wallets = GetWallets();
    return (
        <div className='ConnectWalletBackground' id='TogglePopup'>
            <div className='ConnectWalletContainer'>
                <div className="CloseWalletPopupButton">
                    <button onClick={() => closePopup()}><GrClose size={20} /></button>
                </div>
                <div className='Title'>
                    <h2>Connect Wallet</h2>
                </div>

                <div className='WalletsAvailable'>
                    {Wallets.map((Walletname, index) => {
                        return (
                            <ul key={index}>
                                <div className="WalletButton">
                                    <button className='WalletButtonClicked' id={Walletname} onClick={() => WalletHandler.ConnectWallet(Walletname)}>{Walletname}</button>
                                    {LoadImage(Walletname)}
                                </div>
                            </ul>
                        )
                    })}
                </div >
            </div >
        </div >
    )

}
export default ConnectWalletPopup