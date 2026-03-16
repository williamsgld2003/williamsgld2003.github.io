function About({ isOpen, onClose }) {
    const [shouldRender, setShouldRender] = React.useState(false);

    React.useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            document.body.style.overflow = 'hidden';
        } else {
            const timer = setTimeout(() => setShouldRender(false), 500); // Wait for animation
            document.body.style.overflow = 'unset';
            return () => clearTimeout(timer);
        }
    }, [isOpen]);

    if (!shouldRender) return null;

    return (
        <div className="fixed inset-0 z-50 flex justify-end" data-name="about-overlay">
            {/* Backdrop - clicking closes the overlay */}
            <div 
                className={`absolute inset-0 bg-black/5 transition-opacity duration-500 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}
                onClick={onClose}
            ></div>

            {/* Content Box - Right Half */}
            <div 
                className={`relative w-full md:w-1/2 h-full bg-white shadow-xl overflow-y-auto transform transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside content
            >
                <div className="p-6 md:p-12 lg:p-16 min-h-full">
                    <button 
                        onClick={onClose}
                        className="absolute top-6 right-6 md:top-12 md:right-12 p-2 hover:bg-gray-100 rounded-full transition-colors"
                        aria-label="Close"
                    >
                        <div className="icon-x text-xl text-gray-500"></div>
                    </button>

                    <div className="max-w-xl mx-auto mt-12 md:mt-24 fade-in">
                        <div className="space-y-6 text-xs leading-loose text-[var(--text-color)] font-sans-utility">
                            <p>
                                My introduction to photography stems from my family’s deep roots in the medium. My grandfather worked at Kodak from the age of nineteen, and my parents often recount how they first met while working together in a photo lab darkroom. In many ways, it could be said that my passion for photography is something I inherited through my family.
                            </p>
                            <p>
                                I use photography as a means of understanding. As a result, the conception of my ideas often stems from subjects that I hold a personal interest in or that carry significance within my own life. Across several projects, I have documented my family, using the medium to explore the personal connections I share with them and the stories embedded within my ancestry. Through this work, recurring themes emerge surrounding the deconstruction of time, the shifting temporal nature of memory, and the way life transforms as it moves through time.
                            </p>
                            <p>
                                Photography also functions as a way for me to comprehend and interpret the world around me. Through the use of recurring thematic qualities, I create work that explores the spiritual presence of my subjects and the deeper connections that exist between place, memory, and identity.
                            </p>
                        </div>
                        


                        <div className="mt-16 mb-12">
                            <img 
                                src="https://app.trickle.so/storage/public/images/usr_1cb8c89340000001/a70d0d27-493a-4c47-927b-e5d6aaa64078.jpeg" 
                                alt="Portrait" 
                                className="w-full h-auto grayscale opacity-90"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
