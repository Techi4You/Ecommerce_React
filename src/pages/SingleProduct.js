import React, { useEffect, useState } from "react"
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';



const SingleProduct = () => {

    const change_image = (e) => {
        e.preventDefault();

        var container = document.getElementById("main-image");

        container.src = e.target.src;

        // alert(e.target.src);

    }


    const params = useParams();
    const history = useHistory();

    const baseUrl = "http://127.0.0.1:8000"

    const [products, setProducts] = useState([])

    const fetchData = () => {
        fetch(`http://127.0.0.1:8000/api/product/${params.slug}`)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setProducts(data)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className="container-fluid" key={products.id}>
            <button className="mb-12 font-bold" onClick={() => { history.goBack() }}>Back</button>
            <div className="container mt-5 mb-5">
                <div className="row d-flex justify-content-center">
                    <div className="col-md-10">
                        <div className="card">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="images p-3">
                                        <div className="text-center p-4"> <img id="main-image" src={baseUrl + products.photo} width="250" /> </div>
                                        <div className="thumbnail text-center">
                                            <img onClick={e => change_image(e)} src={baseUrl + products.photo} width="70" />

                                            <img onClick={e => change_image(e)} src="https://i.imgur.com/Dhebu4F.jpg" width="70" /> </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="product-card p-4">
                                        <div className="d-flex justify-content-between align-items-center">
                                            <div className="d-flex align-items-center"> <i className="fa fa-long-arrow-left"></i> <span className="ml-1">Back</span> </div> <i className="fa fa-shopping-cart text-muted"></i>
                                        </div>
                                        <div className="mt-4 mb-3"> <span className="text-uppercase text-muted brand">Orianz</span>
                                            <h5 className="text-uppercase">{products.title}</h5>
                                            <div className="price d-flex flex-row align-items-center">
                                                <span className="act-price"> Rs. {products.price} </span>
                                                <div className="ml-2"> <small className="dis-price"> Rs. {products.mrp}</small> <span>{products.discount}% OFF</span> </div>
                                            </div>
                                        </div>
                                        <p className="about">Shop from a wide range of t-shirt from orianz. Pefect for your everyday use, you could pair it with a stylish pair of jeans or trousers complete the look.</p>
                                        <div className="sizes mt-5">
                                            <h6 className="text-uppercase">Size</h6>
                                            <label className="radio">
                                                <input type="radio" name="size" value="S" checked onChange={e => this.changeSize(e)}/> <span>S</span> </label>
                                            <label className="radio">
                                                <input type="radio" name="size" value="M" onChange={e => this.changeSize(e)}/> <span>M</span> </label>

                                            <label className="radio">
                                                <input type="radio" name="size" value="L" onChange={e => this.changeSize(e)}/> <span>L</span> </label>
                                            <label className="radio">
                                                <input type="radio" name="size" value="XL" onChange={e => this.changeSize(e)}/> <span>XL</span> </label>
                                            <label className="radio">
                                                <input type="radio" name="size" value="XXL" onChange={e => this.changeSize(e)}/> <span>XXL</span> </label>
                                        </div>
                                        <div className="cart mt-4 align-items-center"> <button className="btn btn-danger text-uppercase mr-2 px-4">Add to cart</button> <i className="fa fa-heart text-muted"></i> <i className="fa fa-share-alt text-muted"></i> </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}
export default SingleProduct;