import React from 'react';
import './Service.css';

const Service = ({ service }) => {
    const { name, description, img, price } = service;

    return (
        <div className='service'>
            <img src={img} alt="" />
            <h3>We provide : {name}</h3>
            <p>Price : {price}</p>
            <p>{description}</p>

        </div>
    );
};

export default Service;