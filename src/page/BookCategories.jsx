import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import Rating from "react-rating";
import { Link } from "react-router-dom";

const BookCategories = ({ bookCategories }) => {
  return (
    <div>
      <div className="card bg-base-100 shadow-xl">
        <div className="bg-black glass m-4 rounded-xl">
          <figure className="py-8">
            <img
              src={bookCategories.photo}
              alt="Shoes"
              className="rounded-xl w-60 h-[270px]"
            />
          </figure>
        </div>
        <div className="card-body mt-[-20px]">
          <div className="border-dashed border-b pb-4">
            <h2 className="text-xl font-bold">{bookCategories.name}</h2>
            <p className="font-semibold mt-2">
              By: {bookCategories.authorName}
            </p>
            <p className="font-semibold mt-2"> {bookCategories.category}</p>
            <p className="font-semibold mt-2"> {bookCategories.quantity}</p>
          </div>
          <div className="flex mb-[-20px]">
            <p>
              <Rating
                initialRating={bookCategories.rating}
                emptySymbol={<FaRegStar size={30} style={{ color: "#ccc" }} />}
                fullSymbol={<MdStar size={30} style={{ color: "#f8b400" }} />}
              />
            </p>
            <Link to={`/book/${bookCategories._id}`}>
              <button className="btn btn-info btn-outline text-white">
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCategories;
