import { Component } from "react";
import { Link } from "react-router-dom";

const title = "explore our products";


let ProductList = [
    {
        imgUrl: 'assets/images/product/01.jpg',
        imgAlt: 'Product Thumb',
        title: 'Black T-Shirt Here',
        price: '$380.00',
    },
    {
        imgUrl: 'assets/images/product/02.jpg',
        imgAlt: 'Product Thumb',
        title: 'Black T-Shirt Here',
        price: '$380.00',
    },
    {
        imgUrl: 'assets/images/product/03.jpg',
        imgAlt: 'Product Thumb',
        title: 'Black T-Shirt Here',
        price: '$380.00',
    },
    {
        imgUrl: 'assets/images/product/04.jpg',
        imgAlt: 'Product Thumb',
        title: 'Black T-Shirt Here',
        price: '$380.00',
    },
]


class Product extends Component {
    render() { 
        return (
            <div className="product-section padding-top padding-bottom">
                <div className="container">
                    <div className="section-header">
                        <h2>{title}</h2>
                    </div>
                    <div className="section-wrapper">
                        <div className="row g-4 justify-content-center">
                            {ProductList.map((val, i) => (
                                <div className="col-xl-3 col-md-4 col-sm-6 col-12" key={i}>
                                    <div className="product-item">
                                        <div className="product-inner">
                                            <div className="product-thumb">
                                                <img src={`${val.imgUrl}`} alt={`${val.imgAlt}`} className="w-100" />
                                            </div>
                                            <div className="product-content text-center p-3">
                                                <Link to="/shop-single">
                                                    <h5 className="product-title">{val.title}</h5>
                                                </Link>
                                                <h5 className="product-price">{val.price}</h5>
                                                <div className="rating">
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                    <i className="icofont-ui-rating"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-5 text-center">
                            <Link to="/shop" className="default-btn"> <span>Explore More</span> </Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Product;