import { useState, useEffect, useContext } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../provider/AuthProvider";

const BorrowedBooks = () => {
  const { user } = useContext(AuthContext);
  const loadedBooks = useLoaderData();
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  useEffect(() => {
    console.log("Loaded Books from API:", loadedBooks);
    console.log("Logged-in User:", user);

    if (Array.isArray(loadedBooks)) {
      const userBooks = loadedBooks.filter((book) => book.email === user?.email);
      console.log("Filtered Books for User:", userBooks);
      setBorrowedBooks(userBooks);
    }
  }, [loadedBooks, user]);

  const handleBorrowDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to return it?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Return it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/borrow/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Returned!",
                text: "Your book has been returned successfully.",
                icon: "success",
              });

              setBorrowedBooks(borrowedBooks.filter((book) => book._id !== id));
            }
          })
          .catch((error) => {
            Swal.fire({
              title: "Error!",
              text: "Something went wrong while returning the book.",
              icon: "error",
            });
            console.error("Error deleting book:", error);
          });
      }
    });
  };

  return (
    <div className="grid gap-8 mb-12">
      {borrowedBooks.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No borrowed books found.</p>
      ) : (
        borrowedBooks.map((book) => (
          <div key={book._id} className="card bg-base-100 shadow-xl">
            <div className="bg-black glass m-4 rounded-xl">
              <figure className="py-8">
                <img
                  src={book.photo}
                  alt="Book Cover"
                  className="rounded-xl w-60 h-[270px]"
                />
              </figure>
            </div>
            <div className="flex gap-8 pl-6 mt-2">
              <h2 className="text-2xl font-bold">{book.bookName}</h2>
              <p className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-1">
                {book.category}
              </p>
            </div>
            <div className="card-body mt-[-30px]">
              <div className="pb-3">
                <p className="font-semibold mt-2">Author: {book.authorName}</p>
                <p className="font-semibold mt-2">Borrowed Date: {book.borrowDate}</p>
                <p className="font-semibold mt-2">Return Date: {book.returnDate}</p>
              </div>
              <button
                onClick={() => handleBorrowDelete(book._id)}
                className="btn btn-info btn-outline text-white text-lg w-full"
              >
                Return
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default BorrowedBooks;
