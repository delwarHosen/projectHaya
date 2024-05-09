import React from 'react';

const Contact = () => {
    return (
        <div className='md:flex justify-center gap-14 border-8 p-8 my-10 border-gray-400'>
            <div>
                <h3 className='text-3xl font-semibold uppercase'>Sign -Up <span className='text-[#E1205E]'>newsletter</span></h3>
                <p className='mt-7'>Sign up for the latest news, offers and styles</p>
            </div>
            <div>
                <div className='flex md:mt-0 mt-10'>
                    <label className="input input-bordered flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
                        <input type="text" className=" md:w-64 w-32" placeholder="Email" />
                    </label>
                    <button className='w-40 h-12 ml-7 mt- rounded-lg border-1 text-white font-medium bg-[#E1205E]'>Subscribe</button>
                </div>
                <div className='flex mt-4'>
                    <input type="checkbox" defaultChecked className="checkbox" />
                    <p className='ml-2'>Enim quis fugiat consequat elit minim nisi eu occaecat occaecat deserunt aliquip nisi ex .</p>
                </div>

            </div>
        </div>
    );
};

export default Contact;