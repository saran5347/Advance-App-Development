import { BrowserRouter, Route,Routes } from "react-router-dom"
import Login from "./pages/login"
import Signup from "./pages/Signup"
import LandingPage from "./pages/Landing"
import ContactUs from "./pages/ContactUs"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import Booking from "./pages/Booking"





function App() {
  

  return (
    <>
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/login" Component={Login}/>
          <Route path="/sign" Component={Signup}/>
          <Route path="/land" Component={LandingPage}/>
          <Route path="/contact" Component={ContactUs}/>
          <Route path="/about" Component={AboutUs}/>
          <Route path="/services" Component={Services}/>
          <Route path="/booking" Component={Booking}/>
       
        </Routes>
        </BrowserRouter>
        
      </div>
      
    </>
  )
}

export default App
