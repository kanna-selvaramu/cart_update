import React , { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { REMOVE_FROM_CART } from "../context/action.type";
import CartContext from "../context/cartContext";

function Cart () {
    const [ cartTotal , setCartTotal ] = useState(0);
    const { dispatch, removeFromCart } = useContext(CartContext);

    const btnClick = (id) => {
        dispatch({
            type: REMOVE_FROM_CART
        });
        removeFromCart(id);
    }

    return (
        <div className = "cls_CartWrapper">
            <div className = "cls_Title">
                Cart Page
                <Link to = "/">
                    <div className = "cls_BackHome">
                        Back to Product List
                    </div>
                </Link>
            </div>
            <div className = "cls_BodyWrapper">
                {
                    JSON.parse(localStorage.getItem("cartData")).map( item => {
                        return (
                            <div className = "cls_CartProdCont" key={item.id}>
                                <div className = "cls_CartProdImage">
                                    <img src = {item.image} />
                                </div>
                                <div className = "cls_CartDesc">
                                    <div className = "cls_cartProdName"> {item.name} </div>
                                    <div className = "cls_cartProdPrice"> {item.price} </div> 
                                </div>
                                <div className = "cls_cartRemove" onClick = { () => btnClick(item.id)}>
                                    Remove From Cart
                                </div>
                            </div>
                        )
                        setCartTotal(cartTotal + item.price);
                    })
                }
                <div className = "cls_TotalCont">
                    <div className = "cls_CartTotal">
                        {cartTotal}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;