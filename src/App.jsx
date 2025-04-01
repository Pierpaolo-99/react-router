import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Chisiamo from "./pages/Chisiamo"
import Posts from "./pages/Posts"
import Contacts from "./pages/Contacts"
import Header from "./components/Header"
import Footer from "./components/Footer"

export default function App() {

  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/Chisiamo" Component={Chisiamo} />
          <Route path="/Posts" Component={Posts} />
          <Route path="/Contacts" Component={Contacts} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}
