import React from 'react';

const AddBooks = () => {
    return (
        <div className="bg-[#5dade21a] p-24">
            <h2 className="text-3xl font-extrabold text-center mb-8">ADD BOOKS</h2>
            <p className="mb-8 md:px-44 text-center">Compare & explore our plans below. Once you find the perfect fit select Get Started to get your cloud catalog off the ground.</p>
            <form>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" required />
                    </div>

                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Quantity" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Author Name</span>
                        </label>
                        <input type="text" name="authorName" placeholder="Author Name" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Category</span>
                        </label>
                        <select className="select select-bordered w-full">
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
                <div className="md:flex">
                    <div className="form-control md:w-1/2">
                        <label className="label">
                            <span className="label-text">Short Description</span>
                        </label>
                        <input type="text" name="shortDescription" placeholder="Short Description" className="input input-bordered w-full" required />
                    </div>
                    <div className="form-control md:w-1/2 md:ml-4">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="number" name="rating" placeholder="Rating" min="1" max="5" step="1" className="input input-bordered w-full" required />
                    </div>
                </div>
                <div className="form-control mb-8">
                        <label className="label">
                            <span className="label-text">Country image</span>
                        </label>
                        <input type="text" name="photo" placeholder="Enter photo URL" className="input input-bordered w-full" required />
                    </div>
                <button className="bg-[#5dade286] w-full py-3 font-semibold">Add Books</button>
            </form>
        </div>
    );
};

export default AddBooks;