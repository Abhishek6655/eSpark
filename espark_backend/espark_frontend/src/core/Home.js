import React, { useState, useEffect } from 'react';
import Layout from './Layout';
import { getProducts } from './apiCore';
import Card from './Card';
import Search from './Search';


const Home =()=>{
    const [productsBySell, setProductsBySell] = useState([]);
    const [productsByArrival, setProductsByArrival] = useState([]);
    const [error, setError] = useState(false);

    const loadProductsBySell = () => {
        getProducts('sold').then(data => {
            if (data.error) {
                setError(data.error);
            } else {
                setProductsBySell(data);
            }
        });
    };

    const loadProductsByArrival = () => {
        getProducts('createdAt').then(data => {
            console.log(data);
            if (data.error) {
                setError(data.error);
            } else {
                setProductsByArrival(data);
            }
        });
    };
    useEffect(() => {
        loadProductsByArrival();
        loadProductsBySell();
    }, []);

    return (
        <Layout
            title="Home Page"
            description="Welcome to e-Spark, Get your electronics essentials here.." className="container-fluid"
        >
            <Search />
            <h2 className="mb-4"><b>New Arrivals</b></h2>
            <hr className="hr1"></hr>
            <div className="row">    
                {productsByArrival.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                    <Card product={product} />
                </div>
                ))}
            </div>    
            <br></br>
            <br></br>
          <h2 className="mb-4"><b>Best Sellers</b></h2>
          <hr className="hr1"></hr>
          <div className="row">
                {productsBySell.map((product, i) => (
                    <div key={i} className="col-4 mb-3">
                    <Card product={product} />
                </div>
                ))}
           </div>     
                
        </Layout>
    );
};

export default Home;