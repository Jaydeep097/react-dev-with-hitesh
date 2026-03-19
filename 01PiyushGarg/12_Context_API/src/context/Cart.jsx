import { createContext, useState } from "react";

export const CartContext = createContext(null);

export const CartProvider = (props) => {
    const [item, setItems] = useState([]);

    return (
        <CartContext.Provider value={{item, setItems}} >
            {props.children}
        </CartContext.Provider>
    )
}

