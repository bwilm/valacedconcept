import React from 'react'
import './Body.css';

function Body() {
    return (
        <div className="body">
            <div className="body_text_container">
            <div className="body_mainText">
                <h1>Go Near</h1>
                <p>Explore unique destinations near you.</p>
                <button><small>Explore nearby</small></button>
            </div>
            </div>

            <div className="body_cards_container">
                <div className="body_cards_column">
                    <div className="body_card">
                        <div className="body_card_image">
                            <img src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg" alt=""/>
                        </div>
                        <div className="body_card_text">
                            <h3>Uniqe Stays</h3>
                            <p>Spaces that are more than just a place to sleep.</p>
                        </div>
                    </div>
                </div>
                <div className="body_cards_column">
                    <div className="body_card">
                        <div className="body_card_image">
                            <img src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720" alt=""/>
                        </div>
                        <div className="body_card_text">
                            <h3>Online Experiences</h3>
                            <p>Unique Activities we can do together, led by a world of hosts.</p>
                        </div>
                    </div>
                </div>
                <div className="body_cards_column">
                    <div className="body_card">
                        <div className="body_card_image">
                            <img src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720" alt=""/>
                        </div>
                        <div className="body_card_text">
                            <h3>Entire Homes</h3>
                            <p>Spaces that are more than just a place to sleep.</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Body
