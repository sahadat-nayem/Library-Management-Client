import { useLoaderData } from "react-router-dom";
import Books from "../extraSection/Books";
import Collection from "../extraSection/Collection";
import BookCategories from "../page/BookCategories";
import Banner from "./Banner";


const Home = () => {

    const booksCategories = useLoaderData();

    return (
        <div>
            <Banner></Banner>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-24'>
                {
                    booksCategories.map(bookCategories =><BookCategories bookCategories={bookCategories} key={bookCategories._id}></BookCategories>)
                }
            </div>
            <Books></Books>
            <Collection></Collection>
        </div>
    );
};

export default Home;