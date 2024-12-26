import { RiDeleteBin2Fill } from "react-icons/ri";
import { useLoaderData } from 'react-router-dom';

const BorrowedBooks = () => {

    const loadedBooks = useLoaderData();
    // const [borrowedBooks, setBorrowedBooks] = useState(loadedBooks);

    return (
        <div>
            <h2 className='text-3xl text-center'>Borrowed Books : {loadedBooks.length}</h2>
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
                        loadedBooks.map(book => <tr key={book._id}>
                    <th>1</th>
                    <td>{book.name}</td>
                    <td>{book.email}</td>
                    <td className="text-xl hover:text-red-500"><RiDeleteBin2Fill /></td>
                </tr>)
                    }
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default BorrowedBooks;