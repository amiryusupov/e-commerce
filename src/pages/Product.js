import React, {useEffect} from 'react';
import Breadcrumb from "../components/header/Breadcrumb";
import HeaderListItems from "../components/header/headerlist/HeaderListItems";
import {useDispatch, useSelector} from "react-redux";
import ReactPaginate from "react-paginate";
const data = [
    {
        id: 1,
        name: "Nike",
        num: 2,
    },
    {
        id: 2,
        name: "Airmax",
        num: 48,
    },
    {
        id: 3,
        name: "Nike",
        num: 14,
    },
    {
        id: 4,
        name: "Adidas",
        num: 15,
    },
    {
        id: 5,
        name: "Vans",
        num: 23,
    },
    {
        id: 6,
        name: "All Stars",
        num: 1,
    },
    {
        id: 7,
        name: "Adidas",
        num: 95,
    },

]

function Product() {
    return (
        <div className="product">
            <Breadcrumb/>
            <div className="container">
                <div className="product__row">
                    <div className="brand">
                        <div className="brand__row">
                            <div className="brand__row__items">
                                <span className="brand__row__items-title">
                                    Hot Deals
                                </span>
                                <ul>
                                    {
                                        data.map(item => {
                                            return (
                                                <li className="brand__row__items-li" key={item.id}>
                                                    <a href="#"
                                                       className="brand__row__items-li-text">{item.name}</a>
                                                    <span className="brand__row__items-li-num">{item.num}</span>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="product__row-item">
                        <HeaderListItems/>
                        <div className="pagination">
                        {/*    <div className="pagination__items">*/}
                        {/*        <span className="pagination__item">1</span>*/}
                        {/*        <span className="pagination__item">2</span>*/}
                        {/*        <span className="pagination__item">3</span>*/}
                        {/*        <span className="pagination__item">4</span>*/}
                        {/*        <span className="pagination__item">5</span>*/}
                        {/*    </div>*/}
                            <ReactPaginate
                                breakLabel="..."
                                previousLabel="<"
                                nextLabel=">"
                                // onPageChange={handlePageClick}
                                pageRangeDisplayed={3}
                                pageCount={10}
                                containerClassName="pagination__items"
                                pageClassName="pagination__item"
                                previousClassName="pagination__item"
                                nextClassName="pagination__item"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;