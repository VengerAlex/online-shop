import React, {useContext} from 'react';
import AppContext from "../context";

const Info = ({title, description, image}) => {
    const {setCartOpened} = useContext(AppContext)

    return (
        <div className='text-uppercase text-center mt-50'>
            <img width={100} className='drawer-box mb-20' src={image} alt="empty box"/>
            {description}
            <button onClick={() => setCartOpened(false)} className='drawer-btn'>{title}</button>
        </div>
    );
};

export default Info;