import React, { useContext } from 'react';
import signUoImg from '../../assets/login/login.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2'
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin';

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { register, handleSubmit, reset, formState: { errors }, } = useForm()
    const { createUser, userUpdateProfile } = useContext(AuthContext)
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        createUser(data.email, data.password)
            .then(result => {
                const creactAccount = result.user;
                console.log(creactAccount)
                userUpdateProfile(data.name)
                    .then(() => {
                        const userInfo = {
                            name: data.name,
                            email: data.email
                        }
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    reset()
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "Your work has been saved",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                    navigate('/')
                                }
                            })

                    })
                    .catch(err => console.log(err.message))
            })
    }




    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex flex-col-reverse lg:flex-row-reverse mt-28">
                <div className="text-center">
                    <img className='border-2 rounded-2xl mt-3 border-[#F70395] h-[550px]' src={signUoImg} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border-2 border-[#F70395] mt-4">
                    <h1 className="text-4xl text-center font-bold mt-5">Sign Up!</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" {...register("name")} name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" {...register("email")} name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" {...register("password", {
                                required: true,
                                minLength: 6,
                                maxLength: 20,

                            })} name='password' placeholder="password" className="input input-bordered" required />
                            {errors.password?.type === 'minLength' && <span className='text-red-600'>password must be 6 character</span>}
                            {errors.password?.type === 'maxLength' && <span className='text-red-600'>password must be less than 20 character</span>}
                            {/* {errors.password?.type === 'pattern' && <span className='text-red-600'>password must be one uppacase one loawercase and one number and one special character</span>} */}
                            {/* pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).$/ */}
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn bg-[#F70395] text-white font-semibold text-xl" type="submit" value="Sign up" />
                        </div>
                    </form>
                    <p className='p-3'><small>already have an acount? Please <Link className='text-purple-600 font-semibold' to='/login'>Login</Link></small></p>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;