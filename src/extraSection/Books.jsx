

const Books = () => {
    return (
        <div>
            <div className="md:flex gap-5 justify-center max-w-6xl mx-auto mt-10">
                <div>
                    <h2 className="text-5xl font-bold">Automatic Data for Books,Board Games, Movies, Music and Video Games</h2><br />
                    <p className="text-3xl text-gray-400">Just scan your ISBN/UPC barcode using a physical scanner or our free mobile apps and we take care of the rest.</p>
                </div>
                <img className="size-80 rounded-xl" src="https://i.ibb.co.com/R4KmZgf/2560.webp" alt="" />
            </div>
            <div className="divider"></div>
            <div className="md:flex gap-5 justify-center max-w-6xl mx-auto mt-10">
                <img className="size-80" src="https://i.ibb.co.com/yXQm3jT/cloud.jpg" alt="" />
                <div>
                    <h2 className="text-5xl font-bold">Cloud Sync keeps your collections updated across multiple devices.</h2><br />
                    <p className="text-3xl text-gray-400">Access your collections from anywhere on virtually any device.</p>
                </div>
            </div>
            <div className="divider"></div>
            <div className="md:flex gap-5 justify-center max-w-6xl mx-auto mt-10">
                <div>
                    <h2 className="text-5xl font-bold">Create up to 100 mixed media collections.</h2><br />
                    <p className="text-3xl text-gray-400">Mix and match media types freely. We’re flexible on purpose so you can organize your collections to fit your needs. Books, board games, movies, music, and video games - keep them together or separate.</p>
                </div>
                <img className="size-80 rounded-xl" src="https://i.ibb.co.com/vHtM83M/c033dddf-e9a7-4244-8ae1-6e72d0eca80b-1920x1080.jpg" alt="" />
            </div>
            <div className="divider"></div>
            <div className="md:flex gap-5 justify-center max-w-6xl mx-auto mt-10">
                <img className="size-80" src="https://i.ibb.co.com/QJLcTgb/images-4.jpg" alt="" />
                <div>
                    <h2 className="text-5xl font-bold">Libib Pro Users Can Access Even More Power.</h2><br />
                    <p className="text-3xl text-gray-400">Need lending, patron management, custom fields, barcode management, single click restorations, or an interactive online library? Libib Pro brings an abundance of additional enhancements to the table.</p>
                </div>
            </div>
        </div>
    );
};

export default Books;