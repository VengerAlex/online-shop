import React, {useState} from 'react';
import styles from './Card.module.scss'


const Card = ({id, price, imageURL, name, onPlus, onFavourite, favorited = false}) => {
    const [isAdded, setIsAdded] = useState(false);
    const [isFavourite, setIsFavourite] = useState(favorited);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({price, imageURL, name})
    }
    const onClickFavourite = () => {
        onFavourite({id, price, imageURL, name})
        setIsFavourite(!isFavourite)
    }

    return (
        <div className={styles.card}>
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
                    <button  className='card__btn'>
                        <img onClick={onClickPlus} src={`/img/${isAdded ? 'btn-checked' : 'add'}.svg`} alt="#"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Card;

