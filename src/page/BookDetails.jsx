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
                <button className="btn btn-info md:w-96">Borrow </button>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;