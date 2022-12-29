import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthProvider";

const Login = () => {
  const { login } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || '/';

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    login(email, password)
    .then(result => {
      const user = result.user;
        toast.success(`Successfully logged in ${user.email}`);
        event.target.reset();
        navigate(from, {replace: true});
    })
    .catch(error => {
        toast.error(`Not Successful ${error.message}`);
        event.target.reset();
    });
  };

  return (
    <div className="mx-5 m w-75 mx-auto">
      <div className="my-5">
        <h3 className="text-center text-bold">
          Log<span className="text-warning">In</span>
        </h3>
      </div>
      <form onSubmit={handleLogin}>
        <div className="form-floating mb-4">
          <input
            name="email"
            type="email"
            className="form-control"
            id="floatingEmail"
            placeholder="Email"
            required></input>
          <label htmlFor="floatingInput">Email</label>
        </div>
        <div className="form-floating mb-4">
          <input
            name="password"
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
            required></input>
          <label htmlFor="floatingInput">Password</label>
        </div>
        <button
          type="submit"
          className="btn btn-outline-primary btn-lg mb-4 mbd-block w-100">
          Login
        </button>
        
      </form>
      <p className="text-center">
          Don't have an account? <Link to="/signup">SignUp</Link>
        </p>
    </div>
  );
};

export default Login;
