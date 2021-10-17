import React from 'react';
import "./_product.scss";
const products = [
    require("../../assets/images/shop/shop-1.jpg").default,
    require("../../assets/images/shop/shop-2.jpg").default,
    require("../../assets/images/shop/shop-3.jpg").default,
    require("../../assets/images/shop/shop-4.jpg").default,
    require("../../assets/images/shop/shop-5.jpg").default,
    require("../../assets/images/shop/shop-6.jpg").default,
    require("../../assets/images/shop/shop-7.jpg").default,
    require("../../assets/images/shop/shop-8.jpg").default,
    require("../../assets/images/shop/shop-9.jpg").default,
]
const Product = () => (
    <div className="row">
        {products.map((item,index)=>(
            <div key={index} className="col-lg-3 col-md-6">
                <div className="product__item">
                    <div className="product__item__pic">
                        <img className="imageview" src={item} alt="" />
                        <ul className="product__hover">
                            <li>
                                <a href={item}>
                                    <span className="fa fa-arrows-alt"></span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="product__item__text">
                        <h6>
                            <a href="#">Furry Hooded</a>
                        </h6>
                        <div className="rating">
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                            <i className="fa fa-star"></i>
                        </div>
                        <div className="product__price">
                            Rs.590
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
)
export default Product;
