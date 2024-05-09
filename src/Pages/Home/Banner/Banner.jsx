import React from 'react';
import img1 from '../../../assets/banner/banner1.png'
import img2 from '../../../assets/banner/banner2.png'
import img3 from '../../../assets/banner/banner3.png'
import img4 from '../../../assets/banner/banner4.png'
import img5 from '../../../assets/banner/banner5.png'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';



const Banner = () => {
    return (
        <div className='pt-32 mb-5'>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='relative'>
                        <div className='md:w-2/6 md:my-16 absolute md:ml-14 md:pt-14 ml-4'>
                            <h3 className='md:text-3xl mt-5 text-xl text-[#116899]'>Up to 60% off</h3>
                            <h2 className='md:text-5xl text-black text-2xl font-bold md:mt-3 w-[400px]'>Fashion <br />collection winter Sale</h2>
                            <button className='w-[120px] h-[40px] rounded-lg md:mt-5 mt-3 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
                        </div>
                        <img src={img1} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='md:w-2/6 md:my-16 absolute md:ml-14 md:pt-14 ml-4'>
                            <h3 className='md:text-3xl mt-5 text-xl text-[#116899]'>Up to 60% off</h3>
                            <h2 className='md:text-5xl text-2xl font-bold md:mt-3 w-[400px]'>Fashion <br />collection winter Sale</h2>
                            <button className='w-[120px] h-[40px] rounded-lg md:mt-5 mt-3 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
                        </div>
                        <img src={img3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='md:w-2/6 md:my-16 absolute md:ml-14 md:pt-14 ml-4'>
                            <h3 className='md:text-3xl mt-5 text-xl text-[#116899]'>Up to 60% off</h3>
                            <h2 className='md:text-5xl text-2xl font-bold md:mt-3 w-[400px]'>Fashion <br />collection winter Sale</h2>
                            <button className='w-[120px] h-[40px] rounded-lg md:mt-5 mt-3 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
                        </div>
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='md:w-2/6 md:my-16 absolute md:ml-14 md:pt-14 ml-4'>
                            <h3 className='md:text-3xl mt-5 text-xl text-[#116899]'>Up to 60% off</h3>
                            <h2 className='md:text-5xl text-2xl font-bold md:mt-3 w-[400px]'>Fashion <br />collection winter Sale</h2>
                            <button className='w-[120px] h-[40px] rounded-lg md:mt-5 mt-3 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
                        </div>
                        <img src={img5} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='relative'>
                        <div className='md:w-2/6 md:my-16 absolute md:ml-14 md:pt-14 ml-4'>
                            <h3 className='md:text-3xl mt-5 text-xl text-[#116899]'>Up to 60% off</h3>
                            <h2 className='md:text-5xl text-2xl font-bold md:mt-3 w-[400px]'>Fashion <br />collection winter Sale</h2>
                            <button className='w-[120px] h-[40px] rounded-lg md:mt-5 mt-3 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
                        </div>
                        <img src={img4} alt="" />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;


// <div className='w-2/6 my-16'>
//     <h3 className='text-3xl text-[#116899]'>Up to 60% off</h3>
//     <h2 className='text-4xl font-bold mt-3 w-[320px]'>Fashion <br />collection winter Sale</h2>
//     <button className='w-[120px] h-[40px] rounded-lg mt-5 text-white font-semibold bg-gradient-to-r from-[#005C62] to-[#00BCC8]'>Shop now</button>
// </div>