import React from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import Products from '../Products/Products';
import HotProduct from '../../Shared/AllProduct/HotProduct/HotProduct';
import Reviews from '../Reviews/Reviews';
import LatestBlogProduct from '../LatestBlogProduct/LatestBlogProduct';
import Contact from '../Contact/Contact';

const Home = () => {
    return (
            <div className='md:max-w-screen-xl mx-auto bg-white'>
                <div className='bg-white'>
                    <Banner></Banner>
                    <Category></Category>
                    <Products></Products>
                    <HotProduct></HotProduct>
                    <Reviews></Reviews>
                    <LatestBlogProduct></LatestBlogProduct>
                    <Contact></Contact>
                </div>
            </div>
    );
};

export default Home;