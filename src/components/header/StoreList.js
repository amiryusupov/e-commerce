import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getRecommended} from "../../redux/reducers/RecommendedProducts";

function StoreList() {

    const state = useSelector(state => state)
    const dispatch = useDispatch()
    const categories = state.recommended.products

    useEffect(() => {
        dispatch(getRecommended())
    }, [dispatch])

    return (
        <div className="store__list">
            <div className="container">
                <div className="store__list-items">
                {
                    categories.map((item)=> {
                        return (
                                <div className="store__list-box" key={item.id}>
                                    <div className="store__list-box-content">
                                        <span>{item.name_uz.substr(0, 20)}...</span>
                                    </div>
                                    <div className="store__list-box-img">
                                        <img src={item.image} alt=""/>
                                    </div>
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