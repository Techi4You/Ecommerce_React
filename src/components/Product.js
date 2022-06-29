import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

const Product = (props) => {
    const baseUrl = "http://127.0.0.1:8000"
    const { product } = props;
    return (
        <div className="col-sm-2">
            <div className="product">
                <img src={baseUrl + product.photo} alt={product.title} className="img-fluid product-img" />
                <h4>{product.title}</h4>

                <div className="btn btn-group">
                    <Link className="btn btn-success" to={'/product/' + product.slug}>View</Link>
                    <Link className="btn btn-primary" to="/">Buy Now</Link>
                </div>
            </div>
        </div>
    )
}
export default Product;