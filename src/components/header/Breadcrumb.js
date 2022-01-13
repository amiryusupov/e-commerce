import React from 'react';
import {Link} from "react-router-dom";

function Breadcrumb(props) {
    return (
        <div className="breadcrumb">
            <div className="breadcrumb__row">
                <Link className="breadcrumb__row-text" to="/">Home</Link>
                <span className="breadcrumb__row-slash">&nbsp; / &nbsp;</span>
                <div className="breadcrumb__row-name">Hot Deal</div>
            </div>
        </div>
    );
}

export default Breadcrumb;