import React from 'react';
import HeaderListTopBar from "./HeaderListTopBar";
import HeaderListItems from "./HeaderListItems";

function HeaderList() {
    return (
            <div className="header__list">
                <div className="container">
                    <div className="header__list-row">
                        <HeaderListTopBar/>
                        <HeaderListItems/>
                        <div className="header__list-footer">
                            <a href="#" className="header__list-footer-btn">
                                LOAD MORE
                            </a>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default HeaderList;