// import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import useAxiosPublic from '../hooks/useAxiosPublic';
const SocialLogin = () => {
    const navigate = useNavigate();
    // const location = useLocation();
    const axiosPublic = useAxiosPublic()

    // const from = location.state?.from?.pathname || "/";

    const { googleSignIn } = useAuth()
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                const userInfo = {
                    email: result.user.email,
                    name: result.user.displayName
                }
                axiosPublic.post('/users', userInfo)
                    .then(res => {
                        console.log(res.user);
                        // navigate(from, { replace: true });
                    })
                navigate('/')
            })
    }


    return (
        <div className='text-center mb-2'>
            <div className="divider">OR</div>
            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary'>
                <FaGoogle></FaGoogle>Google
            </button>
        </div>
    );
};

export default SocialLogin;