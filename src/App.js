import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Card from "./components/Card/Card";
import React, {useEffect, useState} from "react";


const App = () => {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');


    useEffect(() => {
        fetchData()
    }, [])


    const fetchData = async () => {
        const res = await fetch('https://612a905922bb490017893971.mockapi.io/items');
        const data = await res.json();

        setItems(data);
    }
    const pushData = async (obj) => {
        const res = await fetch('https://612a905922bb490017893971.mockapi.io/cart', {
            method: 'POST',
            headers: {"Content-type": "application/json"},
            body: JSON.stringify(obj)
        });
    }
    const fetchDataToCart = async () => {
        const res = await fetch('https://612a905922bb490017893971.mockapi.io/cart');
        const data = await res.json();

        setCartItems(data);
    }
    const onAddToCart = (obj) => {
        pushData(obj);
        setCartItems(prev => [...prev, obj])
    }
    const onChangeSearchInput = (e) => {
        setSearchValue(e.target.value)
    }

    const onRemoveCart =  async  (id) => {
        const res = await fetch(`https://612a905922bb490017893971.mockapi.io/cart/${id}`, {
            method: 'DELETE',
        });
        setCartItems(prev => prev.filter((el) => el.id !== id))
    }


    useEffect(() => {
        fetchDataToCart()
    }, [ onAddToCart])

    return (
        <div className="wrapper clear">
            {cartOpened && <Drawer
                onRemove={onRemoveCart}
                cartItems={cartItems}
                onCloseCart={() => setCartOpened(false)}
            />}
            <Header onClickCart={() => setCartOpened(true)}/>
            <div className="content p-40">
                <div className='d-flex justify-between align-center mb-40'>
                    {searchValue
                        ? <div className='text-uppercase fw-bold search-items'>
                            Search for {searchValue}
                            <img
                                onClick={() => setSearchValue('')}
                                className=' cu-p'
                                src="/img/btn-remove.svg"
                                alt="clear"
                            />
                        </div>
                        : <h1 className='text-uppercase'>
                            All products
                        </h1>}
                    <div className="search-block d-flex">
                        <img src="/img/search.svg" alt="search"/>
                        <input
                            value={searchValue}
                            onChange={onChangeSearchInput}
                            type="text"
                            placeholder='Search'
                        />
                    </div>
                </div>
                <div className="card-wrapper d-flex">
                    {items
                        .filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
                        .map((el, i) =>
                            (<Card
                                key={i}
                                name={el.name}
                                imageURL={el.imageURL}
                                price={el.price}
                                onPlus={onAddToCart}
                                onFavourite={() => console.log('Add to bookmarks')}
                            />)
                        )}
                </div>
            </div>
        </div>
    )
}

export default App;
