// src/components/RootLayout.jsx
import { useState } from 'react';
import { Menu } from 'lucide-react'; // Optional: icon library
import { Outlet, Link } from 'react-router';
import ScrollToTop from './ScrollToTop';
import { MarkGithubIcon } from '@primer/octicons-react';
import { FaLinkedin, FaHome, FaUser, FaPlane, FaList } from 'react-icons/fa';
import reactLogo from "@/assets/react.svg";
import typeScriptLogo from "@/assets/Typescript.svg"

function BaseLayout() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <ScrollToTop />
    <div className='flex flex-col h-full relative overflow-visible'>
      <header className='bg-blue-600 text-white w-full sticky top-0 z-100'>
        <div className='container mx-auto space-y-4 w-full sm:py-5 px-12 py-3'>
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
          onClick={() => setIsOpen(!isOpen)}
          > <Menu size={20}/></button>
        </div>
      </header>
      <div className="relative z-50">
        {isOpen && (
          <div
            className="fixed inset-0 bg-opacity-10 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}

        <div
          className={`fixed top-0 left-0 h-full w-50 bg-blue-600 shadow-lg z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
            }`}
        >
          <nav className="p-6 space-y-4 text-gray-800 font-medium">
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

      <main>
        <Outlet /> {/* This is where the child route's element will be rendered */}
      </main>

      <footer className='py-6 bg-blue-600 text-white flex flex-col'>
        <div className='flex flex-row w-screen text-center justify-center gap-4 mb-3'>
            <a className='cursor-pointer' target="_blank" href="https://github.com/prawnzyy"><MarkGithubIcon size={20}/></a>
            <a className='cursor-pointer' target="_blank" href="https://www.linkedin.com/in/seah-zi-xiang-a8500028b/"><FaLinkedin size={20}/></a>
        </div>
        <div className='flex flex-row w-screen text-center justify-center gap-4 mb-3'>
            Built with: <span><img src={reactLogo}></img></span> <span><img src="/vite.svg"></img></span> <span><img src={typeScriptLogo} width={32}></img></span>
        </div>
        <p>&copy; 2025 Seah Zi Xiang's Website</p>
      </footer>
    </div>
    </>
  );
}

export default BaseLayout;