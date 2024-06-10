import React, { useState, useEffect } from 'react'
import Products from '../service/products'
import ProductCart from './ProductCart'

export default function ProductMain(props) {

    var [products,setProducts] = useState([]);

    useEffect(()=>{
        Products.getProduct().then((result)=>{
            setProducts([...result.data.products])
        }).catch((err)=>{
            console.log(err)
        })
        
    },[]) 

    var deleteProduct = (id) => {
        Products.deleteProduct(id)
        setProducts([...Products.getProduct()]);
    }

    return (
        <>
            <div className='Heading text-center display-6 text-primary'>
                Products
            </div>

            <div className='container'>
                <div className='row'>
                    {

                        products.map(product => (
                            <div className='col-sm-6 col-md-6 col-lg-3 mt-4 mb-4'>
                                <ProductCart product={product} deleteProduct={deleteProduct}></ProductCart>
                            </div>
                        ))
                    }
                </div>

            </div>

        </>

    )
}
