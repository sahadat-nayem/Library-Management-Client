
import { Link } from "react-router-dom";

const BookCategories = ({bookCategories}) => {

    
    

    return (
        <div>
            <div>
            <div className="card card-compact max-h-[410px] bg-base-100 rounded-none shadow-xl">
                        <figure>
                            <img
                                className='max-w-28 max-h-28 mt-5'
                                src={bookCategories.photo}
                                alt="Shoes" />
                        </figure>
                    <div className="card-body p-5">
                        <h2 className="card-title">{bookCategories.name}</h2>
                        <p>Author Name : {bookCategories.authorName}</p>
                        <p>Category : {bookCategories.category}</p>
                        <p>Quantity : {bookCategories.quantity}</p>
                        <p>{bookCategories.rating}</p>
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