import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateBooks = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState({
    name: "",
    authorName: "",
    category: "",
    rating: "",
    photo: "",
  });

  useEffect(() => {
    fetch(`https://assignment-11-server-ivory-two.vercel.app/book/${id}`)
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setBook(data);
        }
      })
      .catch((error) => console.error("Error fetching book data:", error));
  }, [id]);

  const handleUpdateBooks = (e) => {
    e.preventDefault();

    const form = e.target;
    const updatedBook = {
      name: form.name.value,
      authorName: form.authorName.value,
      category: form.category.value,
      rating: form.rating.value,
      photo: form.photo.value,
    };

    // Send the updated data to the backend
    fetch(`https://assignment-11-server-ivory-two.vercel.app/book/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Update Response:", data);
        if (data.message === "Book updated successfully") {
          Swal.fire({
            title: "Success",
            text: "Book updated successfully!",
            icon: "success",
            confirmButtonText: "Cool",
          });
          navigate("/allBooks");
        } else {
          Swal.fire({
            title: "Error",
            text: "Failed to update book!",
            icon: "error",
            confirmButtonText: "OK",
          });
        }
      })
      .catch((error) => console.error("Error updating book:", error));
  };

  return (
    <div className="bg-[#5dade21a] p-24">
      <h2 className="text-3xl font-extrabold text-center mb-8">UPDATE BOOKS</h2>
      <form onSubmit={handleUpdateBooks}>
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={book.name}
              placeholder="Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="number"
              name="rating"
              defaultValue={book.rating}
              placeholder="Rating"
              min="1"
              max="5"
              step="1"
              className="input input-bordered w-full"
              required
            />
          </div>
        </div>
        <div className="md:flex">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Author Name</span>
            </label>
            <input
              type="text"
              name="authorName"
              defaultValue={book.authorName}
              placeholder="Author Name"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control md:w-1/2 md:ml-4">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              className="select select-bordered w-full"
              name="category"
              defaultValue={book.category}
              required
            >
              <option value="" disabled>
                Select Your Category
              </option>
              <option value="Novel">Novel</option>
              <option value="Thriller">Thriller</option>
              <option value="History">History</option>
              <option value="Drama">Drama</option>
              <option value="Sci-Fi">Sci-Fi</option>
            </select>
          </div>
        </div>
        <div className="form-control mb-8">
          <label className="label">
            <span className="label-text">Books image</span>
          </label>
          <input
            type="text"
            name="photo"
            defaultValue={book.photo}
            placeholder="Enter photo URL"
            className="input input-bordered w-full"
            required
          />
        </div>
        <button className="bg-[#5dade286] w-full py-3 font-semibold">
          Update Book
        </button>
      </form>
    </div>
  );
};

export default UpdateBooks;
