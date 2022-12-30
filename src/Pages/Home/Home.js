import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlus } from "react-icons/fa";

const Home = () => {
    return (
        <div className='my-5 mx-5'>
           <div className='card text-center'>
            <div className='card body'>
                <h5 className='card-title'>Add</h5>
                <p className='card-text'>Create and view your task easily in our site</p>
                <Link className='text-decoration-none text-dark my-2' to='/add'><FaPlus></FaPlus></Link>
            </div>
            </div> 
        </div>
    );
};

export default Home;