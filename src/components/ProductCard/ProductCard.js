import React from 'react';

const ProductCard = ({product}) => {
    const {name, image, price} = product;
    return (
            <div className="col">
                <div className="card mb-3">
                <img src={image} className="card-img-top" alt={name}/>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                    <h4>Price: ${price}</h4>
                </div>
                </div>
            </div>
    );
};

export default ProductCard;