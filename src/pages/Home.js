import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
const Home = () => { 
    const [products, setProducts] = useState([])
    const baseUrl = "http://127.0.0.1:8000"
    const fetchData = () => {
        fetch("http://127.0.0.1:8000/api/product")
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
        <div className="container-fluid">
         {products.length > 0 && (
                <div className="row"> 
                {products.map(product => (     
           <div className="col-sm-2"key={product.id}>
            <div className="product">
                <img src={baseUrl + product.photo} alt={product.title} className="img-fluid product-img" />
                <h4>{product.title}</h4>

                <div className="btn btn-group">
                    <Link className="btn btn-success" to={'/product/' + product.slug}>View</Link>
                    <Link className="btn btn-primary" to="/">Buy Now</Link>
                </div>
            </div>
        </div> 
          ))}  
                </div>
            )}
        </div>
    )
}
export default Home;