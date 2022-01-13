import React from 'react';
import featured__img from '../../assets/img/featured__img.png'
import stars__well from "../../assets/img/star copy 4.svg";
import stars__bad from "../../assets/img/star copy 2.svg";

function FeaturedProduct(props) {
    const data = [
        {
            id: 1,
            name: 'Blue Swade Nike Sneakers',
            img: featured__img,
            price: 499,
            money: 599
        },
        {
            id: 2,
            name: 'Blue Swade Nike Sneakers',
            img: featured__img,
            price: 499,
            money: 599
        },
        {
            id: 3,
            name: 'Blue Swade Nike Sneakers',
            img: featured__img,
            price: 499,
            money: 599
        },

    ]
    return (
        <div className="featured__product">
            <div className="container">
                <div className="featured__product-row">
                    <div className="featured__product-content">
                        <span className="featured__product-text">
                            FEATURED PRODUCTS
                        </span>
                    </div>
                    <div className="featured__product-items">
                        {
                            data.map(item => {
                                return (
                                    <div className="featured__product-item" key={item.id}>
                                        <img src={item.img} alt="" className="featured__product-item"/>
                                        <div className="featured__product-item-info">
                                            <span className="featured__product-item-info-name">
                                                {item.name}
                                            </span>
                                            <div className="featured__product-item-info-stars">
                                                <img src={stars__well} alt=""/>
                                                <img src={stars__well} alt=""/>
                                                <img src={stars__well} alt=""/>
                                                <img src={stars__well} alt=""/>
                                                <img src={stars__bad} alt=""/>
                                            </div>
                                            <div className="featured__product-item-info-price">
                                                <span className="featured__product-item-info-price1">${item.price} </span>
                                                <span className="featured__product-item-info-price2">${item.money}</span>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeaturedProduct;