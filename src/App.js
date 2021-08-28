const App = () => {
    return (
        <div className="wrapper clear">

            <div className="overlay">
                <div className="drawer">
                    <h2 className='mb-30 d-flex justify-between '>Cart:
                        <img className=' cu-p' src="/img/btn-remove.svg" alt="remove"/>
                    </h2>
                    <div className="items">
                        <div className="cart-item d-flex align-center mb-20">
                            <img className='sm-img mr-20' src="/img/clothes/1.jpg" alt="#"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Man's Jacket</p>
                                <b>312$</b>
                            </div>
                            <img className='remove__btn ml-auto' src="/img/btn-remove.svg" alt="remove"/>
                        </div>
                        <div className="cart-item d-flex align-center mb-20">
                            <img className='sm-img mr-20' src="/img/clothes/1.jpg" alt="#"/>
                            <div className='mr-20'>
                                <p className='mb-5'>Man's Jacket</p>
                                <b>312$</b>
                            </div>
                            <img className='remove__btn ml-auto' src="/img/btn-remove.svg" alt="remove"/>
                        </div>
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

            <header className="header d-flex justify-between p-20 align-center p-40">
                <div className='d-flex align-center'>
                    <img className='header__logo mr-20' src='/img/logo.svg' alt="logo"/>
                    <div>
                        <h3 className='text-uppercase'>Internet Shop</h3>
                        <p>Everything you need!</p>
                    </div>
                </div>
                <ul className='d-flex'>
                    <li className='mr-30'>
                        <img className='header__svg header__svg-cart' src='/img/cart.svg' alt="logo"/>
                        <span>132$</span>
                    </li>
                    <li>
                        <img className='header__svg header__svg-user' src='/img/user.svg' alt="logo"/>
                    </li>
                </ul>
            </header>
            <div className="content p-40">
                <div className='d-flex justify-between align-center mb-40'>
                    <h1>All products</h1>
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input type="text" placeholder='Search'/>
                    </div>
                </div>
                <div className="d-flex">
                    <div className="card">
                        <div className='cloth'>
                            <img src="/img/clothes/1.jpg" alt="Clothes"/>
                        </div>
                        <h5 className='card__title'>Man's Jacket</h5>
                        <div className="d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <b>321$</b>
                            </div>
                            <div className='d-flex'>
                                <img className='mr-10 fav' src="/img/fav-after.svg" alt="#"/>
                                <button className='card__btn'>
                                    <img width={11} height={11} src="/img/add.svg" alt=""/>
                                </button>
                            </div>

                        </div>
                    </div>
                    <div className="card">
                        <div className='cloth'>
                            <img src="/img/clothes/2.jpg" alt="Clothes"/>
                        </div>
                        <h5 className='card__title'>T-Shirt</h5>
                        <div className="d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <b>222$</b>
                            </div>
                            <div className='d-flex'>
                                <img className='mr-10 fav' src="/img/fav-before.svg" alt="#"/>
                                <button className='card__btn'>
                                    <img width={11} height={11} src="/img/add.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='cloth'>
                            <img src="/img/clothes/3.jpg" alt="Clothes"/>
                        </div>
                        <h5 className='card__title'>Nike AirMax D321</h5>
                        <div className="d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <b>321$</b>
                            </div>
                            <div className='d-flex'>
                                <img className='mr-10 fav' src="/img/fav-before.svg" alt="#"/>
                                <button className='card__btn '>
                                    <img width={11} height={11} src="/img/add.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className='cloth'>
                            <img src="/img/clothes/4.jpg" alt="Clothes"/>
                        </div>
                        <h5 className='card__title'>Man's Jacket</h5>
                        <div className="d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <b>121$</b>
                            </div>
                            <div className='d-flex'>
                                <img className='mr-10 fav' src="/img/fav-before.svg" alt="#"/>
                                <button className='card__btn'>
                                    <img width={11} height={11} src="/img/add.svg" alt=""/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App;
