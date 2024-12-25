import React from 'react';
import { useLoaderData } from 'react-router-dom';

const BorrowedBooks = () => {

    const borrowedBooks = useLoaderData();

    return (
        <div>
            <h2 className='text-3xl text-center'>Borrowed Books : {borrowedBooks.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Favorite Color</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                <tr>
                    <th>1</th>
                    <td>Cy Ganderton</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;