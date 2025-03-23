import { Link } from "react-router-dom";


const Slide = ({ image, text }) => {
    return (
        <div
            className='w-full bg-center bg-cover h-[37rem]'
            style={{
                backgroundImage: `url(${image})`,
            }}
        >
            <div className='flex items-center justify-center w-full h-full bg-[#322c3590]'>
                <div className='text-center lg:w-[800px]'>
                    <h1 className='text-3xl font-semibold text-white lg:text-5xl'>
                        {text}
                    </h1>
                </div>
            </div>
        </div>

    );
};

export default Slide;