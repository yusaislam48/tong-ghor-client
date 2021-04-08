import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './Menu.css';

const Menu = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('https://tong-ghor.herokuapp.com/lunch')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, []);

    const handleBreakfast = () =>{
        fetch('https://tong-ghor.herokuapp.com/breakfast')
        .then(res => res.json())
        .then(data => setProducts(data))
    };
    const handleLunch = () =>{
        fetch('https://tong-ghor.herokuapp.com/lunch')
        .then(res => res.json())
        .then(data => setProducts(data))
    };
    const handleDinner = () =>{
        fetch('https://tong-ghor.herokuapp.com/dinner')
        .then(res => res.json())
        .then(data => setProducts(data))
    }

    return (
        <div>
        <div className='d-flex justify-content-center mt-3 mb-3'>
            <button onClick={handleBreakfast}>
            <div className='mx-3 menu-item'>
                <h6>Breakfast</h6>
            </div>
            </button>
            <button onClick={handleLunch}>
            <div className='mx-3 menu-item'>
                <h6>Lunch</h6>
            </div>
            </button>
            <button onClick={handleDinner}>
            <div className='mx-3 menu-item'>
                <h6>Dinner</h6>
            </div>
            </button>
        </div>

        <div className="d-flex justify-content-center align-items-center">
            <div>
                {
                    products.length === 0 && 
                    <div className="spinner-border text-success" role="status">
                        <span className="visually-hidden"></span>
                    </div>
                }
            </div>
        </div>

        <div className='container mb-4'>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            {
                products.map(product => <ProductCard product={product}></ProductCard>)
            }   
        </div>
        </div>
        
        </div>
    );
};

export default Menu;