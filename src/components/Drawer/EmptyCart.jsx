import React from 'react';

const EmptyCart = ({onCloseCart}) => {
    return (
        <div className='text-uppercase text-center mt-50'>
            <img width={100} className='drawer-box mb-20' src="/img/cart.png" alt="empty box"/>
            There is not any purchase yet!
            <button onClick={onCloseCart} className='drawer-btn'>Take an order!</button>
        </div>
    );
};

export default EmptyCart;