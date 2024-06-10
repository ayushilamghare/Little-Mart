import React, { useState } from 'react'
import products from '../service/products'
export default function AddProduct() {

  var [product, setProduct] = useState({
    id:0,
    stock:0,
    price:0,
    title:"",
    description:"",
    image:""
  })

  const setData=(event)=>{
    
    setProduct({
      ...product,
      [event.target.name] :  event.target.value
    })
  }

  const addProduct = () =>{
    products.addProduct(product);
    alert('Product added!')
  }
  
  return (
    <div>
      <div className='display-6 text-center m-1'>Add Form</div>
      <form className='d-flex justify-content-center'>

        <div class="col-lg-6 col-sm-12 right-box d-flex flex-column m-3 ">
          <div class="row align-items-center">
            <div class="form-floating mb-3 row g-3">
              <div className='col-lg-4 form-floating form-row1'>
                <input type="number" class="form-control" name="id" placeholder="" onChange={(e)=>setData(e)} ></input>
                <label for="id">Id</label>
              </div>
              <div className='col-lg-4 form-floating form-row1'>
                <input type="number" class="form-control" name="stock" placeholder=""onChange={(e)=>setData(e)} ></input>
                <label for="stock">Stock</label>
              </div>
              <div class="col-lg-4 form-floating form-row1">
                <input type="number" class="form-control" name="price" placeholder="" onChange={(e)=>setData(e)}></input>
                <label for="price">Price</label>
              </div>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" name="title" placeholder="" onChange={(e)=>setData(e)}></input>
              <label for="title">Title</label>
            </div>
            <div class="form-floating mb-3">
              <input type="text" class="form-control" name="description" placeholder=""onChange={(e)=>setData(e)}></input>
              <label for="description" >Description</label>
            </div>
            <div class="form-floating mb-3">
              <input type="url" class="form-control" name="image" placeholder=""onChange={(e)=>setData(e)} ></input>
              <label for="image">Image</label>
            </div>
            <div className='d-flex justify-content-center'>
              <button type="button" class="btn btn-outline-success" onClick={addProduct}>Submit</button>
            </div>
          </div>
        </div>


      </form>
    </div>
  )
}
