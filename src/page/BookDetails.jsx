import { useState, useContext, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FaRegStar } from "react-icons/fa";
import { MdStar } from "react-icons/md";
import Rating from "react-rating";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const BookDetails = () => {
  const { user } = useContext(AuthContext);
  let bookData = useLoaderData() || {};

  console.log("📌 Book Details Data:", bookData);

  if (!bookData || !bookData._id) {
    console.error("🚨 Error: Invalid book data!", bookData);
    return (
      <h1 className="text-center text-red-500 mt-10">
        Error: Book details not found!
      </h1>
    );
  }

  const {
    _id,
    name,
    quantity,
    authorName,
    category,
    shortDescription,
    rating,
    photo,
  } = bookData;

  const [startDate, setStartDate] = useState(null);
  const [borrowDate, setBorrowDate] = useState("");
  const [isBookBorrowed, setIsBookBorrowed] = useState(false);

  useEffect(() => {
    const checkBorrowStatus = () => {
      if (!user?.email) return;

      fetch(`https://assignment-11-server-ivory-two.vercel.app/borrow/email?email=${user.email}`)
        .then((res) => res.json())
        .then((data) => {
          const isAlreadyBorrowed = data.some(
            (borrow) => borrow.bookId === _id
          );
          setIsBookBorrowed(isAlreadyBorrowed);
        })
        .catch((error) =>
          console.error("Error checking borrow status:", error)
        );
    };

    checkBorrowStatus();
  }, [user, _id]);

  const handleBorrowClick = () => {
    setBorrowDate(new Date().toLocaleDateString());
    document.getElementById("my_modal_3").showModal();
  };

  const handleBorrowBooks = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const returnDate = startDate ? startDate : "No return date selected";

    const borrowBook = {
      name,
      email,
      bookId: _id,
      bookName: name,
      authorName,
      category,
      photo,
      borrowDate,
      returnDate,
    };

    console.log("📌 Sending Borrow Data:", borrowBook);

    fetch("https://assignment-11-server-ivory-two.vercel.app/borrow", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(borrowBook),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "Book borrowed successfully!",
          });
          setIsBookBorrowed(true);
          document.getElementById("my_modal_3").close();
        }
      });
  };

  return (
    <div className="flex lg:flex-row flex-col justify-between bg-base-100 rounded-xl lg:my-12 px-5">
      <div className="rounded-xl lg:w-[500px] h-full mt-4">
        <div className="pb-12 px-8">
          <img
            className="rounded-xl mx-auto w-80 h-96"
            src={photo}
            alt="Book"
          />
        </div>
      </div>

      <div className="lg:w-[650px] px-3 mt-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-2xl mb-3">{name}</h2>
          <p>
            <Rating
              initialRating={rating}
              emptySymbol={<FaRegStar size={30} style={{ color: "#ccc" }} />}
              fullSymbol={<MdStar size={30} style={{ color: "#f8b400" }} />}
            />
          </p>
        </div>
        <h2 className="font-semibold text-lg">By: {authorName}</h2>
        <p className="flex items-center font-semibold pt-3">
          Quantity: <span className="text-lg">{quantity}</span>
        </p>
        <p className="font-semibold my-4">
          <span className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-2">
            {category}
          </span>
        </p>
        <p>
          <span className="font-bold text-lg">Description:</span>{" "}
          {shortDescription}
        </p>
        <button
          className="btn btn-info w-full mt-4"
          onClick={handleBorrowClick}
          disabled={isBookBorrowed} 
        >
          {isBookBorrowed ? "Already Borrowed" : "Borrow"}
        </button>
      </div>

      {/* Borrow Modal */}
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box text-center">
          <h3 className="font-bold text-lg">Borrow Book</h3>
          <form onSubmit={handleBorrowBooks} className="mt-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={user?.displayName || ""}
                className="input input-bordered w-full"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                defaultValue={user?.email || ""}
                className="input input-bordered w-full"
                required
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Borrow Date</span>
              </label>
              <input
                type="text"
                name="borrowDate"
                value={borrowDate}
                className="input input-bordered w-full"
                readOnly
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Return Date</span>
              </label>
              <DatePicker
                className="border-2 rounded-lg py-1 pl-3 w-full"
                selected={startDate}
                onChange={(date) => setStartDate(date.toLocaleDateString())}
                required
              />
            </div>
            <input
              type="submit"
              value="Submit"
              className="btn btn-block bg-black glass text-xl text-white font-bold mt-4"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default BookDetails;
