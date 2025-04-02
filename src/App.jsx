import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Chisiamo from "./pages/Chisiamo"
import Posts from "./pages/Posts"
import Post from "./pages/Post"
import Contacts from "./pages/Contacts"
import NotFound from "./pages/NotFound"

export default function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/Chisiamo" Component={Chisiamo} />
            <Route path="/Posts" Component={Posts} />
            <Route path="/Posts/:slug" Component={Post} />
            <Route path="/Contacts" Component={Contacts} />
            <Route path="*" Component={NotFound} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}
