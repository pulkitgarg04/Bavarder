import { createBrowserRouter, RouterProvider } from "react-router-dom"
import HomePage from "./components/HomePage"
import RoomPage from "./components/RoomPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />
    },
    {
      path: "/room/:id",
      element: <RoomPage />
    }
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
