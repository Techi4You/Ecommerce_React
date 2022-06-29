import React, { useEffect, useState } from "react"
import Product from './Product';
const Products = () => {
    const [products, setProducts] = useState([])

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
                {
                    products.map(product => <Product key={product.id} product={product}/>)
                } 
                        
                </div>
            )}
        </div>
    )
}
export default Products;