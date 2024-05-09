import React from 'react';
import useCarts from '../../hooks/useCarts';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const Cart = () => {
    const [cart,refetch] = useCarts()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce(((total, item) => total + item.price), 0)

    const handleDeleteCart = (id) => {
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
                axiosSecure.delete(`/carts/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })

            }
        });
    }

    return (
        <div className='max-w-screen-xl mx-auto pt-36'>
            <h3 className='text-5xl text-center bg-pink-50'>Cart</h3>
            <div className='flex'>
                <div className='w-3/4'>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Action</th>
                                    <th>Product</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map(item => <tr key={item._id}>
                                        <th>
                                            <button onClick={() => handleDeleteCart(item._id)} className='btn'>X</button>
                                        </th>
                                        <td>
                                            <div className="flex items-center gap-2">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">{item.name}</div>
                                                    <div className="text-sm opacity-50">Extra large</div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            {item.price}
                                        </td>
                                        <td>
                                            <button className='btn btn-active btn-ghost mr-1'>-</button>
                                            <button className='btn btn-active btn-ghost mr-1'>0</button>
                                            <button className='btn btn-active btn-ghost'>+</button><br />
                                        </td>
                                        <th>
                                            <button className="btn btn-ghost btn-xs">Total Price</button>
                                        </th>
                                    </tr>)
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='ml-4 border-2 border-gray-400 max-h-80 w-60'>
                    <h2 className='text-2xl font-bold text-center mt-2 underline'>Cart Total</h2>
                    <div>
                        <p className='m-4 text-xl font-bold'>Total Price: <span className='text-sm'>{totalPrice}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;