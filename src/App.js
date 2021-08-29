import Home from "./pages/Home";
import Favourite from "./pages/Favourite";
import Error from "./pages/Error";
import { Switch, Route} from "react-router-dom";
import React, {useEffect, useState} from "react";
import Drawer from "./components/Drawer/Drawer";
import Header from "./components/Header/Header";

const App = () => {
    const [cartOpened, setCartOpened] = useState(false);
    const [items, setItems] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const [favourites, setFavourites] = useState([]);


    useEffect(() => {
        fetchData()
        fetchDataToCart()
        fetchDataFavour()
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


    const onFavourite = async (obj) => {
        try{
            if(favourites.find(favObj => favObj.id === obj.id)){
                const res = await fetch(`https://612a905922bb490017893971.mockapi.io/favourite/${obj.id}`, {
                    method: 'DELETE',
                });
                setFavourites(prev => prev.filter((el) => el.id !== obj.id))
            }else{
                const res = await fetch('https://612a905922bb490017893971.mockapi.io/favourite', {
                    method: 'POST',
                    headers: {"Content-type": "application/json"},
                    body: JSON.stringify(obj)
                })
                setFavourites(prev => [...prev, obj])
            }
        }catch (err){
            console.log(err.message())
        }
    }
    const fetchDataFavour = async () => {
        const res = await fetch('https://612a905922bb490017893971.mockapi.io/favourite');
        const data = await res.json();

        setFavourites(data);
    }


    return (
            <div className="wrapper clear">
                {cartOpened && <Drawer
                    onRemove={onRemoveCart}
                    cartItems={cartItems}
                    onCloseCart={() => setCartOpened(false)}
                />}
                <Header onClickCart={() => setCartOpened(true)}/>
            <Switch>
                <Route exact path='/'>
                    <Home
                        searchValue={searchValue}
                    setSearchValue={setSearchValue}
                    onChangeSearchInput={onChangeSearchInput}
                    items={items}
                    onAddToCart={onAddToCart}
                    onFavourite={onFavourite}
                    />
                </Route>
                <Route exact path='/favourite'>
                    <Favourite
                        items={favourites}
                        onFavourite={onFavourite}
                    />
                </Route>
                <Route path='*' component={Error} />
            </Switch>
            </div>
    )
}

export default App;
