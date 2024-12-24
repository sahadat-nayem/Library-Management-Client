// import { useLoaderData } from 'react-router-dom';

import { Link } from "react-router-dom";

const BookCategories = ({bookCategories}) => {

    // const booksCategories = useLoaderData();
    
    const { Name, AuthorName, Category, Quantity, Rating, BookImage } = bookCategories;
    

    return (
        <div>
            <div>
            <div className="card card-compact max-h-[420px] bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className='max-w-28 mt-5'
                                src={BookImage}
                                alt="Shoes" />
                        </figure>
                    <div className="card-body p-5">
                        <h2 className="card-title">{Name}</h2>
                        <p>Author Name : {AuthorName}</p>
                        <p>Category : {Category}</p>
                        <p>Quantity : {Quantity}</p>
                        <p>{Rating}</p>
                        <div className="rating">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <div className="card-actions justify-end items-center mt-4">
                            <Link to={`/book/${bookCategories._id}`}>
                                <button className="btn btn-outline btn-info md:w-56">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>   
            </div>
        </div>
    );
};

export default BookCategories;