import React from 'react';

const SectionTitle = ({ subHeading, heading, paragraph }) => {
    return (
        <div className='text-center w-3/6 mx-auto mt-6 '>
            <p className='font-medium'>---{subHeading}---</p>
            <h2 className='text-3xl font-semibold'>{heading}</h2>
            <p className='font-medium'>{paragraph}</p>
        </div>
    );
};

export default SectionTitle;