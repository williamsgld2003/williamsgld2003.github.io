// Data
const PORTFOLIO_DATA = [
    {
        id: 1,
        url: "https://app.trickle.so/storage/public/images/usr_1cb8c89340000001/28455834-ab1e-4f61-9149-afc6da6484d4.jpeg",
        title: "Portfolio Image 1"
    },
    {
        id: 2,
        url: "https://app.trickle.so/storage/public/images/usr_1cb8c89340000001/d351b580-4af6-4fe5-a031-fd2d741b4c76.jpeg",
        title: "Portfolio Image 2"
    }
];

// App Logic
const app = {
    currentView: 'work',
    isAboutOpen: false,
    galleryIndex: 0,
    galleryInterval: null,
    
    init() {
        this.updateGallery();
        this.startGalleryLoop();
        
        // Initial route check (optional, defaults to work)
        this.navigate('work');
    },

    navigate(viewId, event) {
        if (event) event.preventDefault();
        
        this.currentView = viewId;
        this.isAboutOpen = false;
        this.closeAboutOverlayUI();

        // Update UI Classes
        document.querySelectorAll('.section-view').forEach(el => {
            el.classList.remove('active');
            el.style.display = 'none'; // Ensure display none is applied
        });
        
        const target = document.getElementById(`view-${viewId}`);
        if (target) {
            target.style.display = viewId === 'work' ? 'flex' : 'flex'; // Use flex for all main sections
            // Small timeout to allow display:flex to apply before opacity transition
            setTimeout(() => {
                target.classList.add('active');
            }, 10);
        }

        // Update Nav State
        document.querySelectorAll('.nav-item').forEach(el => {
            if (el.dataset.target === viewId && !this.isAboutOpen) {
                el.classList.add('text-gray-900');
                el.classList.remove('text-gray-500');
            } else {
                el.classList.remove('text-gray-900');
                el.classList.add('text-gray-500');
            }
        });
    },

    toggleAbout() {
        this.isAboutOpen = !this.isAboutOpen;
        const overlay = document.getElementById('about-overlay');
        const backdrop = document.getElementById('about-backdrop');
        const content = document.getElementById('about-content');
        
        if (this.isAboutOpen) {
            overlay.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Animate in
            setTimeout(() => {
                backdrop.classList.remove('opacity-0');
                backdrop.classList.add('opacity-100');
                content.classList.remove('translate-x-full');
                content.classList.add('translate-x-0');
            }, 10);
            
            // Update Nav to highlight About if desired, or just deselect others
            document.querySelectorAll('.nav-item').forEach(el => {
                el.classList.remove('text-gray-900');
                el.classList.add('text-gray-500');
            });
        } else {
            this.closeAboutOverlayUI();
        }
    },

    closeAboutOverlayUI() {
        const overlay = document.getElementById('about-overlay');
        const backdrop = document.getElementById('about-backdrop');
        const content = document.getElementById('about-content');
        
        // Animate out
        backdrop.classList.remove('opacity-100');
        backdrop.classList.add('opacity-0');
        content.classList.remove('translate-x-0');
        content.classList.add('translate-x-full');
        
        document.body.style.overflow = 'unset';
        
        // Wait for animation to finish before hiding
        setTimeout(() => {
            if (!this.isAboutOpen) {
                overlay.classList.add('hidden');
            }
        }, 500);

        // Restore nav state
        if (!this.isAboutOpen && this.currentView) {
             document.querySelectorAll('.nav-item').forEach(el => {
                if (el.dataset.target === this.currentView) {
                    el.classList.add('text-gray-900');
                    el.classList.remove('text-gray-500');
                }
            });
        }
    },

    updateGallery() {
        const img = document.getElementById('gallery-image');
        if (!img) return;

        // Fade out
        img.classList.remove('opacity-100');
        img.classList.add('opacity-0');

        setTimeout(() => {
            // Change source
            this.galleryIndex = (this.galleryIndex + 1) % PORTFOLIO_DATA.length;
            img.src = PORTFOLIO_DATA[this.galleryIndex].url;
            
            // Fade in
            img.classList.remove('opacity-0');
            img.classList.add('opacity-100');
        }, 800);
    },

    startGalleryLoop() {
        // Set initial image
        const img = document.getElementById('gallery-image');
        if (img) img.src = PORTFOLIO_DATA[0].url;

        if (this.galleryInterval) clearInterval(this.galleryInterval);
        this.galleryInterval = setInterval(() => {
            this.updateGallery();
        }, 6000);
    }
};

// Start
document.addEventListener('DOMContentLoaded', () => {
    app.init();
});