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
            <div>
            <h1 className='text-6xl text-center my-8 font-bold'>Latest Book’s</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 px-5 gap-4 mb-24'>
                {
                    booksCategories.map(bookCategories =><BookCategories bookCategories={bookCategories} key={bookCategories._id}></BookCategories>)
                }
            </div>
            </div>
            <Books></Books>
            <Collection></Collection>
        </div>
    );
};

export default Home;