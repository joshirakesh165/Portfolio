import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import './mediaqueries.css'
import Layout from './pages/Layout';
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects';
import Contact from './pages/Contact';
import Experience from './pages/Experience';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "projects",
          element: <Projects />
        },
        {
          path: "experience",
          element: <Experience />
        },
        {
          path: "contact",
          element: <Contact />
        },
      ],
    },
  ]);
  return (
    <>
      
      <RouterProvider router={router} />
    </>
  )
}

export default App
