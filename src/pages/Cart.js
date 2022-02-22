import React, {useState} from 'react';
import Breadcrumb from "../components/header/Breadcrumb";
import {useDispatch, useSelector} from "react-redux";
import {DeleteToCart} from "../redux/reducers/CartReducer";

    function Cart() {
    let state = useSelector(state => state.cartReducer.cart)
    let [activeBtn, setActiveBtn] = useState(0)
    let dispatch = useDispatch()
    if (activeBtn <= 1) {
        activeBtn = 1
    }
    let totalSum = state.reduce((a, b) => Number(a)  + Number(b.price) * Number(b.qty), 0)
        console.log(totalSum)
    return (
        <div className="cart">
            <Breadcrumb/>
            <div className="container">
                <div className="cart__row">
                    <div className="cart__title">
                        <span className="cart__title-product cart__title-product1">PRODUCT</span>
                        <span className="cart__title-product cart__title-product2">PRICE</span>
                        <span className="cart__title-product cart__title-product3">QTY</span>
                        <span className="cart__title-product cart__title-product4">UNIT PRICE</span>
                    </div>
                    {
                        state.map(item => {
                            return (
                                <div className="cart__item" key={item.id}>
                                    <button onClick={()=> dispatch(DeleteToCart(item.id))} className="cart__item-del">
                                        <i className="fa fa-times" aria-hidden="true"></i>
                                    </button>
                                    <div className="cart__item-img">
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <span className="cart__item-name">{item.name_uz}</span>
                                    <div className="cart__item-price">{new Intl.NumberFormat("decimal").format(item.price*item.qty)} UZS</div>
                                    <div className="cart__item-state">
                                        <button className="cart__item-state-add" onClick={()=> setActiveBtn(activeBtn-1)}>-</button>
                                        <span className="cart__item-state-num">{item.qty}</span>
                                        <button className="cart__item-state-add" onClick={()=> setActiveBtn(activeBtn+1)}>+</button>
                                    </div>
                                    <span className="cart__item-unitPrice">
                                        {new Intl.NumberFormat("decimal").format(item.price)} UZS
                                    </span>
                                </div>
                            )
                        })
                    }
                    <div className="cart__info">
                        <div className="cart__info-left">
                            <span className="cart__info-left-item">
                                Mahsulotlar summasi:
                            </span>
                            <span className="cart__info-left-item">
                                Yetkazib berish narxi:
                            </span>
                            <span className="cart__info-left-item">
                                Coupon
                            </span>
                            <span className="cart__info-left-text">
                                Total
                            </span>
                        </div>
                        <div className="cart__info-right">
                            <span className="cart__info-right-item">
                                {Intl.NumberFormat().format(totalSum)} UZS
                            </span>
                            <span className="cart__info-right-item">
                                {Intl.NumberFormat().format(20000)} UZS
                            </span>
                            <span className="cart__info-right-item">
                                No
                            </span>
                            <span className="cart__info-right-text">
                                Yo'q
                            </span>
                        </div>
                    </div>
                    <btn className="cart__check">
                        <a href="#" className="cart__check-text">
                            Check out
                        </a>
                    </btn>
                </div>
            </div>
        </div>
    );
}

export default Cart;