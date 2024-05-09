import { NavLink, Outlet } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import { FaBook, FaHome, FaProductHunt, FaShoppingCart, FaUserAlt, FaUsers, FaVoicemail } from 'react-icons/fa';
import { FaShop } from 'react-icons/fa6';
import useCarts from '../hooks/useCarts';
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
    const [cart] = useCarts()


    const [isAdmin] = useAdmin();
    return (
        <>
            <Navbar></Navbar>
            <div className='max-w-screen-xl mx-auto pt-36'>
                <div className='flex'>
                    <div className='w-60 min-h-full bg-purple-300'>
                        <ul className='menu'>
                            {
                                isAdmin ? <>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/home'>
                                            <FaHome></FaHome> Admin Home</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/addProduct'><FaProductHunt></FaProductHunt> Add Product</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/manageProduct'><FaShoppingCart></FaShoppingCart> Manage Product</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/manageBooking'><FaBook></FaBook> Manage Booking</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/allUsers'><FaUsers></FaUsers> All Users</NavLink>
                                    </li>
                                </> : <>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/user'>
                                            <FaHome></FaHome> User Home</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/cart'>
                                            <FaShoppingCart></FaShoppingCart>My Cart ({cart.length})</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/product'><FaProductHunt></FaProductHunt> Add Product</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/shop'>Manage shop</NavLink>
                                    </li>
                                    <li className='my-1'>
                                        <NavLink to='/dashboard/product'><FaUserAlt></FaUserAlt> All Users</NavLink>
                                    </li>
                                </>
                            }
                            <div className='divider'></div>
                            <li className='my-1'>
                                <NavLink to='/'><FaHome></FaHome> Home</NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/shop'><FaShop></FaShop> Shop</NavLink>
                            </li>
                            <li className='my-1'>
                                <NavLink to='/'><FaVoicemail></FaVoicemail> Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className='flex-1'>
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Dashboard;