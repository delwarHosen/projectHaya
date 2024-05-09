import { useEffect, useState } from 'react';
// import '../Reviews.css'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

import './Reviews.css'
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('reviews.json')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div className="reviewBg bg-fixed md:pt-28">
            <Swiper
                cssMode={true}
                navigation={true}
                pagination={false}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className="mySwiper"
            >
                <div className=' '>
                    {
                        reviews.map(review => <SwiperSlide className='px-16 mt-[50px]' key={review._id}>
                            <h3 className='md:text-4xl text-xl font-bold text-white text-center'>Customers Reviews</h3>
                            <Rating className='mx-auto my-3'
                                style={{ maxWidth: 100 }}
                                value={review.rating}
                                readOnly                    
                            />
                            
                            <p className='text-white md:text-[16px] text-[10px]'>{review.details}</p>
                            <div className='flex justify-center mt-4'>
                                <img className='md:h-14 h-10 rounded-full' src={review.image} alt="" />
                                <div className='ml-3 text-white'>
                                    <p className='md:text-lg text-xs font-semibold'>{review.name}</p>
                                    <p className='md:text-xs  text-[10px]'>{review.designation}</p>
                                </div>
                            </div>

                        </SwiperSlide>)
                    }
                </div>
            </Swiper>


        </div>
    );
};

export default Reviews;