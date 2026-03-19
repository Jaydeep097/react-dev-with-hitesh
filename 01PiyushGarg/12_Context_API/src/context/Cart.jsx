import { createContext, useState, useContext } from "react";

export const CartContext = createContext(null);


export const useCart = ()=> { 
    const cart = useContext(CartContext)
    return cart;
}

export const CartProvider = (props) => {
    const [item, setItems] = useState([]);

    return (
        <CartContext.Provider value={{item, setItems}} >
            {props.children}
        </CartContext.Provider>
    )
}

