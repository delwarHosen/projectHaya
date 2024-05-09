import React, { useContext } from 'react';
import loginImg from '../../../src/assets/login/login.png'
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Swal from 'sweetalert2'
import SocialLogin from '../../components/SocialLogin';

const Login = () => {

    const { signIn } = useContext(AuthContext)
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleLogin = event => {
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log('login', email, password);
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                Swal.fire({
                    title: "User can login successfully",
                    showClass: {
                        popup: `
                        animate__animated
                        animate__fadeInUp
                        animate__faster
                      `
                    },
                    hideClass: {
                        popup: `
                        animate__animated
                        animate__fadeOutDown
                        animate__faster
                      `
                    }
                });
                navigate(from, { replace: true });
            })

    }

    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse mt-28">
                <div className="text-center">
                    <img className='border-2 rounded-2xl mt-3 border-[#F70395] h-[450px]' src={loginImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl border-2 border-[#F70395] bg-base-100 mt-4">
                    <h1 className="text-4xl text-center font-bold mt-5">Login now!</h1>
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#F70395] text-white font-semibold text-xl" type="submit" value="Login" />
                        </div>
                    </form>
                    <p className='p-3'><small>Create an new acount? Please <Link className='text-purple-600 font-semibold' to='/signup'>sign up</Link></small></p>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;