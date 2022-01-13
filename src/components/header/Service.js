import React from 'react';
import service__img1 from '../../assets/img/service__img1.svg'
import service__img2 from '../../assets/img/service__img2.svg'
import service__img3 from '../../assets/img/service__img3.svg'

function Service(props) {
    const data = [
        {
            id: 1,
            name: "FREE SHIPPING",
            img: service__img1,
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: 2,
            name: "100% REFUND",
            img: service__img2,
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },
        {
            id: 3,
            name: "SUPPORT 24/7",
            img: service__img3,
            paragraph: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        },

    ]
    return (
        <div className="service">
            <div className="container">
                <div className="service__row">
                    {
                        data.map(item=> {
                            return (
                                <div className="service__items" key={item.img}>
                                    <div className="service__items-img">
                                        <img src={item.img} alt=""/>
                                    </div>
                                    <div className="service__items-text">
                                        <span className="service__items-content">
                                            {item.name}
                                        </span>
                                        <span className="service__items-paragraph">
                                            {item.paragraph}
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

export default Service;