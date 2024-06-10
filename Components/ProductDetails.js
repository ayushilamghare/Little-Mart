import React, { useEffect, useState } from 'react'
import Products from '../service/products'
import { useParams } from 'react-router-dom';

export default function ProductDetails() {
  var props = useParams();
  var [product, setProduct] = useState([])

  useEffect(()=>{
    Products.getProductById(props.id).then((result)=>{
        setProduct(result.data);
        console.log(result.data)
    }).catch((err)=>{
      console.log(err);
    })
  },[])

  return (

    // <div class="card mb-3" style={{ textAlign: "left" }}>
    //   <div className='d-flex justify-content-center'><img src={product.image} class="card-img-top image-fluid" style={{height:400, objectFit:"contain"}} alt="..."></img></div>
    //     <div class="card-body">
    //       <h5 class="card-title">{product.title}</h5>
    //       <p class="card-text">{product.description}</p>
    //       <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
    //     </div>
    // </div>

    <div class="card mb-3" style={{maxwidth: 540}}>
      <div class="row g-0">
        <div class="col-md-4">
        <img src={product.images} class="card-img-top image-fluid rounded start" style={{height:400, objectFit:"contain"}} alt="..."></img>
        </div>
        <div class="col-md-8" style={{ textAlign: "left" }}>
          <div class="card-body">
            <h5 class="card-title mt-5 mb-5 ">Product: {product.title}</h5>
            <p class="card-text lead"><span style={{fontFamily:'monospace'}}>Description:</span> {product.description}</p>
            <p class="card-text lead"><span style={{fontFamily:'monospace'}}>Price:</span> {product.price}</p>
            <p class="card-text lead"><span style={{fontFamily:'monospace'}}>Stock:</span> {product.stock}</p>
            <p class="card-text lead"><span style={{fontFamily:'monospace'}}>Category:</span> {product.category}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
