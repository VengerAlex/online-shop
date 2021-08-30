import React, {useState} from 'react';
import EmptyCart from "./EmptyCart";

const Drawer = ({onCloseCart, cartItems, onRemove}) => {
    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='mb-30 d-flex justify-between '>Cart:
                    <img onClick={onCloseCart} className=' cu-p' src="/img/btn-remove.svg" alt="remove"/>
                </h2>
                <div className="items">
                    {cartItems.length > 0 ? cartItems.map((el) => (
                        <div key={el.id} className="cart-item d-flex align-center mb-20">
                            <img className='sm-img mr-20' src={el.imageURL} alt="#"/>
                            <div className='mr-20'>
                                <p className='mb-5'>{el.name}</p>
                                <b>{el.price}$</b>
                            </div>
                            <img
                                onClick={() => onRemove(el.id)}
                                className='remove__btn ml-auto'
                                src="/img/btn-remove.svg"
                                alt="remove"
                            />
                        </div>
                    ))
                    :   <EmptyCart onCloseCart={onCloseCart}/>
                    }
                </div>
                <div className="total-block">
                    <ul className='d-block '>
                        <li>
                            <span>Summ:</span>
                            <div></div>
                            <b>2313$</b>
                        </li>
                        <li>
                            <span>Taxes 4%:</span>
                            <div></div>
                            <b>313$</b>
                        </li>
                    </ul>
                    <button className='drawer-btn'>Place an order
                        <img src="/img/right-arrow.svg" alt="#"/>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Drawer;