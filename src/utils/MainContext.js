import { createContext, useState, useEffect } from "react";


export const Context = createContext();

export const MainContext = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [productsSum, setProductsSum] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    
    useEffect(()=>{
        getTotalProduct();
        getTotalPrice();
    }, [cart]);
    
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

    const getTotalProduct = () => {
        const cartProductQuantity = cart.map((item) => {
            return item.quantity;
        });

        const productsSummary = cartProductQuantity.reduce((acc, curr)=>acc+curr, 0);
        setProductsSum(productsSummary);
    }

    const getTotalPrice = () => {
        const cartProductPrice = cart.map((item) => {
            return item.price * item.quantity;
        });

        const totalPrice = cartProductPrice.reduce((acc,curr)=>acc+curr, 0);
        setTotalPrice(totalPrice);
    }

    const removeCard = (id) => {
        const removedProductsCard = cart.filter((item) => item.id !== id);
        setCart(removedProductsCard);
    }


    const globalSates = {
        cart,
        setCart,
        addToCart,
        productsSum,
        setProductsSum,
        removeCard,
        setTotalPrice,
        totalPrice,
    };

    return <Context.Provider value={globalSates}>{children}</Context.Provider>
};