function About() {
    return (
        <section className="w-full px-6 md:px-12 py-12 max-w-3xl mx-auto fade-in min-h-[60vh]" data-name="about">
            <div className="space-y-8 text-lg md:text-xl leading-relaxed text-[var(--text-color)]">
                <p>
                    Gabriel Williams is a photographer based in the Pacific Northwest. His work explores the quiet intersection between human presence and the natural world, often focusing on landscapes that feel both abandoned and alive.
                </p>
                <p>
                    Drawing inspiration from the American New Topographics movement, Williams uses medium format film to document the subtle shifts in rural topography. His images are stripped of artifice, presenting a raw, unvarnished look at the environments we inhabit but rarely see.
                </p>
                <p>
                    "I am interested in the silence of a place after everyone has left."
                </p>
            </div>
            
            <div className="mt-16 pt-16 border-t border-gray-200 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-sans-utility text-xs uppercase tracking-widest mb-4 text-[var(--muted-color)]">Select Exhibitions</h3>
                    <ul className="text-sm space-y-2 font-sans-utility">
                        <li>2025 — The Quiet Earth, Portland OR</li>
                        <li>2024 — Silver & Dust, Santa Fe NM</li>
                        <li>2023 — Northwest Annual, Seattle WA</li>
                        <li>2021 — New Voices, Austin TX</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-sans-utility text-xs uppercase tracking-widest mb-4 text-[var(--muted-color)]">Publications</h3>
                    <ul className="text-sm space-y-2 font-sans-utility">
                        <li>The New York Times Magazine</li>
                        <li>Aperture Foundation</li>
                        <li>The British Journal of Photography</li>
                        <li>Foam Magazine</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}