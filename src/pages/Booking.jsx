import { useState } from "react";

function Booking() {

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {

    if (!name || !phone || !date || !time) {
      alert("Please fill all details");
      return;
    }

    alert(`Booking Successful!
Name: ${name}
Date: ${date}
Time: ${time}`);
  };

  return (

    <div className="booking-page">

      <div className="booking-card">

        <h1 className="booking-title">
          Court Booking
        </h1>

        <input
          type="text"
          placeholder="Enter your name"
          className="booking-input"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter phone number"
          className="booking-input"
          onChange={(e)=>setPhone(e.target.value)}
        />

        <input
          type="date"
          className="booking-input"
          onChange={(e)=>setDate(e.target.value)}
        />

        <input
          type="time"
          className="booking-input"
          onChange={(e)=>setTime(e.target.value)}
        />

        <button
          className="booking-btn"
          onClick={handleBooking}
        >
          Confirm Booking
        </button>

      </div>

    </div>

  );
}

export default Booking;