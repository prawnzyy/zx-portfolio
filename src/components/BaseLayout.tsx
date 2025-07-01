// src/components/RootLayout.jsx
import { Outlet, Link } from 'react-router';

function BaseLayout() {
  return (
    <div className='flex flex-col h-screen'>
      <nav>
        <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/projects">Projects</Link>
      </nav>

      <main>
        <Outlet /> {/* This is where the child route's element will be rendered */}
      </main>

      <footer className='px-6'>
        <p>&copy; 2025 My Personal Website</p>
      </footer>
    </div>
  );
}

export default BaseLayout;