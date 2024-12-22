import React from 'react';
import { Link } from 'react-router-dom';

const LibraryPlans = () => {
    return (
        <div className='mt-10 text-center'>
            <h2 className='text-5xl font-bold mb-6'>Library Plans & Pricing</h2>
            <p className='text-xl text-gray-500 md:mx-40'>Compare & explore our plans below. Once you find the perfect fit select Get Started to get your cloud catalog off the ground.</p>
            <div className='px-20 md:flex gap-x-5 mt-10'>
            <div  className="md:w-96 w-64 rounded-t-[40px] rounded-br-[40px] border-l-4 border-b-4 border-[#5dade286] shadow-2xl"data-aos="zoom-in-right">
                <h2 className='text-xl md:text-2xl font-bold py-6 text-center'>Basic</h2>
                    <figure>
                        <img
                        className='max-h-[220px]'
                        src="https://i.ibb.co.com/4M2Kp9R/students-learning-foreign-language-with-vocabulary-74855-11070.jpg"
                        alt="Shoes" />
                    </figure>
                    <div className="card-body">
                        <p>No credit card required, no advertisements, and we promise to not sell/share your data. We wish more fine print was like this.</p>
                    </div>
            </div>
            <div className="md:w-96 w-64 rounded-t-[40px] rounded-b-[40px] border-l-4 border-r-4 border-[#5dade286] shadow-2xl" data-aos="zoom-in-down">
                <h2 className=' text-xl md:text-2xl font-bold py-6 text-center'>Pro</h2>
                <figure>
                    <img
                    className='max-h-[220px] mx-auto'
                    src="https://i.ibb.co.com/S7wLscH/hand-drawn-glossary-illustration-52683-111782.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>*Add $2/month or $24/year for up to 25 additional library managers. No additional costs or fees. Price in United States Dollars (USD).</p>
                </div>
            </div>
            <div className="md:w-96 w-64 rounded-t-[40px] rounded-bl-[40px] border-r-4 border-b-4 border-[#5dade286] shadow-2xl"data-aos="zoom-in-left">
                <h2 className=' text-lg md:text-2xl font-bold py-6 text-center'>Ultimate
                </h2>
                <figure>
                    <img
                    className='max-h-[220px] mx-auto'
                    src="https://i.ibb.co.com/qjj4K3z/dictionary-concept-illustration-114360-22510.jpg"
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <p>*Includes 50 managers. Blocks of 50 managers & 100 collections can be added for an additional $900 each. Price in United States Dollars (USD).</p>
                </div>
            </div>
        </div>
        <div className=' items-center justify-center py-10'>
            <h2 className='text-3xl font-bold mb-5'>Want to see more?</h2>
            <Link to="/tutorials" className="bg-[#5dade286] rounded-full py-3 px-6 font-semibold">Demo</Link>
        </div>
        </div>
    );
};

export default LibraryPlans;