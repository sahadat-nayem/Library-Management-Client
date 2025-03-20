import { useState } from "react";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import Rating from "react-rating";
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

  const filteredBooks = books.filter((book) =>
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredBooks.map((book) => (
          <div
            key={book._id}
            book={book}
            className="card bg-base-100 shadow-xl"
          >
            <div className="bg-black glass m-4 rounded-xl">
              <figure className="py-8">
                <img
                  className="rounded-xl w-60 h-[270px]"
                  src={book.photo}
                  alt="Shoes"
                />
              </figure>
            </div>
            <div className="flex gap-3 pl-6 mt-2">
              <p className="bg-slate-100 border text-blue-400 rounded-xl px-3 py-1">
                {" "}
                {book.category}
              </p>
            </div>
            <div className="card-body mt-[-20px]">
              <div className="border-dashed border-b pb-4">
                <h2 className="text-2xl font-bold">{book.name}</h2>
                <p className="font-semibold my-2">By : {book.authorName}</p>
                <p>{book.rating}</p>
                <p className="mb-[-20px]">
                  <Rating
                    initialRating={book.rating} // Fix: ratingValue → book.rating
                    emptySymbol={
                      <FaRegStar size={30} style={{ color: "#ccc" }} />
                    }
                    fullSymbol={
                      <MdStar size={30} style={{ color: "#f8b400" }} />
                    }
                  />
                </p>
              </div>
              <div className="mb-[-20px]">
                <Link to={`/updateBooks/${book._id}`}>
                  <button className="btn btn-info btn-outline text-white w-full">
                    Update{" "}
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="card bg-base-100 shadow-xl">
            <div className='bg-gray-900/70 m-4 rounded-xl'>
                <figure className="py-8">
                    <img src={photo} alt="Shoes" className="rounded-xl w-60 h-[270px]" />
                </figure>
            </div>
            <div className='flex gap-3 pl-6 mt-2'>
                <p className="bg-slate-100 border text-[#23BE0A] rounded-xl px-3 py-1"> {category}</p>
            </div>
            <div className="card-body mt-[-20px]">
                <div className='border-dashed border-b pb-4'>
                    <h2 className="text-2xl font-bold">{book_name}</h2>
                    <p className='font-semibold my-2'>By: {author_name}</p>
                    <p className="mb-[-20px]"><Rating
                        initialRating={ratingValue}
                        emptySymbol={<FaRegStar size={30} style={{ color: '#ccc' }} />}
                        fullSymbol={<MdStar size={30} style={{ color: '#f8b400' }} />}
                    /></p>
                </div>
                <div className="mb-[-20px]">
                    <Link to={`/updatePage/${_id}`}>
                        <button className='btn btn-accent btn-outline text-white w-full'>Update</button>
                    </Link>
                </div>
            </div>
        </div> */}
    </div>
  );
};

export default AllBooks;
