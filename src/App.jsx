import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { Layout } from "./components/Layout"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Templates } from "./pages/Templates"
import { Companies } from "./pages/Companies"
import { Remote } from "./pages/Remote"
import { ErrorPage } from "./pages/Errorpage"

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:(
          <Layout />
      ),
      errorElement:<ErrorPage />,
      children:[
          {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />
      },
       {
        path: "/templates",
        element: <Templates />
      },
       {
        path: "/companies",
        element: <Companies />
      },
       {
        path: "/remote",
        element: <Remote />
      },
      ]
    }
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
