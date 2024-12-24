import { Link, useLoaderData } from "react-router-dom";


const AllBooks = () => {

    const books = useLoaderData();

    if (!books) return <p>No book data available</p>;
    // const {Name, Quantity, AuthorName, Category, Rating, BookImage } = books;
    return (
        <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {
                    books.map(book => <div key={book._id} book={book} className="card card-compact bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className='max-w-28 mt-5'
                                src={book.BookImage}
                                alt="Shoes" />
                        </figure>
                    <div className="card-body p-5">
                        <h2 className="card-title">{book.Name}</h2>
                        <p>Author Name : {book.AuthorName}</p>
                        <p>Category : {book.Category}</p>
                        <p>Quantity : {book.Quantity}</p>
                        <p>{book.Rating}</p>
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