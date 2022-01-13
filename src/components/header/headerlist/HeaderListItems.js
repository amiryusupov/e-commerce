import React,{useState} from 'react';
import headerList1 from '../../../assets/img/header__img2.png'
import headerList2 from '../../../assets/img/header__img1.png'
import headerList3 from '../../../assets/img/header__img3.png'
import headerList4 from '../../../assets/img/header__img4.png'
import headerList5 from '../../../assets/img/header__img5.png'
import headerList6 from '../../../assets/img/header__img6.png'
import headerList7 from '../../../assets/img/header__img7.png'
import headerList8 from '../../../assets/img/header__img8.png'
import stars__well from '../../../assets/img/star copy 4.svg'
import stars__bad from '../../../assets/img/star copy 2.svg'
import basket__img from '../../../assets/img/basket.svg'
import heart__img from '../../../assets/img/heart.svg'
import {Link} from "react-router-dom";

function HeaderListItems() {
    let [active, setActive] = useState(true);
    const data = [
        {
            id: 1,
            name: "Nike Air Max 270 React",
            img: headerList1,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 2,
            name: "Nike Air Max 270 React",
            img: headerList2,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 3,
            name: "Nike Air Max 270 React",
            img: headerList3,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 4,
            name: "Nike Air Max 270 React",
            img: headerList4,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 5,
            name: "Nike Air Max 270 React",
            img: headerList5,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 6,
            name: "Nike Air Max 270 React",
            img: headerList6,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 7,
            name: "Nike Air Max 270 React",
            img: headerList7,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
        {
            id: 8,
            name: "Nike Air Max 270 React",
            img: headerList8,
            price: "299,43",
            money: "534,33",
            percent: 24,
        },
    ]
            return (
                <div className="header__list">
                        <div className="header__list-row">
                            <div className="header__list-body">
                                {
                                    data.map(item=> {
                                        return (
                                            <div className="header__list-body-box" key={item.id}>
                                                <img className="header__list-body-img" onClick={()=> setActive(!active)} src={item.img} alt=""/>
                                                <div className={active ? "header__list-popup" : "header__list-popup active"} >
                                                    <div className="header__list-popup-img1">
                                                        <img src={heart__img} alt=""/>
                                                    </div>
                                                    <div className="header__list-popup-img2">
                                                        <img src={basket__img} alt=""/>
                                                    </div>
                                                </div>
                                                <div className="header__list-body-content">
                                                    <Link to="/product/:slug" className="header__list-body-text">{item.name}</Link>
                                                    <div className="header__list-body-stars">
                                                        <img src={stars__well} alt=""/>
                                                        <img src={stars__well} alt=""/>
                                                        <img src={stars__well} alt=""/>
                                                        <img src={stars__well} alt=""/>
                                                        <img src={stars__bad} alt=""/>
                                                    </div>
                                                    <span className="header__list-body-price">
                                                    ${item.price}
                                                </span>
                                                    <span className="header__list-body-money">
                                                    ${item.money}
                                                </span>
                                                    <span className="header__list-body-percent">
                                                        {item.percent}% Off
                                                </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                    </div>
                </div>
            </div>
);
}

export default HeaderListItems;