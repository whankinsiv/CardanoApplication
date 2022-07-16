import React, { useEffect, useState } from 'react'
import { RiMenu3Line, RICloseLin, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import logo from '../../assets/logo.png'
import ConnectWalletPopup from '../../components/pagecomps/ConnectWalletPopup'
import {
    Link,
    useMatch,
    useResolvedPath
} from "react-router-dom"
import { openPopup } from '../../components/pagecomps/ConnectWalletPopup'
import { getWalletState } from '../../App'
import DisconnectWalletpopup from '../../components/pagecomps/DisconnectWalletpopup'
import { WalletHandler } from '../../components/pagecomps/WalletHandler'

const Menu = () => (
    <>
        <p><Link to="/propose">Propose</Link></p>
        <p><Link to="/accept">Accept</Link></p>
        <p><Link to="/history">History</Link></p>
    </>
)
/* Checks if the a wallet has already been enabled */
export const IsWalletConected = () => {
    const WalletState = getWalletState();
    return WalletState.state.WalletConnected;
}

/* Change the wallet button when connected to display address & balance */
export const DisplayWalletInfo = () => {
    const WalletState = getWalletState();
    const WalletButton = document.getElementById("WalletButton");
    WalletButton.innerText = WalletState.state.WalletName + " Connected";
    WalletButton.style.pointerEvents = "auto";
    WalletButton.style.backgroundColor = "green";
    const WalletContainer = document.getElementById("cardanoswapper-connect");
    WalletContainer.style.width = "380px"
}

export const DisplayWalletLoading = () => {
    const WalletState = getWalletState();
    const WalletButton = document.getElementById("WalletButton");
    WalletButton.style.pointerEvents = "none";
    WalletButton.innerText = "Loading";
    WalletButton.style.backgroundColor = "purple";
}

export const DisplayConnectWallet = () => {
    const WalletButton = document.getElementById("WalletButton")
    WalletButton.innerText = "Connect Wallet";
    WalletButton.style.backgroundColor = "#ff4820";
    const WalletContainer = document.getElementById("cardanoswapper-connect");
    WalletContainer.style.width = "125px";

}

/* Handler for when the connect wallet button is pushed */
const ConnectWalletHandler = () => {
    const WalletState = getWalletState();
    /* If a wallet is already connected, display menu to disconnect wallet */
    if (IsWalletConected()) {
        DisconnectWalletpopup();
        let Disconnect = document.getElementById("styleDisconnect");
        Disconnect.classList.add("open-disconnect");
    }
    /* If a wallet has not been connected yet, display the wallet selector popup */
    else {
        openPopup();
    }
}

const IsWalletLoading = () => {
    const WalletState = getWalletState();
    return WalletState.state.WalletLoading;
}

const Navbar = (props) => {
    const WalletState = getWalletState()
    const [toggleMenu, setToggleMenu] = useState(false);
    return (
        <div className="cardanoswapper__navbar">
            <div className='NavbarContainer'>
                <div className="cardanoswapper__navbar-link_logo">
                    <Link to="/"><img src={logo} alt="logo" /></Link>
                </div>
                <div className="cardanoswapper__navbar-links_container">
                    <Menu />
                </div>
                <div className='cardanoswapper-connect' id='cardanoswapper-connect'>
                    <div id="ButtonDisplay" className='ButtonDisplay'>
                        <button type="button" id="WalletButton" onClick={() => ConnectWalletHandler()}>Connect Wallet</button>
                    </div>
                    <div className='cardanoswapper__navbar-menu'>
                        {toggleMenu
                            ? <RiCloseLine color='fff' size={27} onClick={() => setToggleMenu(false)} />
                            : <RiMenu3Line color='fff' size={27} onClick={() => setToggleMenu(true)} />
                        }
                        {toggleMenu && (
                            <div className="cardanoswapper__navbar-menu_container scale-up-center">
                                <div className="cardanoswapper__navbar-menu_container-links">
                                    <Menu />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className='stylePopup' id='stylePopup'>
                <ConnectWalletPopup />

            </div>
            <div className='styleDisconnect' id='styleDisconnect'>
                {IsWalletConected && (
                    DisconnectWalletpopup()
                )
                }
            </div>

        </div>
    )
}
export default Navbar

export const UpdateProposePage = () => {
    const xhttp = new XMLHttpRequest();
    
}
