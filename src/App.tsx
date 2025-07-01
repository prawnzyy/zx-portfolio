import { createBrowserRouter, RouterProvider } from 'react-router';

import BaseLayout from './components/BaseLayout.tsx';
import HomePage from './pages/HomePage.tsx';
import AboutPage from './pages/AboutPage.tsx';

import NotFoundPage from './pages/NotFoundPage.tsx'; // Your 404 page

import './App.css'

const router = createBrowserRouter([
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
      // {
      //   path: 'projects',
      //   element: <ProjectsPage />,
      // },
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