import React from 'react'
import Box from '../Box/Box'
import "./style.css"
import cssIcon from "../../../assets/css-icon 1.png"
import htmlIcon from "../../../assets/html-icon 1.png"
import urlIcon from "../../../assets/url-icon 1.png"

const Main = () => {
    return (
        <div className="main">
            <Box img={cssIcon}/>
            <Box img={htmlIcon}/>
            <Box img={urlIcon}/>
        </div>
    )
}

export default Main
