import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRecommended} from "../../redux/reducers/RecommendedProducts";
import {Link} from "react-router-dom";

function StoreList() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const categories = state.recommended.products

    useEffect(() => {
        dispatch(getRecommended())
    }, [])

    return (
        <div className="store__list">
            <div className="container">
                <div className="store__list-items">
                {
                    categories.map((item)=> {
                        return (
                                <div className="store__list-box" key={item.id}>
                                    <div className="store__list-box-img">
                                        <img src={item.image} alt=""/>
                                    </div>
                                    <Link to={"/product/:slug"} className="store__list-box-content">
                                        <span title={item.name_uz}>{item.name_uz.substr(0, 20)}...</span>
                                    </Link>
                                    {/*<div className="store__list-box-sale">*/}
                                    {/*    <span>${item.sale} </span>*/}
                                    {/*    <span>{item.percent}% Off</span>*/}
                                    {/*</div>*/}
                                    <div className="store__list-box-price">
                                        <span>${item.price}</span>
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

export default StoreList;