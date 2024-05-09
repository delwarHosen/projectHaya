import React from 'react';
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import imgBlog from '../../../assets/blogImg/latest.jpg'
import imgBlog1 from '../../../assets/blogImg/letest2.jpg'
import imgBlog2 from '../../../assets/blogImg/latest3.jpg'

const LatestBlogProduct = () => {
    return (
        <div className='mt-14'>
            <SectionTitle
                subHeading={'Haya Collection'}
                heading={'Latest From Blog'}
                paragraph={'Nullam gravida, dolor ac ultrices lobortis, mi dolor justo.'}
            ></SectionTitle>
            <div className='grid md:grid-cols-4 justify-center items-center gap-5 shadow-sm my-5'>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <h4 className='bg-[#E1205E] px-5 py-[5px] rounded-bl-lg text-white absolute top-0 right-0'>8 May</h4>
                        <img src={imgBlog} alt="Shoes" className=" h-52 w-full bg-white" />
                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2 w-56 mx-auto'>It is a long established fact that a reader will be distra.... </p>
                        <h3 className='text-[#E1205E] text-xl font-semibold pt-2'>Read More</h3>
                    </div>
                </div>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <h4 className='bg-[#E1205E] px-5 py-[5px] rounded-bl-lg text-white absolute top-0 right-0'>8 May</h4>
                        <img src={imgBlog2} alt="Shoes" className=" h-52 w-full bg-white" />
                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2 w-56 mx-auto'>It is a long established fact that a reader will be distra.... </p>
                        <h3 className='text-[#E1205E] text-xl font-semibold pt-2'>Read More</h3>
                    </div>
                </div>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <h4 className='bg-[#E1205E] px-5 py-[5px] rounded-bl-lg text-white absolute top-0 right-0'>8 May</h4>
                        <img src={imgBlog1} alt="Shoes" className=" h-52 w-full bg-white" />
                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2 w-56 mx-auto'>It is a long established fact that a reader will be distra.... </p>
                        <h3 className='text-[#E1205E] text-xl font-semibold pt-2'>Read More</h3>
                    </div>
                </div>
                <div className="w-72 border-2 border-white">
                    <div className="relative border-gray-200 m-1">
                        <h4 className='bg-[#E1205E] px-5 py-[5px] rounded-bl-lg text-white absolute top-0 right-0'>8 May</h4>
                        <img src={imgBlog2} alt="Shoes" className=" h-52 w-full bg-white" />
                    </div>
                    <div className="text-center my-5">
                        <h2 className=" text-xl font-bold text-center pt-2">Duis quis lacinia</h2>
                        <p className='text-gray-600 font-semibold pt-2 w-56 mx-auto'>It is a long established fact that a reader will be distra.... </p>
                        <h3 className='text-[#E1205E] text-xl font-semibold pt-2'>Read More</h3>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LatestBlogProduct;