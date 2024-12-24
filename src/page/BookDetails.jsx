import { useLoaderData } from "react-router-dom";


const BookDetails = () => {

    const {Name, Quantity, AuthorName, Category,ShortDescription, Rating, BookImage} = useLoaderData();
    

    return (
        <div className="card bg-base-100 max-w-[760px] shadow-xl mx-auto">
            <figure className="px-10 pt-10">
                <img
                src={BookImage}
                className="rounded-xl max-w-96 max-h-96" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{Name}</h2>
                <p>Author Name : {AuthorName}</p>
                <p>Category : {Category}</p>
                <p>Quantity : {Quantity}</p>
                <p>{Rating}</p>
                <p>Short Description : {ShortDescription}</p>
                <div className="card-actions">
                <button className="btn btn-info md:w-96" onClick={()=>document.getElementById('my_modal_3').showModal()}>Borrow </button>
                <dialog id="my_modal_3" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                        </form>
                        <h3 className="font-bold text-lg">Fill up the form</h3>
                        <div className="form-control md:w-96">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={Name} placeholder="Name" className="input input-bordered w-full" required />
                        </div>
                        <div className="form-control md:w-96">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered w-full" required />
                        </div>
                    </div>
                </dialog>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;