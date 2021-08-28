import React from 'react';

const Header = ({onClickCart}) => {

    return (
        <header className="header d-flex justify-between p-20 align-center p-40">
            <div className='d-flex align-center'>
                <img className='header__logo mr-20' src='/img/logo.svg' alt="logo"/>
                <div>
                    <h3 className='text-uppercase'>Internet Shop</h3>
                    <p>Everything you need!</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li onClick={onClickCart} className='mr-30 cu-p'>
                    <img  className='header__svg header__svg-cart' src='/img/cart.svg' alt="logo"/>
                    <span>132$</span>
                </li>
                <li>
                    <img className='header__svg header__svg-user' src='/img/user.svg' alt="logo"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;