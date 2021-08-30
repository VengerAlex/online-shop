import React, {useState} from 'react';
import styles from './Card.module.scss'
import ContentLoader from "react-content-loader";


const Card = ({isLoading, id, price, imageURL, name, onPlus, onFavourite, favorited = false, added = false}) => {
    const [isAdded, setIsAdded] = useState(added);
    const [isFavourite, setIsFavourite] = useState(favorited);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({id, price, imageURL, name})
    }
    const onClickFavourite = () => {
        onFavourite({id, price, imageURL, name})
        setIsFavourite(!isFavourite)
    }

    return (
        <div className={styles.card}>
            {
                isLoading
                    ?
                    <ContentLoader
                        speed={2}
                        width={380}
                        height={670}
                        viewBox="0 0 380 670"
                        backgroundColor="#f3f3f3"
                        foregroundColor="#ecebeb"
                    >
                        <rect x="3" y="7" rx="0" ry="0" width="402" height="571"/>
                        <rect x="330" y="594" rx="0" ry="0" width="76" height="23"/>
                        <rect x="7" y="593" rx="0" ry="0" width="106" height="26"/>
                        <rect x="81" y="614" rx="0" ry="0" width="4" height="6"/>
                        <rect x="5" y="635" rx="0" ry="0" width="108" height="28"/>
                        <rect x="329" y="628" rx="0" ry="0" width="80" height="27"/>
                    </ContentLoader>
                    :
                    <>
                        <div className={styles.cloth}>
                            <img src={imageURL} alt="Clothes"/>
                        </div>
                        <h5 className={styles.card__title}>{name}</h5>
                        <div className="d-flex justify-between align-center">
                            <div className='d-flex flex-column'>
                                <b>{price}$</b>
                            </div>
                            <div className='d-flex'>
                                <img
                                    onClick={onClickFavourite}
                                    className='mr-10 fav'
                                    src={`/img/${isFavourite ? 'fav-after.svg' : 'fav-before.svg'}`}
                                    alt="#"
                                />
                                <button className='card__btn'>
                                    <img onClick={onClickPlus} src={`/img/${isAdded ? 'btn-checked' : 'add'}.svg`}
                                         alt="#"/>
                                </button>
                            </div>
                        </div>
                    </>
            }

        </div>
    );
}

export default Card;

