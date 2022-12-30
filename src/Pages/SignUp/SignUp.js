import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const SignUp = () => {

    const { createUser, googleSignUp } = useContext(AuthContext);
    const googleProvider = new GoogleAuthProvider();
    const location = useLocation();
    const navigate = useNavigate();
  
    const from = location.state?.from?.pathname || '/';

    const handleSignup = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUser(email, password)
        .then(res => {
            const user = res.user;
            toast.success(`Successfully logged in ${user.email}`);
            event.target.reset();
            navigate(from, {replace: true});
        })
        .catch(err => {
            toast.error(`Not Successful ${err.message}`);
            event.target.reset();
        });
    };

    const handleGoogleLogin = () =>{
        googleSignUp(googleProvider)
        .then(result => {
            const user = result.user;
            toast.success(`${user.email} Log in Successful`);
        })
        .catch(error => {})
    }


    return (
        <div className='mx-5 m w-75 mx-auto'>
        <div className='my-5'>
            <h3 className='text-center text-bold'>Sign<span className='text-warning'>Up</span></h3>
        </div>
        <form onSubmit={handleSignup}>
        <div className="form-floating mb-4">
                <input name='email' type='email' className='form-control' id='floatingEmail' placeholder='Email' required></input>
                <label htmlFor='floatingInput'>Email</label>
            </div>
        <div className="form-floating mb-4">
                <input name='password' type='password' className='form-control' id='floatingPassword' placeholder='Password' required></input>
                <label htmlFor='floatingInput'>Password</label>
            </div>
            <button  type='submit' className='btn btn-outline-primary btn-lg mb-4 mbd-block w-100'>Sign Up</button>
            <p className='text-center'>Already have an account?<Link to='/login'>log in</Link></p>
            
        </form>
            <button onClick={handleGoogleLogin} className='btn btn-outline-warning btn-lg mb-4 mbd-block w-100'>Google</button>
    </div>
    );
};

export default SignUp;