import React, {useEffect} from 'react';
import '../../../assets/style/style.scss'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getFilteredProducts} from "../../../redux/reducers/ProductsReducer";
import FullPageLoading from "../../FullPageLoading";

function HeaderListItems() {
    const dispatch = useDispatch()
    const products = useSelector((state) => state.categoryProducts.filteredProducts);
    const loading = useSelector((state) => state.categoryProducts.loading)
    useEffect(()=> {
        dispatch(getFilteredProducts())
    }, [dispatch])
    return (
        <>
            {loading ? <FullPageLoading/> :
                (
                    <div className="header__list">
                        <div className="header__list-row">
                            <div className="header__list-body">
                                {
                                    products?.map(item => {
                                        return (
                                            <div className="header__list-body-box" key={item.id}>
                                                <Link to={`/product/${item.slug}`}>
                                                <img
                                                    className="header__list-body-img" src={item.image} alt=""/>
                                                </Link>
                                                <div className="header__list-body-content">
                                                    <Link to={`/product/${item.slug}`}
                                                          className="header__list-body-text">{item.name_uz.substr(0, 20)}...</Link>
                                                    <span className="header__list-body-price">
                                                    {new Intl.NumberFormat().format(item.price)}{" "}UZS
                                                </span>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                )
            }
            </>
);
}
export default HeaderListItems;