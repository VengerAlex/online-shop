import Card from "../components/Card/Card";
import {useContext} from "react";
import AppContext from "../context";

const Home = (
    {
        cartItems,
        searchValue,
        setSearchValue,
        onChangeSearchInput,
        items,
        onAddToCart,
        onFavourite,
        isLoading
    }
) => {
    // const {isItemAdded} = useContext(AppContext)

    const renderItems = ()  => {
        const filteredItems = items.filter((el) => el.name.toLowerCase().includes(searchValue.toLowerCase()))
        return (isLoading ? [...Array(8)] : filteredItems).map((el, i) =>
                (<Card
                    isLoading={isLoading}
                    key={i}
                    onPlus={onAddToCart}
                    onFavourite={onFavourite}
                    {...el}
                    // added={isItemAdded(el && el.id)}
                    />
            ))
    }

    return (
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
                    {renderItems()}
                </div>
            </div>
    )
}

export default Home;
