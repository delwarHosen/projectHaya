import { Rating } from '@smastrom/react-rating';
import React, { useEffect, useState } from 'react';
import { FaCarSide } from 'react-icons/fa';
import { Link, useLoaderData, useLocation, useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../Provider/AuthProvider/AuthProvider';
import Swal from 'sweetalert2';
import useAuth from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import useCarts from '../../hooks/useCarts';

const Details = () => {
    const { _id, name, details, image, price, rating } = useLoaderData()
    const [, refetch] = useCarts()
    const [count, setCount] = useState(1);
    // const [totalPrice, setTotalPrice] = useState(0);
    const navigate = useNavigate()
    const { user } = useAuth()
    const axiosSecure = useAxiosSecure()


    const handleAddToCart = () => {
        if (user && user.email) {
            const addToCartItem = {
                productId: _id,
                email: user.email,
                name,
                image,
                price,
            }
            axiosSecure.post('/carts', addToCartItem)
                .then(res => {
                    if (res.data.insertedId) {
                        Swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: `${name} add to the cart`,
                            showConfirmButton: false,
                            timer: 1500
                        });
                        refetch()
                    }

                })
        }
        else {
            Swal.fire({
                title: "Are you sure?",
                text: "You won't be able to revert this!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, delete it!"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });

        }

    }

    // Auto path to scroll
    const { pathname } = useLocation()
    useEffect(() => {
        window.scroll(0, 0)
    }, [pathname])

    // const calculatePrice = () => {
    //     let sum = 0;
    //     const quanity = count + 1
    //     sum = sum + quanity.price
    //     setCount(sum)
    // }


    // increment and decrement functiom
    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };


    return (
        <div className='pt-20'>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='w-1/2'>
                        <img src={image} className=" w-80 h-96 p-10 rounded-lg shadow-2xl" />
                    </div>
                    <div className='p-3'>
                        <h1 className="text-3xl font-bold my-3">{name}</h1>
                        <Rating className='my-3'
                            style={{ maxWidth: 100 }}
                            value={rating}
                            readOnly
                        />
                        <p className='text-2xl font-semibold text-[#E1205E]'> {price} tk</p>

                        <p className='my-3'>{details}</p>
                        <p className='my-2'>Size: XL</p>
                        <button onClick={decrement} className='btn btn-active btn-ghost mr-1'>-</button>
                        <button className='btn btn-active btn-ghost mr-1'>{count}</button>
                        <button onClick={increment} className='btn btn-active btn-ghost'>+</button><br />
                        {/* <p>total :{}</p> */}
                        <button onClick={handleAddToCart} className="btn bg-[#E1205E] my-4 text-white">Add to Cart</button>
                        <Link className='btn ml-8 bg-[#E1205E] text-white font-semibold' to='/dashboard/cart'>Show Cart</Link>
                        <Link className='btn ml-8 text-purple-600 font-semibold' to='/'>Home</Link>
                        <div className='flex'>
                            <FaCarSide className='w-16 h-16 mt-5'></FaCarSide><p className='mt-10 ml-2'>Delivery policy(edit with the Customer Reassurance module)</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;

// (_id, name, image, price)