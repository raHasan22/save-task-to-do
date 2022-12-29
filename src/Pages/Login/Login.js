import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='mx-5 m w-75 mx-auto'>
            <div className='my-5'>
                <h3 className='text-center text-bold'>Log<span className='text-warning'>In</span></h3>
            </div>
            <form>
            <div className="form-floating mb-4">
                    <input name='email' type='email' className='form-control' id='floatingEmail' placeholder='Email' required></input>
                    <label htmlFor='floatingInput'>Email</label>
                </div>
            <div className="form-floating mb-4">
                    <input name='password' type='password' className='form-control' id='floatingPassword' placeholder='Password' required></input>
                    <label htmlFor='floatingInput'>Password</label>
                </div>
                <button  type='submit' className='btn btn-outline-primary btn-lg mb-4 mbd-block w-100'>Login</button>
                <p className='text-center'>Don't have an account? <Link to='/signup'>SignUp</Link></p>
            </form>
        </div>
    );
};

export default Login;