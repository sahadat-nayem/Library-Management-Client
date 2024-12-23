// import { useEffect, useState } from "react";
// import AllBooks from "./AllBooks";


// const BookCategories = () => {

//     const [books, setBooks] = useState([]);

//     // useEffect(() => {
//     //     fetch('http://localhost:5000/books')
//     //         .then(res => res.json())
//     //         .then(data => {
//     //             setBooks(data);
//     //         })
//     // }, [])

//     return (
//         <div>
//             <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
//                 {
//                     books.map(book => <AllBooks key={book._id} book={book}></AllBooks>)
//                 }
//             </div>
//         </div>
//     );
// };

// export default BookCategories;