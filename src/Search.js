import React from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search'

function Search() {
    return (
        <div className="search">
            <div className="search_container">
                <div className="search_column">
                    <small>Location</small>
                    <input type="text" placeholder="Where are you going?"/>
                </div>
                <div className="search_column">
                    <small>Check in</small>
                    <input type="text" placeholder="Add dates"/>
                </div>
                <div className="search_column">
                    <small>Check out</small>
                    <input type="text" placeholder="Add dates"/>
                </div>
                <div className="search_column">
                    <small>Guests</small>
                    <input type="text" placeholder="Add guests"/>
                </div>
                <div className="search_icon_right">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

export default Search
