function Contact() {
    return (
        <section className="w-full px-6 md:px-12 py-12 max-w-3xl mx-auto fade-in min-h-[60vh] flex flex-col justify-center" data-name="contact">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-3xl md:text-4xl mb-8">Get in touch</h2>
                    <p className="text-lg mb-8 leading-relaxed text-[var(--muted-color)]">
                        Available for commissions and editorial assignments worldwide. Prints available upon request.
                    </p>
                    
                    <div className="space-y-1">
                        <a href="mailto:studio@gabrielwilliams.com" className="block text-xl hover:text-[var(--muted-color)] transition-colors">studio@gabrielwilliams.com</a>
                        <p className="text-xl">+1 (503) 555-0192</p>
                    </div>
                </div>
                
                <div className="flex flex-col justify-end space-y-4">
                    <h3 className="font-sans-utility text-xs uppercase tracking-widest text-[var(--muted-color)]">Social</h3>
                    <a href="#" className="block hover:underline">Instagram</a>
                    <a href="#" className="block hover:underline">Twitter / X</a>
                    <a href="#" className="block hover:underline">Are.na</a>
                </div>
            </div>
            
            <div className="mt-24 pt-8 border-t border-gray-200">
                <p className="font-sans-utility text-xs text-[var(--muted-color)] uppercase tracking-widest">
                    &copy; 2026 Gabriel Williams Photography. All rights reserved.
                </p>
            </div>
        </section>
    );
}