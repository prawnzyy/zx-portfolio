import { createHashRouter, RouterProvider } from 'react-router';

import BaseLayout from './components/BaseLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';
import ProjectsPage from './pages/ProjectsPage.tsx';
import TravelsPage from './pages/TravelsPage.tsx';
import Japan1 from './pages/Japan1.tsx';
import SEP from '@/pages/SEP.tsx';

import NotFoundPage from './pages/NotFoundPage.tsx'; // Your 404 page

import './App.css'

const router = createHashRouter([
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true, 
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'projects',
        element: <ProjectsPage />,
      },
      {
        path: 'travels',
        children: [
          {
            index: true,
            element: <TravelsPage />
          },
          {
            path: 'dec-2024',
            element: <Japan1 />
          },
          {
            path: 'sep-2024',
            element: <SEP />
          }
        ]
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;