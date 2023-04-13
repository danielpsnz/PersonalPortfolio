import './App.css';
import { Navbar } from './components/Navbar';
import { ThemeProvider } from './components/ThemeProvider';
import { tokens } from './components/ThemeProvider';
import { VisuallyHidden } from './components/VisuallyHidden/VisuallyHidden';
import { AnimatePresence, LazyMotion, domAnimation, m } from 'framer-motion';
import { useRouter } from 'next/router';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar />
    </div>
  );
}

export default App;
