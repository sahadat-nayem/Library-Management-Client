import React from 'react';
import { Link } from 'react-router-dom';

const Collection = () => {
    return (
        <div className='mt-10 text-center'>
            <h2 className='text-5xl font-bold mb-6'>Create & Share Your Collection</h2>
            <p className='text-xl text-gray-500 md:mx-40 mb-6'>Our library management service caters to libraries, schools, organizations, and home catalogs. Our online software lets you create multiple collections, catalog books, board games, movies, music, and video games, create tags, leave notes, import/export, share your collections and much more. We offer two different subscription options to best fit your needs. Libib is the best place for cataloging and managing your media available online. Now which version is the best for you?</p>
            <Link to="/livraryPlans" className="bg-[#5dade286] rounded-full py-3 px-6 font-semibold">Compare Plans</Link>
        </div>
    );
};

export default Collection;