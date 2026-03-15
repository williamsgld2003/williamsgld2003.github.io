// Important: DO NOT remove this `ErrorBoundary` component.
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#fdfbf7]">
          <div className="text-center p-8">
            <h1 className="text-xl font-serif text-gray-900 mb-4">Something went wrong</h1>
            <p className="text-gray-500 mb-6 font-sans-utility text-sm">We're sorry, but something unexpected happened.</p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 border border-black hover:bg-black hover:text-white transition-colors duration-300 font-sans-utility text-xs uppercase tracking-widest"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

function App() {
  try {
    const [currentView, setView] = React.useState('work');

    const renderView = () => {
        switch(currentView) {
            case 'work': return <Gallery />;
            case 'about': return <About />;
            case 'contact': return <Contact />;
            default: return <Gallery />;
        }
    };

    return (
      <div className="min-h-screen w-full bg-[var(--bg-color)] selection:bg-gray-200 flex flex-col md:flex-row" data-name="app" data-file="app.js">
        <Header currentView={currentView} setView={setView} />
        <main className="w-full md:pl-64 min-h-screen">
            {renderView()}
        </main>
      </div>
    );
  } catch (error) {
    console.error('App component error:', error);
    return null;
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ErrorBoundary>
    <App />
  </ErrorBoundary>
);