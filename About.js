function Gallery() {
    try {
        const [currentIndex, setCurrentIndex] = React.useState(0);
        const [isVisible, setIsVisible] = React.useState(true);

        React.useEffect(() => {
            const intervalId = setInterval(() => {
                // Start fade out
                setIsVisible(false);
                
                // Wait for fade out, then swap image and fade in
                setTimeout(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % PORTFOLIO_DATA.length);
                    setIsVisible(true);
                }, 800); // Match this with the CSS transition duration
                
            }, 6000); // Change image every 6 seconds

            return () => clearInterval(intervalId);
        }, []);

        const currentPhoto = PORTFOLIO_DATA[currentIndex];

        return (
            <section className="w-full h-screen flex flex-col justify-center items-center px-6 md:px-12 fade-in" data-name="gallery">
                <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                    <img 
                        src={currentPhoto.url} 
                        alt="Portfolio Slide"
                        className={`max-h-[85vh] max-w-full object-contain grayscale transition-opacity duration-[800ms] ease-in-out ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                    />
                </div>
            </section>
        );
    } catch (error) {
        console.error('Gallery component error:', error);
        return <div className="p-12">Error loading gallery.</div>;
    }
}