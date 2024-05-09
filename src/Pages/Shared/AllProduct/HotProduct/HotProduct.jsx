import React from 'react';
import SectionTitle from '../../../../components/SectionTitle/SectionTitle';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import img1 from '../../../../assets/hotProduct/lady.png'
import img2 from '../../../../assets/hotProduct/lady2.png'
import img3 from '../../../../assets/hotProduct/lady3.png'
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const HotProduct = () => {
    return (
        <div className='my-14'>
            <SectionTitle
                subHeading={'Haya Collection'}
                heading={'Hot Selling products'}
                paragraph={'Nullam gravida, dolor ac ultrices lobortis, mi dolor justo.'}
            ></SectionTitle>
            <div className='grid md:grid-cols-4 gap-5 my-10 justify-center items-center'>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <button className='bg-[#E1205E] px-5 py-[5px] rounded-br-lg text-white absolute top-0 left-0'>New</button>
                        <div className='flex justify-evenly absolute bottom-0 ml-8 bg-gray-200 p-2 w-3/4'>
                            <FaShoppingCart></FaShoppingCart>
                            <FaSearch></FaSearch>
                            <FaRegHeart></FaRegHeart>
                        </div>
                        <img src={img1} alt="Shoes" className=" h-60 w-full bg-white" />

                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2'>Duis quis lacinia </p>
                        <Rating className='mx-auto pt-2'
                            style={{ maxWidth: 100 }}
                            value={4}
                            readOnly
                        />
                        <h3 className='text-[#E1205E] text-3xl font-semibold pt-2'>$68.00</h3>
                    </div>
                </div>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <button className='bg-[#E1205E] px-5 py-[5px] rounded-br-lg text-white absolute top-0 left-0'>New</button>
                        <div className='flex justify-evenly absolute bottom-0 ml-8 bg-gray-200 p-2 w-3/4'>
                            <FaShoppingCart></FaShoppingCart>
                            <FaSearch></FaSearch>
                            <FaRegHeart></FaRegHeart>
                        </div>
                        <img src={img2} alt="Shoes" className=" h-60 w-full bg-white" />

                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2'>Duis quis lacinia </p>
                        <Rating className='mx-auto pt-2'
                            style={{ maxWidth: 100 }}
                            value={4}
                            readOnly
                        />
                        <h3 className='text-[#E1205E] text-3xl font-semibold pt-2'>$68.00</h3>
                    </div>
                </div>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <button className='bg-[#E1205E] px-5 py-[5px] rounded-br-lg text-white absolute top-0 left-0'>New</button>
                        <div className='flex justify-evenly absolute bottom-0 ml-8 bg-gray-200 p-2 w-3/4'>
                            <FaShoppingCart></FaShoppingCart>
                            <FaSearch></FaSearch>
                            <FaRegHeart></FaRegHeart>
                        </div>
                        <img src={img1} alt="Shoes" className=" h-60 w-full bg-white" />

                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2'>Duis quis lacinia </p>
                        <Rating className='mx-auto pt-2'
                            style={{ maxWidth: 100 }}
                            value={4}
                            readOnly
                        />
                        <h3 className='text-[#E1205E] text-3xl font-semibold pt-2'>$68.00</h3>
                    </div>
                </div>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <button className='bg-[#E1205E] px-5 py-[5px] rounded-br-lg text-white absolute top-0 left-0'>New</button>
                        <div className='flex justify-evenly absolute bottom-0 ml-8 bg-gray-200 p-2 w-3/4'>
                            <FaShoppingCart></FaShoppingCart>
                            <FaSearch></FaSearch>
                            <FaRegHeart></FaRegHeart>
                        </div>
                        <img src={img3} alt="Shoes" className=" h-60 w-full bg-white" />

                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2'>Duis quis lacinia </p>
                        <Rating className='mx-auto pt-2'
                            style={{ maxWidth: 100 }}
                            value={4}
                            readOnly
                        />
                        <h3 className='text-[#E1205E] text-3xl font-semibold pt-2'>$68.00</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HotProduct;