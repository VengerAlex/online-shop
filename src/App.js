import Header from "./components/Header/Header";
import Drawer from "./components/Drawer/Drawer";
import Card from "./components/Card/Card";
import {useEffect, useState} from "react";



const App = () => {
const [cartOpened, setCartOpened] = useState(false);
const [items, setItems] = useState([]);

useEffect(() => {
    fetchData()
}, [])

const fetchData = async () => {
    const res = await fetch('https://612a905922bb490017893971.mockapi.io/items');
    const data = await res.json();

    setItems(data);
}


return (
    <div className="wrapper clear">
        {cartOpened && <Drawer onCloseCart={() => setCartOpened(false)}/>}
        <Header onClickCart={() => setCartOpened(true)}/>
        <div className="content p-40">
            <div className='d-flex justify-between align-center mb-40'>
                <h1>All products</h1>
                <div className="search-block d-flex">
                    <img src="/img/search.svg" alt="search"/>
                    <input type="text" placeholder='Search'/>
                </div>
            </div>
            <div className="card-wrapper d-flex">
                {items.map((el) =>
                    (<Card
                        key={el.id}
                        name={el.name}
                        imageURL={el.imageURL}
                        price={el.price}
                        onPlus={() => console.log('Add plus')}
                        onFavourite={() => console.log('Add to bookmarks')}
                    />)
                )}
            </div>
        </div>
    </div>
)
}

export default App;
