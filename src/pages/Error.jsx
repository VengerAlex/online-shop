import React from 'react';
import {Link} from "react-router-dom";

const Error = () => {
    return (
        <div className='not-exist'>
            <img src="/img/404.png" alt="not found"/>
            <Link to='/'>
                <button>Return To Home</button>
            </Link>
        </div>
    );
};

export default Error;