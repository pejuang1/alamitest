import React, { useState } from 'react';

import Cart from './Component';

const CartScreen = () => {

    const [quantity, setQuantity] = useState(1);

    const handleQuantity = (e) => {
        if (e == 'minus' && quantity > 1) {
            setQuantity(quantity - 1);
        }
        if (e == 'plus' && quantity >= 1) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <Cart 
            quantity={quantity} 
            onpressMinus={() => handleQuantity('minus')} 
            onpressPlus={() => handleQuantity('plus')}
        />
    );
}

export default CartScreen;