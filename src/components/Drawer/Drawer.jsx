import React, {useContext, useState} from 'react';
import Info from "../Info";
import AppContext from "../../context";

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const Drawer = ({onCloseCart, cartItems, onRemove}) => {

    const {setCartItems} = useContext(AppContext)
    const [isOrderCompleted, setIsOrderCompleted ] = useState(false)
    const [orderId, setOrderId ] = useState(null)

    const totalPrice = cartItems.reduce((sum, obj) => obj.price + sum, 0)

    const onClickOrder = async () => {
        const {data} = await fetch('https://612a905922bb490017893971.mockapi.io/orders',{
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify({
                items: cartItems
            })
        })

        try{
            setIsOrderCompleted(true)
            setCartItems([])

            for (let i = 0; i < cartItems.length; i++) {
                const item = cartItems[i];

                await fetch('https://612a905922bb490017893971.mockapi.io/cart/' + item.id, {
                    method: 'DELETE'
                })
                await delay(1000)
            }
        } catch (e){
            console.log(e)
        }
    }
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
                        : <Info
                            title={isOrderCompleted ? 'Your order was received' : 'Cart is empty'}
                            description={isOrderCompleted ? `Thx a lot ${orderId}` : 'Pls place some products'}
                            image={isOrderCompleted ? '/img/complete-order.jpg' :'/img/cart.png'}
                        />
                    }
                </div>
                {!isOrderCompleted && <div className="total-block">
                    <ul className='d-block '>
                        <li>
                            <span>Summ:</span>
                            <div></div>
                            <b>{totalPrice}$</b>
                        </li>
                        <li>
                            <span></span>
                            <div>Taxes  4%</div>
                            <b>{totalPrice / 100 * 4}$</b>
                        </li>
                    </ul>
                    <button onClick={onClickOrder} className='drawer-btn'>Place an order
                        <img src="/img/right-arrow.svg" alt="#"/>
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default Drawer;