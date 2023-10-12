import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
    const [cart, setCart] = useState([]);


    const addToCart = (data) => {
        
        let existingCard = cart.find((item) => item.id === data.id );

        if(existingCard){
            setCart([...cart, { ...data, quantity: data.quantity++ }]);
        }else{
            setCart([...cart, { ...data, quantity: 1 }]);
        }
    }
    
    console.log(cart);


    const globalSates = {
        cart,
        setCart,
        addToCart,
    };

    return <Context.Provider value={globalSates}>{children}</Context.Provider>
};