import React, { useContext, useEffect, useState } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../context/action.type";
import CartContext from "../context/cartContext";

function ProductDetail ( { detail } ) {
    
    // const [ btnText , setBtnText ] = useState("Add to Cart");
    const { cart_count ,dispatch,  addToCart, removeFromCart} = useContext(CartContext);
    const cartData = JSON.parse(localStorage.getItem('cartData'));
    const [ btn , setBtn ] = useState("");

    useEffect(() => {
        const btnText = cartData.find( item => item.id == detail.id ) == undefined ? "Add to Cart" : "Remove from cart"
        setBtn(btnText);
    }, [cartData ])

    const cartBtnClick = () => {
        const action = btn === "Add to Cart" ? true : false; 
        if(action === true) {
            dispatch({
                type: ADD_TO_CART
            });
            const item = {
                image: detail.tinyImage,
                name: detail.productName,
                price: detail.productPrice,
                id: detail.id
            }
            // setBtnText("Remove from Cart");
            addToCart(item);
        }  
        else { 
            dispatch({
                type: REMOVE_FROM_CART
            })
            removeFromCart(detail.id);
            // setBtnText("Add to Cart");
        }
    } 

    return (
        <div className="cls_ProductCont">
            <div className="cls_ProdImgCont">
                <img src = {detail.productImage} />
            </div>
            <div className="cls_ProdDesc">
                <div className="cls_ProdName">
                    {detail.productName}
                </div>
                <div className="cls_ProdPrice">
                    {detail.productPrice}
                </div>
            </div>
            <div className="addToCartBtn" onClick = { () => cartBtnClick()}>
                {btn}
            </div>
        </div>
    )
}

export default ProductDetail;