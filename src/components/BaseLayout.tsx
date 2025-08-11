// src/components/RootLayout.jsx
import { useState } from 'react';
import { Menu } from 'lucide-react'; // Optional: icon library
import { Outlet, Link } from 'react-router';
import ScrollToTop from './ScrollToTop';
import { MarkGithubIcon } from '@primer/octicons-react';
import { FaLinkedin, FaHome, FaUser, FaPlane, FaList } from 'react-icons/fa';
import ProgressBar from './TopProgressBar';
import { scrollProgress } from '@/hooks/scrollProgress';
import reactLogo from "@/assets/react.svg";
import typeScriptLogo from "@/assets/Typescript.svg"
import viteLogo from "@/assets/vite.svg";

function BaseLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <ScrollToTop />
    <ProgressBar progress={scrollProgress()}></ProgressBar>
    <div className='flex flex-col h-full relative overflow-visible'>
      <header className='bg-black text-white w-full sticky top-0 z-100'>
        <div className='container mx-auto space-y-4 w-full sm:py-5 sm:px-12 py-3 px-8'>
          <nav className="flex-row gap-4 w-full sm:flex hidden mb-0">
            <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-grey-800">
              <div className='flex flex-row justify-center items-center'><FaHome className='me-1'/> Home</div>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-black">
              <div className='flex flex-row justify-center items-center'><FaUser className='me-1'/> About</div>
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-black">
              <div className='flex flex-row justify-center items-center'><FaList className='me-1'/> Projects</div>
            </Link>
            <Link to="/travels" onClick={() => setIsOpen(false)} className="block hover:text-black">
              <div className='flex flex-row justify-center items-center'><FaPlane className='me-1'/> Travels</div>
            </Link>
          </nav>
          <button
          className="ms-auto sm:hidden block py-2 px-3 text-black"
          aria-label='Main menu button'
          onClick={() => setIsOpen(!isOpen)}
          > <Menu size={20}/></button>
        </div>
      </header>
      <div className="relative z-101">
        {isOpen && (
          <div
            className="fixed inset-0 bg-opacity-10 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-50 bg-black shadow-lg z-103 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <nav className="py-6 px-4 space-y-4 text-gray-800 font-medium">
            <Link to="/" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
              <div className='flex flex-row justify-center items-center'><FaHome className='me-1'/> Home</div>
            </Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
              <div className='flex flex-row justify-center items-center'><FaUser className='me-1'/> About</div>
            </Link>
            <Link to="/projects" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
              <div className='flex flex-row justify-center items-center'><FaList className='me-1'/> Projects</div>
            </Link>
            <Link to="/travels" onClick={() => setIsOpen(false)} className="block hover:text-blue-500">
              <div className='flex flex-row justify-center items-center'><FaPlane className='me-1'/> Travels</div>
            </Link>
          </nav>
        </div>
      </div>

      <main className='flex-grow'>
        <Outlet /> {/* This is where the child route's element will be rendered */}
      </main>

      <footer className='py-6 bg-black text-white flex flex-col'>
        <div className='flex flex-row w-screen text-center justify-center gap-4 mb-3'>
            <a aria-label="Github" className='cursor-pointer' target="_blank" href="https://github.com/prawnzyy"><MarkGithubIcon size={28}/></a>
            <a aria-label="LinkedIn" className='cursor-pointer' target="_blank" href="https://www.linkedin.com/in/seah-zi-xiang-a8500028b/"><FaLinkedin size={28}/></a>
        </div>
        <div className='flex flex-row w-screen text-center justify-center gap-4 mb-3'>
            Built with: <span><img src={reactLogo} alt="React Logo" width={26}></img></span> <span><img src={viteLogo} alt="Vite Logo" width={26}></img></span> <span><img src={typeScriptLogo} alt="TypeScript Logo" width={26}></img></span>
        </div>
        <p>&copy; 2025 Seah Zi Xiang's Website</p>
      </footer>
    </div>
    </>
  );
}

export default BaseLayout;