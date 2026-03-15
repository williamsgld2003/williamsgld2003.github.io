function Header({ currentView, setView }) {
    return (
        <header className="fixed top-0 left-0 w-full md:w-64 h-auto md:h-screen p-6 md:p-12 flex flex-col justify-start z-50 bg-[var(--bg-color)] md:bg-transparent" data-name="sidebar">
            <div className="mb-6 md:mb-12">
                <h1 className="text-xs tracking-[0.2em] leading-relaxed uppercase font-sans-utility font-normal text-gray-900">
                    <a 
                        href="#"
                        onClick={(e) => { e.preventDefault(); setView('work'); }}
                        className="block hover:text-[var(--muted-color)] transition-colors duration-300"
                    >
                        <span className="block">Gabriel</span>
                        <span className="block">Williams</span>
                    </a>
                </h1>
            </div>
            
            <nav className="flex flex-col gap-2">
                <span 
                    className={`text-[10px] text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200 font-sans-utility font-light ${currentView === 'work' ? 'text-gray-900' : ''}`}
                    onClick={() => setView('work')}
                >
                    Index
                </span>
                <span 
                    className={`text-[10px] text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200 font-sans-utility font-light ${currentView === 'about' ? 'text-gray-900' : ''}`}
                    onClick={() => setView('about')}
                >
                    Information
                </span>
                <span 
                    className={`text-[10px] text-gray-500 hover:text-gray-900 cursor-pointer transition-colors duration-200 font-sans-utility font-light ${currentView === 'contact' ? 'text-gray-900' : ''}`}
                    onClick={() => setView('contact')}
                >
                    Contact
                </span>
            </nav>
        </header>
    );
}