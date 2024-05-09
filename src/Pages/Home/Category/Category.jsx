import React from 'react';
import manImg from '../../../assets/category/man.png'
import womanImg from '../../../assets/category/women.png'
import kidsImg from '../../../assets/category/kids.png'
import shoeImg from '../../../assets/category/shoes.png'

const Category = () => {
    return (
        <div className='mb-0'>
            <div className='grid grid-cols-2 md:ml-14 ml-4 md:gap-x-28 gap-y-5'>
                <div className='md:w-[650px] w-[180px] md:h-[180px]  h-[150px] bg-gradient-to-r rounded-xl from-[#F644A0] to-[#AB3E6F]'>
                    <div className='relative'>
                        <button className='md:w-[170px] w-14 h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] md:text-xl font-semibold'>Man</button>
                        <img className='md:ml-[420px] ml-[50px] md:h-[180px] h-[150px]' src={manImg} alt="" />
                    </div>
                </div>
                <div className='md:w-[500px] w-[180px] md:h-[180px] h-[150px] bg-gradient-to-r rounded-xl mr-20 from-[#03756E] to-[#20D8CD]'>
                    <div className='relative'>
                        <button className='md:w-[170px] w-16 h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] md:text-xl font-semibold'>Woman</button>
                        <img className='md:ml-[320px] ml-[50px] md:h-[180px] h-[150px]' src={womanImg} alt="" />
                    </div>
                </div>
                <div className='md:w-[500px] w-[180px] md:h-[180px] h-[150px] bg-gradient-to-r rounded-xl mr-20 from-[#03756E] to-[#20D8CD]'>
                    <div className='relative'>
                        <button className='md:w-[170px] w-16 h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] md:text-xl font-semibold'>Kids</button>
                        <img className='md:ml-[320px] ml-[50px] md:h-[180px] h-[150px]' src={kidsImg} alt="" />
                    </div>
                </div>
                <div className='md:w-[650px] w-[180px] md:h-[180px]  h-[150px] rounded-xl md:-ml-36 bg-gradient-to-r from-[#F644A0] to-[#AB3E6F]'>
                    <div className='relative'>
                        <button className='md:w-[170px] w-14 h-[35px] rounded-tr-lg rounded-bl-lg absolute bottom-0 bg-[#D9D9D9] md:text-xl font-semibold'>Shoes</button>
                        <img className='md:ml-[420px] ml-[50px] md:h-[180px] h-[150px]' src={shoeImg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;