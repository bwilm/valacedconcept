import React from 'react'
import './MobileFooter.css';
import Avatar from '@material-ui/core/Avatar/Avatar'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAirbnb} from '@fortawesome/free-brands-svg-icons/faAirbnb';
import { faHeart } from '@fortawesome/free-regular-svg-icons/faHeart'
import {faUserCircle} from '@fortawesome/free-regular-svg-icons/faUserCircle';

function MobileFooter() {
    return (
        <div className="mobileFooter">
            <div className="mobileFooter_column">
                <FontAwesomeIcon icon={faAirbnb} size="lg" style={{color:"#ff385d"}}/>
                <small style={{color:"#ff385d"}}>Explore</small>
            </div>
            <div className="mobileFooter_column">
            <FontAwesomeIcon icon={faHeart} size="lg" />
                <small>Saved</small>
            </div>
            <div className="mobileFooter_column">
            <FontAwesomeIcon icon={faUserCircle} size="lg"/>
                <small>Log in</small>
            </div>
        </div>
    )
}

export default MobileFooter
