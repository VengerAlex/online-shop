import React, {useState} from 'react';
import styles from './Card.module.scss'


const Card = ({price, imageURL, name, onPlus, onFavourite}) => {
    const [isAdded, setIsAdded] = useState(false);

    const onClickPlus = () => {
        setIsAdded(!isAdded);
        onPlus({price, imageURL, name})
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
                    <img onClick={onFavourite} className='mr-10 fav' src="/img/fav-after.svg" alt="#"/>
                    <button  className='card__btn'>
                        <img onClick={onClickPlus}  src={`/img/${isAdded ? 'btn-checked' : 'add'}.svg`}alt="#"/>
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Card;