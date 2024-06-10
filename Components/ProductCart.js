import React from 'react'
import { NavLink } from 'react-router-dom'
import products from '../service/products'
import "../Styles/ProductCart.css"

export default function ProductCart(props) {

    const deleteProduct=()=>{
        if(window.confirm('Are you sure you want to delete this product'))
            props.deleteProduct(props.product.id)
    }


    return (
        <>
            
                <div class="card products-card" style={{ height: 400 }}>
                    <div class="card-body ">
                    <NavLink style={{ textDecoration: "none" }} to={"/product/" + props.product.id} >
                        <img src={props.product.images} height={200} width={200} className='img-fluid'></img>
                    </NavLink>
                        <div className='main-text'  style={{ textAlign: "left" }}>
                            <h5 class="card-title mb-5  " style={{
                                height: 20, textAlign: "left"
                            }}>{props.product.title}</h5>
                            <div className='d-flex justify-content-between'>
                            <div>Price: {props.product.price}</div>
                            <div>Stock: {props.product.stock}</div>
                            </div>
                            
                            {/* <div class="card-text">{props.product.description}</div> */}
                        </div>
                        <div className='d-flex justify-content-between mt-2 '>
                            <button type="button" class="btn btn-outline-success">Add to Cart</button>
                            <button type="button" class="btn btn-outline-danger" onClick={deleteProduct}>Remove</button>
                        </div>
                    </div>
                </div>
            
        </>
    )
}
