import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BookingSuccess from "./pages/BookingSuccess"
import Home from "./pages/Home"
import Courts from "./pages/Courts"
import Booking from "./pages/Booking"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import LoginPopup from "./components/LoginPopup"
import ChatBot from "./components/ChatBot"
import PaymentPage from "./pages/PaymentPage"

import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
      <Navbar />
      {/* <PaymentPage/> */}
      <LoginPopup/>
      <ChatBot/>

      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/courts" element={<Courts />} />
        <Route path="/success" element={<BookingSuccess />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/payment" element={<PaymentPage/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />

      </Routes>

      <Footer />

    </>
  )
}

export default App