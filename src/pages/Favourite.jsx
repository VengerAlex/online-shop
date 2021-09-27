import React, {useContext} from 'react';
import AppContext from "../context";
import Card from "../components/Card/Card";

const Favourite = ({ onFavourite}) => {
    const {favourites} = useContext(AppContext);


    return (
        <div className='wrapper favourites-wrapper'>
            <div className="fav-block">
                <h1>My Favorites</h1>
                <div className="d-flex flex-wrap mt-40">
                    {favourites && favourites.map((el, i) =>
                            (<Card
                                favorited={true}
                                key={i}
                                onFavourite={onFavourite}
                                {...el}
                            />)
                        )}
                </div>
            </div>
        </div>
    );
};

export default Favourite;