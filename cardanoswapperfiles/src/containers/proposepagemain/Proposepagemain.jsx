import React from 'react'
import { IsWalletConected } from '../navbar/Navbar'
import ProposeHandler from './ProposeHandler'
import './proposepagemain.css'

const Proposepagemain = () => {
    return (
        <div className='proposepagemain'>
            {IsWalletConected && (
                <ProposeHandler />
            )}
        </div>
    )
}

export default Proposepagemain