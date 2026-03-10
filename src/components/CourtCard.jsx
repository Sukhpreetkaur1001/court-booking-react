import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/courts.css";

function CourtCard({ image, title, location, price }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const Navigate = useNavigate();

  const today = new Date().toISOString().split("T")[0];

  const handleBooking = () => {

   
    // Booking form 
    Navigate("/booking", {
      state: { title, price, date, time }
    });

  };

  return (

    <div className="card">

      <img src={image} className="card-img" />

      <h2>{title}</h2>

      <p>{location}</p>

   <p>₹{price}</p>

      <button className="btn" onClick={handleBooking}>
        Book Court
      </button>

    </div>

  );
}

export default CourtCard;