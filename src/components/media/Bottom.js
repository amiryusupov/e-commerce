import React from 'react';
import media__basket from '../../assets/img/media__basket.svg'
import media__home from '../../assets/img/media__home.svg'
import media__search from '../../assets/img/media__search.svg'
import media__offer from '../../assets/img/media__offer.svg'
import media__account from '../../assets/img/media__account.svg'

function Bottom() {
    return (
        <div className="bottom">
            <div className="container">
                <div className="bottom-row">
                    <div className="bottom-item">
                        <img className="bottom-item-logo" src={media__home} alt=""/>
                        <span className="bottom-item-text">Home</span>
                    </div>
                    <div className="bottom-item">
                        <img className="bottom-item-logo" src={media__search} alt=""/>
                        <span className="bottom-item-text">Search</span>
                    </div>
                    <div className="bottom-item">
                        <img className="bottom-item-logo" src={media__basket} alt=""/>
                        <span className="bottom-item-text">Basket</span>
                    </div>
                    <div className="bottom-item">
                        <img className="bottom-item-logo" src={media__offer} alt=""/>
                        <span className="bottom-item-text">Offer</span>
                    </div>
                    <div className="bottom-item">
                        <img className="bottom-item-logo" src={media__account} alt=""/>
                        <span className="bottom-item-text">Account</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bottom;