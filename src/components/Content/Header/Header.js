import React from 'react'
import Logo_Ncc from '../../../assets/logoNCC.png'
import './style.css'
function Header() {
    return (
        <div className="header">
            <img src={Logo_Ncc} alt={"logo"}/>
        </div>
    )
}

export default Header
