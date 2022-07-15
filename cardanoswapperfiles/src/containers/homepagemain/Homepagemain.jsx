import React from 'react'
import './homepagemain.css'
import { Link } from 'react-router-dom'

const Homepagemain = () => {
    return (
        <div className='homepage'>
            <div className='homepagemain'>
                <div className="homepagemain-buttons">
                    <div className="homepagemain-button-propose">
                        <Link to="/propose"><button className="button-styling">Propose Swap</button></Link>
                    </div>

                    <div className="homepagemain-button-propose">
                        <Link to="/accept"><button className="button-styling">Accept Swap</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepagemain