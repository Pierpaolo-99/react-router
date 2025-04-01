import { BrowserRouter, Routes, Route } from "react-router-dom"

import DefaultLayout from "./layout/DefaultLayout"
import Home from "./pages/Home"
import Chisiamo from "./pages/Chisiamo"
import Posts from "./pages/Posts"
import Contacts from "./pages/Contacts"

export default function App() {

  return (
    <>
      <BrowserRouter>

        <Routes>
          <Route Component={DefaultLayout}>
            <Route path="/" Component={Home} />
            <Route path="/Chisiamo" Component={Chisiamo} />
            <Route path="/Posts" Component={Posts} />
            <Route path="/Contacts" Component={Contacts} />
          </Route>
        </Routes>

      </BrowserRouter>
    </>
  )
}
