import { useState } from "react";
import { RiDeleteBin2Fill } from "react-icons/ri";
import { useLoaderData } from 'react-router-dom';
import Swal from "sweetalert2";

const BorrowedBooks = () => {

    const loadedBooks = useLoaderData();
    const [borrowedBooks, setBorrowedBooks] = useState(loadedBooks);

    const handleBorrowDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

            //   Delete from the database
            fetch(`http://localhost:5000/borrow/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data =>{
                if(data.deletedCount){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });

                      const remainingUsers = borrowedBooks.filter(book => book._id !== id);
                      setBorrowedBooks(remainingUsers);

                      const submitButton = document.querySelector("input[type='submit']");
                            if (submitButton) {
                                submitButton.disabled = false;
                            }
                }
                
            })

            }
          });
        };

    return (
        <div>
            <h2 className='text-3xl text-center font-bold'>Borrowed Books : {borrowedBooks.length}</h2>
            <div className="overflow-x-auto">
            <table className="table">
                {/* head */}
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {/* row 1 */}
                    {
                        borrowedBooks.map(book => <tr key={book._id}>
                    <th>1</th>
                    <td>{book.name}</td>
                    <td>{book.email}</td>
                    <td className="text-xl hover:text-red-500" onClick={() => handleBorrowDelete(book._id)}><RiDeleteBin2Fill /></td>
                </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;