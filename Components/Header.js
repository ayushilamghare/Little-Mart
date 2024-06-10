import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Styles/HeaderCss.css'
import ProductMain from './ProductMain'


export default function Header() {
    return (

        <div class="sticky-top">
            <nav class="navbar navbar-expand-lg bg-light pt-0 pb-0  mb-2 shadow-sm nav-1">
                <div class="container display-5 d-flex justify-content-center text-primary">
                    <NavLink style={{ textDecoration: "none" }} to={"/"} >
                    <img class="img-fluid rounded-5 p-2" src="https://littlemart.wordpress.com/wp-content/uploads/2013/12/little-mart-logo.jpg?w=545" height={100} width={100} ></img>
                    <span style={{color:""}}>Little-MART</span>
                    </NavLink>
                    
                </div>
            </nav>

            <nav class="navbar bg-body-tertiary nav-2">
                <div class="container-fluid  nav-2">
                    <div class="lead ms-2">
                        <NavLink style={{ textDecoration: "none" }} to={"/"}> Home</NavLink>
                    </div>
                    <div class="lead">
                        <NavLink style={{ textDecoration: "none",color:"#DC143C"}} to={"/AddProduct"}> Add Product</NavLink>
                    </div>
                    <div class="lead me-2 ">
                        <button type="button" class="btn btn-outline-success">Cart</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}
