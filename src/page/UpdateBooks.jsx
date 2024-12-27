import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateBooks = () => {

    const updateBook = useLoaderData();
    const {_id, name, authorName, category, rating, photo } = updateBook;

    const handleUpdateBooks = e => {
            e.preventDefault();
    
            const form = e.target;
            const name = form.name.value;
            const authorName = form.authorName.value;
            const category = form.category.value;
            const rating = form.rating.value;
            const photo = form.photo.value;
            const newBook = {name, authorName, category, rating, photo}
    
            // send data to the server
            fetch(`http://localhost:5000/book/${_id}`, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                  },
                  
                body: JSON.stringify(newBook)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.modifiedCount>0){
                    Swal.fire({
                        title: 'Success',
                        text: 'Book updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                      })
                }
            })
            
            
        }

    return (
        <div className="bg-[#5dade21a] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-8">UPDATE BOOKS</h2>
            <p className="mb-8 md:px-44 text-center">Compare & explore our plans below. Once you find the perfect fit select Get Started to get your cloud catalog off the ground.</p>
            <form onSubmit={handleUpdateBooks}>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" defaultValue={rating} placeholder="Rating" min="1" max="5" step="1" className="input input-bordered w-full" required />
                    </div>  
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="authorName" defaultValue={authorName} placeholder="Author Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full" defaultValue={category} name="category" required>
                            <option disabled selected>Select Your Category</option>
                            <option>e.g.</option>
                            <option>Novel</option>
                            <option>Thriller</option>
                            <option>History</option>
                            <option>Drama</option>
                            <option>Sci-Fi</option>
                        </select>
                    </div>
                </div>
                <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Books image</span>
                        </label>
                        <input type="text" name="photo" defaultValue={photo} placeholder="Enter photo URL" className="input input-bordered w-full" required />
                    </div>
                <button className="bg-[#5dade286] w-full py-3 font-semibold">Update Books</button>
            </form>
        </div>
    );
};

export default UpdateBooks;