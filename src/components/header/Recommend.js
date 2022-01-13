import React from 'react';
import recommend__img from '../../assets/img/Recommend-product.png'

function Recommend() {
    return (
        <div className="recommend__product">
            <div className="container">
                <div className="recommend__product-row">
                    <div className="recommend__product-text">
                        <span className="recommend__product-content">Adidas Men Running Sneakers</span>
                        <span className="recommend__product-other">Performance and design. Taken right to the edge.</span>
                        <a href="#" className="recommend__product-btn">SHOP NOW</a>
                    </div>
                    <div className="recommend__product-img">
                        <img src={recommend__img} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Recommend;