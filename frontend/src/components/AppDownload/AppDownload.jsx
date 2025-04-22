import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>For Better Experience Download <br />Foodify App</p>
            <div className="app-download-platforms">
               <a href="https://play.google.com/store/apps/details?id=com.foodify24x7.app">
                    <img src={assets.play_store} alt="" />
                </a>
                <a href="https://play.google.com/store/apps/details?id=com.foodify24x7.app">
                    <img src={assets.app_store} alt="" />
                </a>
                {/* <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" /> */}
            </div>
        </div>
    )
}

export default AppDownload
