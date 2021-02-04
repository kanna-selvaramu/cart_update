import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { random, commerce } from "faker";
import ProductDetail from "./ProductDetail";
import CartContext from "../context/cartContext";
import { Link } from "react-router-dom";
const localurl = "https://api.jsonbin.io/b/601a68315415b40ac22273cc/1"


function Products () {

    const [products , setProducts] = useState([]);
    const { cart_count } = useContext(CartContext);
    const fetchData = async () => {
        const { data } = await axios.get(localurl, {});

        const { photos } = data; 
        console.log("photos", data)
        const productList = photos.map( item => ({
            productImage: item.src.medium,
            tinyImage: item.src.tiny,
            productName: item.src.name,
            productPrice: item.src.price,
            id: item.src.id
        }));
        setProducts(productList);
    }

    useEffect(() => {
        fetchData();
    },[])

    

    return (
        <div className="cls_BodyWrapper">
            <div className="cls_Title">
                Product List
                <Link to = "/cart">
                    <div className = "cls_CartCount">
                        {cart_count}
                    </div>
                </Link>
            </div>
            <div className = "cls_ProductsWrapper">
                {
                    products.map(item => (
                        <ProductDetail detail = {item} key = {item.id} />
                    ))
                }
            </div>
        </div>
    )
}

export default Products;