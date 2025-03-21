import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const BorrowedBooks = () => {
  const loadedBooks = useLoaderData();
  const [borrowedBooks, setBorrowedBooks] = useState(loadedBooks);

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
        // Delete from the database
        fetch(`http://localhost:5000/borrow/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Return!",
                text: "Your book has been returned successfully.",
                icon: "success",
              });

              // Update state after deletion
              const remainingBooks = borrowedBooks.filter(
                (book) => book._id !== id
              );
              setBorrowedBooks(remainingBooks);
            }
          });
      }
    });
  };

  return (
    <div className="grid gap-8 mb-12">
      {borrowedBooks.map((book) => (
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
            <h2 className="text-2xl font-bold">{book.name}</h2>
            <p className="bg-slate-100 border text-blue-500 rounded-xl px-3 py-1">
              {book.category}
            </p>
          </div>
          <div className="card-body mt-[-30px]">
            <div className="pb-3">
              <p className="font-semibold mt-2">
                Borrowed Date: {book.borrowDate}
              </p>
              <p className="font-semibold mt-2">
                Return Date: {book.returnDate}
              </p>
            </div>
            <button
              onClick={() => handleBorrowDelete(book._id)}
              className="btn btn-info btn-outline text-white text-lg w-full"
            >
              Return
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BorrowedBooks;
