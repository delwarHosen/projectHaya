import React from 'react';
import '@smastrom/react-rating/style.css'
import { Rating } from '@smastrom/react-rating';
import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const {_id, image, name, type, rating } = product
    return (
        <div>
            <div className="w-[270px] h-72 bg-white shadow-xl rounded-lg ">
                <figure className="">
                    <img src={image} alt="Shoes" className="mx-auto h-[175px] w-44" />
                </figure>
                <div className="items-center text-center">
                    <h2 className="text-xl font-semibold text-center">{name}</h2>
                    <p className='text-black'>{type}</p>
                    <Rating className='mx-auto'
                        style={{ maxWidth: 100 }}
                        value={rating}
                        readOnly
                    />
                    <div className=''>
                        <button className="h-8  mt-3 rounded-b-lg bg-gradient-to-r from-[#005C62] to-[#00BCC8] text-white w-full"><Link to={`/detail/${_id}`} >See Details</Link></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllProduct;