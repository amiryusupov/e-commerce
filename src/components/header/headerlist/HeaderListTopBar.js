import React from 'react';

function HeaderListTopBar() {
    return (
        <div>
            <div className="header__list-header">
                <span className="header__list-content">
                    BEST SELLER
                </span>
                <ul className="header__list-ul">
                    <li className="header__list-li">
                        <a href="#">All</a>
                    </li>
                    <li className="header__list-li">
                        <a href="#">Bags</a>
                    </li>
                    <li className="header__list-li">
                        <a href="#">Sneakers</a>
                    </li>
                    <li className="header__list-li">
                        <a href="#">Belt</a>
                    </li>
                    <li className="header__list-li">
                        <a href="#">Sunglasses</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default HeaderListTopBar;