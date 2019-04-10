import React from 'react';
import CartItem from './CartItem';

export default function CartList({value}) {

    const {cart,increase,decrease,removeItem} = value;
    return (
    <div className='container-fluid'>
        {
            cart.map(product => (
                <CartItem key={product.id} product={product} increase={increase} decrease={decrease} removeItem={removeItem}/>
            ))
        }
    </div>
  );
}
