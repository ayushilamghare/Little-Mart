import axios from 'axios'

class Products{

    Products = []

    constructor(){

        this.Products=[{
            "id":1,
            "title":"Essence Mascara Lash Princess",
            "description":"The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
            "category":"beauty",
            "price":999,
            "stock":5,
            "images":"https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png"
        },
        {
            "id":2,
            "title":"Eyeshadow Palette with Mirror",
            "description":"The Eyeshadow Palette with Mirror offers a versatile range of eyeshadow shades for creating stunning eye looks. With a built-in mirror, it's convenient for on-the-go makeup application.",
            "category":"beauty",
            "price":1999,
            "stock":44,
            "images":"https://cdn.dummyjson.com/products/images/beauty/Eyeshadow%20Palette%20with%20Mirror/1.png"
        },
        {
            "id":3,
            "title":"Powder Canister",
            "description":"The Powder Canister is a finely milled setting powder designed to set makeup and control shine. With a lightweight and translucent formula, it provides a smooth and matte finish.",
            "category":"beauty",
            "price":1499,
            "stock":59,
            "images":"https://cdn.dummyjson.com/products/images/beauty/Powder%20Canister/1.png"

        },
        {
            "id":4,
            "title":"Red Lipstick",
            "description":"The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
            "category":"beauty",
            "price":1299,
            "stock":68,
            "images":"https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"
            
        }
        ];

    }

    getProduct(){
        return axios.get("https://dummyjson.com/products")
        
    }

    getProductById(id)
    {
        return axios.get("https://dummyjson.com/products" +id)
    }

    addProduct(product){
        this.Products.push(product)
        console.log(Products)
    }

    deleteProduct(id){
        var index= this.Products.findIndex(product => product.id == id)
        this.Products.splice(index, 1)
    }


}


export default new Products();
