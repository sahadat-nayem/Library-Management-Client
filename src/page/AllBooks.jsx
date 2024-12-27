import { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";


const AllBooks = () => {

    const books = useLoaderData();
    const navigate = useNavigate();

    if (!books) return <p>No book data available</p>;

    const searchParam = new URLSearchParams(location.search).get("search") || "";
    const [search, setSearch] = useState(searchParam);
  
    const handleSearch = (e) => {
      const newSearch = e.target.value.toLowerCase();
      setSearch(newSearch);
  
      navigate(`?search=${newSearch}`);
    };
  
    const filteredBooks = books.filter(
      (book) =>
        book.name.toLowerCase().includes(search) 
    );

    return (
        <div>
            <div className="justify-center text-center mt-5 mb-10">
                <input
                value={search}
                onChange={handleSearch}
                type="text"
                placeholder="Search your book name"
                className="input input-bordered input-primary w-full max-w-2xl"
                />
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    filteredBooks.map(book => <div key={book._id} book={book} className="card card-compact bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className='max-w-28 max-h-40 mt-5'
                                src={book.photo}
                                alt="Shoes" />
                        </figure>
                    <div className="card-body p-5">
                        <h2 className="card-title">{book.name}</h2>
                        <p>Author Name : {book.authorName}</p>
                        <p>Category : {book.category}</p>
                        <p>{book.rating}</p>
                        <div className="card-actions justify-end items-center mt-4">
                            <Link to={`/updateBooks/${book._id}`}>
                                <button className="btn btn-outline btn-info md:w-56">Update </button>
                            </Link>
                        </div>
                    </div>
                </div>)
                }    
            </div>
        </div>
    );
};

export default AllBooks;