import { useState } from "react";
import {  useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const BookDetails = () => {

    const {_id, name, quantity, authorName, category,shortDescription, rating, photo} = useLoaderData();

    // BorrowedBooks page

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);

    const handleBorrowBooks = (e) => {
            e.preventDefault();
    
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const borrowBook = {name, email};
            console.log(borrowBook);
            
    
            // send data to the server
            fetch('http://localhost:5000/borrow', {
                method: 'POST',
                headers: {
                    'content-type' : 'application/json'
                },
                body: JSON.stringify(borrowBook)
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                if(data.insertedId){
                    setIsSubmitDisabled(true);
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 3000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                          toast.onmouseenter = Swal.stopTimer;
                          toast.onmouseleave = Swal.resumeTimer;
                        }
                      });
                      Toast.fire({
                        icon: "success",
                        title: "Book borrow added successfully"
                      });
                }
            })
            
            
        }
    

    return (
        <div className="card bg-base-100 max-w-[760px] shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img
                src={photo}
                className="rounded-xl max-w-96 max-h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>Author Name : {authorName}</p>
                <p>Category : {category}</p>
                <p>Quantity : {quantity}</p>
                <p>{rating}</p>
                <p>Short Description : {shortDescription}</p>
                <div className="card-actions">
                <button className="btn btn-info md:w-96" onClick={()=>document.getElementById('my_modal_3').showModal()}>Borrow </button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <form onSubmit={handleBorrowBooks}>
                            <h3 className="font-bold text-lg">Fill up the form</h3>
                            {/* <figure className="px-10 pt-10">
                                <img
                                src={BookImage}
                                className="rounded-xl max-w-96 max-h-96" />
                            </figure> */}
                            <div className="form-control md:w-96">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name="name" defaultValue={name} placeholder="Name" className="input input-bordered w-full" required />
                            </div>
                            <div className="form-control md:w-96">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                            </div>
                                <input type="submit" value="Submit" className="btn btn-info mt-3" disabled={isSubmitDisabled} />
                        </form>
                    </div>
                </dialog>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;