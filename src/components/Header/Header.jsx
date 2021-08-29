import React from 'react';
import {Link} from "react-router-dom";

const Header = ({onClickCart}) => {

    return (
        <header className="header d-flex justify-between p-20 align-center p-40">
            <div className='d-flex align-center'>
                <Link to='/'>
                    <img className='header__logo mr-20' src='/img/logo.svg' alt="logo"/>
                </Link>
                <div>
                    <h3 className='text-uppercase'>Internet Shop</h3>
                    <p>Everything you need!</p>
                </div>
            </div>
            <ul className='d-flex'>
                <li onClick={onClickCart} className='mr20 cu-p'>
                    <img className='header__svg header__svg-cart' src='/img/cart.svg' alt="logo"/>
                    <span>132$</span>
                </li>
                <li>
                    <Link to='/favourite'>
                        <img className='header__svg mr-25' src='/img/favourite.svg' alt="logo"/>
                    </Link>
                </li>
                <li>
                    <img className='header__svg header__svg-user' src='/img/user.svg' alt="logo"/>
                </li>
            </ul>
        </header>
    );
};

export default Header;