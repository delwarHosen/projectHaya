import React, { useContext } from 'react';
import hayaLogo from "../../../assets/banner/hayaLogo.png"
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider/AuthProvider';
import useCarts from '../../../hooks/useCarts';

const Navbar = () => {

    const handleMenus = (data) => {
        alert(data)
    }

    const { user, logOut } = useContext(AuthContext)
    const [cart] = useCarts()

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const navOption = <>
        <button className='text-white btn bg-transparent border-none shadow-none'><Link to='/'>Home</Link></button>
        {/* <li><Link to='/shop'>Shop</Link></li> */}
        <details className="dropdown">
            <summary className="btn text-center bg-transparent w-full border-none text-white shadow-none">Shop</summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                {/* <li className='text-black'><a>Men</a></li> */}
                <details className="dropdown">
                    <summary className="btn text-center bg-transparent w-full border-none text-black shadow-none">Men</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li onClick={()=>handleMenus("menshirt")} className='text-black'><a>Shirt</a></li>
                        <li onClick={()=>handleMenus("mentshirt")}  className='text-black'><a>T-Shirt</a></li>
                        <li onClick={()=>handleMenus("menjeans")}  className='text-black'><a>Jeans</a></li>
                    </ul>
                </details>
                <details className="dropdown">
                    <summary className="btn text-center bg-transparent w-full border-none text-black shadow-none">Woman</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li onClick={()=>handleMenus("womanshirt")}  className='text-black'><a>Shirt</a></li>
                        <li onClick={()=>handleMenus("womantshirt")}  className='text-black'><a>T-Shirt</a></li>
                        <li onClick={()=>handleMenus("womanjeans")}  className='text-black'><a>Jeans</a></li>
                    </ul>
                </details>
                <details className="dropdown">
                    <summary className="btn text-center bg-transparent w-full border-none text-black shadow-none">Children</summary>
                    <ul className="p-2 shadow menu dropdown-content z-[1] bg-white rounded-box w-52">
                        <li onClick={()=>handleMenus("childshirt")}  className='text-black'><a>Shirt</a></li>
                        <li onClick={()=>handleMenus("childtshirt")}  className='text-black'><a>T-Shirt</a></li>
                        <li onClick={()=>handleMenus("childjeans")}  className='text-black'><a>Jeans</a></li>
                    </ul>
                </details>
                <button className='text-black border-none shadow-none bg-transparent'><Link to='/shop'>All Products</Link></button>
            </ul>
        </details>
        <button className='text-white btn bg-transparent border-none shadow-none'><a>Contact</a></button>
    </>

    return (
        <div className=' sticky top-0 z-10 '>
            <div className="navbar bg-white">
                <div className="flex-1 md:ml-20">
                    <a className="btn btn-ghost text-2xl text-white font-semibold"> <img className='w-[100px]' src={hayaLogo} alt="" /> </a>
                </div>
                <div className="flex-none gap-2 md:mr-20">
                    <div className="form-control md:mr-8">
                        <input type="text" placeholder="Search your product" className="input bg-white input-bordered w-40 md:w-auto" />
                    </div>
                    <div className='flex md:mr-6 mr-6'>
                        {/* <FaRegHeart className='md:h-8 h-4 md:w-8 w-4 mr-1 text-white'></FaRegHeart><span className='md:text-xl text-sm text-white font-semibold'>Wishlist</span> */}
                        {/* <FaSearch></FaSearch> */}
                        <Link to='/dashboard/cart' className='flex'>
                            <FaShoppingCart className='md:h-8 h-4 md:w-8 w-4 text-white'></FaShoppingCart>
                            <div className="badge badge-secondary ml-1">+{cart.length}</div>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="navbar bg-gradient-to-r from-[#005C62] to-[#00BCC8]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box bg-gradient-to-r from-[#005C62] to-[#00BCC8] w-52">
                            {navOption}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white md:ml-20">All Product</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-white">
                        {navOption}
                    </ul>
                </div>
                <div className="navbar-end md:mr-20 mr-4">
                    {
                        user ?
                            <> <span className='text-white font-semibold mr-2'>{user?.displayName}</span>
                                <Link onClick={handleLogOut} className='text-white font-bold text-xl' to='/login'>LogOut</Link></>
                            : <Link className='text-white font-bold text-xl' to='/login'>Login</Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;





