

const Banner = () => {
    return (
        <>
            <div className="carousel w-full max-h-[517px]">
            <div id="slide1" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/VSWntVs/How-does-a-library-management-system-work-2-V1.png"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">❮</a>
                <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/myd3sT9/Key-Features-of-School-Library-Management-Software-that-you-need-to-know-2.jpg"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">❮</a>
                <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/N1Yy4Xv/DALL-E-2024-12-22-00-26-36-A-detailed-illustration-of-a-modern-Library-Management-System-concept-The.webp"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">❮</a>
                <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img
                src="https://i.ibb.co.com/gVLVBHP/31705.jpg"
                className="w-full" />
                <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">❮</a>
                <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;