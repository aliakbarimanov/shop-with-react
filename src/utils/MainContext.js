import { createContext, useState } from "react";

export const Context = createContext();

export const MainContext = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (data) => {

        let existingCard = cart.find((item) => item.id === data.id);

        if (existingCard) {
            const updatedCart = cart.filter((item) => {
                if (existingCard.id === item.id) {
                    return { ...item, quantity: item.quantity++ }
                } else {
                    return item;
                }
            });
            setCart(updatedCart);

        } else {
            setCart([...cart, { ...data, quantity: 1 }]);
        }
    }

    const globalSates = {
        cart,
        setCart,
        addToCart,
    };

    return <Context.Provider value={globalSates}>{children}</Context.Provider>
};