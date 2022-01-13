import React from 'react';

function NavbarMedia(props) {
    return (
        <div className="navbar__media">
                <div className="navbar__media__row">
                    <div className="navbar__media__row-input">
                        <i className="fa fa-search" aria-hidden="true"></i>
                        <input className="navbar__media__row-input-form" type="text" placeholder="Search Product" />
                    </div>
                    <div className="navbar__media__row-favorite">
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                    </div>
                    <div className="navbar__media__row-bell">
                        <i className="fa fa-bell-o" aria-hidden="true"></i>
                    </div>
                </div>
        </div>
    );
}

export default NavbarMedia;