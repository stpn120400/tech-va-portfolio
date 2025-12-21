import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Experiences from './pages/Experiences'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import NotFound from './pages/errors/NotFound'
import Maintenance from './pages/errors/Maintenance'
import ErrorBoundary from './components/ErrorBoundary'

const isMaintenance = import.meta.env.VITE_MAINTENANCE_MODE === 'true'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    errorElement: <MainLayout />,
    children: [
      isMaintenance
        ? { index: true, element: <Maintenance /> }
        : { index: true, element: <Home /> },
      isMaintenance
        ? { path: 'about', element: <Maintenance /> }
        : { path: 'about', element: <About /> },
      isMaintenance
        ? { path: 'experiences', element: <Maintenance /> }
        : { path: 'experiences', element: <Experiences /> },
      isMaintenance
        ? { path: 'portfolio', element: <Maintenance /> }
        : { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
], {
  basename: '/tech-va-portfolio',
})

function App() {
  return (
    <ErrorBoundary>
      <RouterProvider router={router} />
    </ErrorBoundary>
  )
}

export default App
