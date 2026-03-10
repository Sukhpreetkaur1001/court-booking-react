import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/booking.css";

function Booking() {

  const navigate = useNavigate()

  const location = useLocation();

  const { title, price, date, time } = location.state || {};

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [dateInput, setDate] = useState("")
  const [timeInput, setTime] = useState("")

  const today = new Date().toISOString().split("T")[0]

  const handleNext = () => {

    if (!name || !phone || !dateInput || !timeInput) {
      alert("Please fill all details")
      return
    }

    if (phone.length !== 10) {
      alert("Enter valid 10 digit phone number")
      return
    }

    navigate("/payment", {
  state: {
    name,
    phone,
    title,
    price,
    date: dateInput,
    time: timeInput
  }
})
  }

  return (

    <div className="booking-page">

      <div className="booking-card">

        <h1 className="booking-title">
          Court Booking
        </h1>

        <div className="form-group">
          <label>Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="booking-input"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            className="booking-input"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Date</label>
          <input
            type="date"
            className="booking-input"
            min={today}
            value={dateInput}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Select Time</label>
          <input
            type="time"
            className="booking-input"
            value={timeInput}
            onChange={(e) => setTime(e.target.value)}
          />
        </div>

        <button
          className="booking-btn"
          onClick={handleNext}
        >
          Next
        </button>

      </div>

    </div>

  )
}

export default Booking