import React from 'react';
import news__img1 from '../../assets/img/news__img3.svg'
import news__img2 from '../../assets/img/news__img2.svg'
import news__img3 from '../../assets/img/news__img1.svg'

function News() {
    const data = [
        {
            id: 1,
            name: "Fashion Industry",
            img: news__img1,
            time: '01 Jan, 2015',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 2,
            name: "Best Design Tools",
            img: news__img2,
            time: '01 Jan, 2015',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },
        {
            id: 3,
            name: "HR Community",
            img: news__img3,
            time: '01 Jan, 2015',
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        },

    ]
    return (
        <div className="news">
            <div className="container">
                <div className="news__row">
                    <div className="news__content">
                        <span className="news__content-text">LATEST NEWS</span>
                    </div>
                    <div className="news__items">
                        {
                            data.map(item => {
                                return (
                                    <div className="news__item" key={item.id}>
                                        <img className="news__item-img" src={item.img} alt=""/>
                                        <div className="news__item-info">
                                            <span className="news__item-time">
                                                {item.time}
                                            </span>
                                            <span className="news__item-content">
                                                {item.name}
                                            </span>
                                            <span className="news__item-text">
                                                {item.text}
                                            </span>
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

export default News;