import React, {  } from "react";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./action.type";

export const cartReducer = (state , action) => {
    switch(action.type) {
        case ADD_TO_CART : 
            return state + 1;
        case REMOVE_FROM_CART : 
            return state - 1;
    }
}