import React, {useEffect, useState} from 'react';
import Breadcrumb from "../components/header/Breadcrumb";
import basket_img from '../assets/img/basket.svg'
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from 'react-router-dom'
import {getOneProduct} from "../redux/reducers/ProductsReducer";
import FullPageLoading from "../components/FullPageLoading";
import {AddToCart} from "../redux/reducers/CartReducer";

function ProductList() {
    let location = useLocation()
    let dispatch = useDispatch()
    let state = useSelector((state) => state.categoryProducts.oneProduct);
    let loading = useSelector((state) => state.categoryProducts.loading);
    useEffect(()=>{
        dispatch(getOneProduct(location.pathname.split("/")[2]))
    },[dispatch])
    const [activeImg, setActiveImg] = useState(0)
    let [activeBtn, setActiveBtn] = useState(0)
    if (activeBtn <= 1) {
        activeBtn = 1
    }
    return (
        <>
            {
                loading ? <FullPageLoading/> : (
                    <div className="ProductList">
                        <Breadcrumb/>
                        <div className="container">
                            <div className="product__list_row" key={state.id}>
                                <div className="product__list_img">
                                    <div className="product__list-image">
                                        <img src={state.image} alt=""/>
                                    </div>
                                    <div className="product__list-images">
                                        <img onClick={() => setActiveImg(!activeImg)} className={activeImg ? "product__list-images-select active" : "product__list-images-select"} src={state.images} alt=""/>
                                    </div>
                                </div>
                                <div className="product__list_info">
                                    <div className="product__list_info-title">
                            <span className="product__list_info-title-name">
                                {state.name_uz}
                            </span>
                                        <div className="product__list_info-review">
                                <span className="product__list_info-reviews">
                                    0 reviews
                                </span>
                                            <a href="#" className="product__list_info-submit">
                                                Submit a review
                                            </a>
                                        </div>
                                    </div>
                                    <div className="product__list_info-cat">
                            <span className="product__list_info-cat-price">
                                {new Intl.NumberFormat().format(state.price)}{" "}UZS
                            </span>
                                        <span className="product__list_info-cat-sale">
                                Availability: &nbsp;&nbsp;&nbsp;&nbsp; In stock
                            </span>
                                        <span className="product__list_info-cat-acces">
                                Category: &nbsp;&nbsp;&nbsp;&nbsp; Accessories
                            </span>
                                        <span className="product__list_info-cat-ship">
                                Free shipping
                            </span>
                                    </div>
                                    <div className="product__list_info-select">
                                        <span className="product__list_info-selecting">Select color:</span>
                                        <div className="product__list_info-size">
                                            <span className="product__list_info-size-text">Size</span>
                                            <select className="product__list_info-size-style" name="" id="">
                                                <option value="xs">XS</option>
                                                <option value="xl">XL</option>
                                                <option value="xxl">XXL</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="product__list_info-buy">
                                        <div className="product__list_info-buy-state">
                                            <button className="product__list_info-buy-add" onClick={()=> setActiveBtn(activeBtn-1)}>-</button>
                                            <span className="product__list_info-buy-num">{activeBtn}</span>
                                            <button className="product__list_info-buy-add" onClick={()=> setActiveBtn(activeBtn+1)}>+</button>
                                        </div>
                                        <button className="product__list_info-buy-cart" onClick={()=> dispatch(AddToCart(state))+alert("Savathcaga qo'shildi")}>
                                            <img src={basket_img} alt=""/>
                                            <span className="product__list_info-buy-name">Add To Cart</span>
                                        </button>
                                    </div>
                                </div>
                                <div className="product__list_seller"></div>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );
}

export default ProductList;