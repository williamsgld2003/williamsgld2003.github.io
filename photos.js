function Untitled() {
    const images = [
        {
            url: "https://app.trickle.so/storage/public/images/usr_1cb8c89340000001/0eaeeb79-4966-4552-85f6-fcac2ac04423.jpeg",
            title: "Untitled 2",
            className: "w-[60%] ml-auto", // Reduced from 75%
        },
        {
            url: "https://app.trickle.so/storage/public/images/usr_1cb8c89340000001/f4ec14e6-c8ff-43d5-a59b-714b596b631f.jpeg",
            title: "Untitled 1",
            className: "w-[70%] mr-auto", // Reduced from 85%
        }
    ];

    return (
        <section className="w-full min-h-screen flex flex-col items-center pt-24 md:pt-32 px-6 md:px-12 fade-in pb-24" data-name="untitled">
            <div className="w-full max-w-6xl">
                <h1 className="text-[10px] uppercase tracking-widest font-sans-utility text-gray-900 mb-12 text-center md:text-left">
                    Untitled 2023-
                </h1>

                <div className="flex flex-col gap-16 md:gap-40 w-full">
                    {images.map((img, index) => (
                        <div key={index} className="w-full">
                            <img 
                                src={img.url} 
                                alt={img.title}
                                className={`h-auto object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out block ${img.className}`}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}