const Banner = () => {
    return (
        <div className="my-10 lexend">
            <div className="hero min-h-screen rounded-3xl" style={{backgroundImage: 'url("/banner.png")'}}>
                <div className="hero-content text-center text-neutral-content py-10">
                    <div className="py-[130px] lg:max-w-4xl">
                    <h1 className="mb-5 text-3xl sm:text-5xl font-bold text-white">Discover an exceptional cooking class tailored for you!</h1>
                    <p className="mb-5 text-white">Learn and Master Basic Cooking, New Dishes like Steak, Chinese, Mexican and Arabian cooking recipe and become a exceptional well world-class chef.</p>
                    <button className="btn bg-transparent text-white mx-3 rounded-3xl hover:bg-green-400 hover:text-black">Explore Now</button>
                    <button className="btn bg-transparent text-white mx-3 rounded-3xl hover:bg-green-400 hover:text-black">Our Feedback</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;