import React from 'react';
import emoji from '../assets/img/sad_emoji.png'
import {Link} from "react-router-dom";

function PageNotFound() {
    return (
        <div className="page_not_found">
            <img className="emoji_img" src={emoji}/>
            <h1 className="text_404">404</h1>
            <p className="text_not">Page Not Found</p>
            <div className="page-btns">
                <Link to={"/"} className="page-btn">Возвращаться</Link>
                <Link to={"/"} className="page-btn">Вернуться домой</Link>
            </div>
        </div>
    );
}

export default PageNotFound;