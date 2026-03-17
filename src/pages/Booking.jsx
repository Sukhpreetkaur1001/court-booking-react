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

 const slots = [
"6:00 AM",
"7:00 AM",
"8:00 AM",
"9:00 AM",
"10:00 AM",
"5:00 PM",
"6:00 PM",
"7:00 PM",
"8:00 PM"
];
  const [showAlertCard, setShowAlertCard] = useState(false)
const [alertMessage, setAlertMessage] = useState("")


  const today = new Date().toISOString().split("T")[0]

  const handleNext = () => {

    if (!title) {
  setAlertMessage("Please select a court first")
  setShowAlertCard(true)
  return
}

   if (!name || !phone || !dateInput || !timeInput) {
  setAlertMessage("Please fill all details")
  setShowAlertCard(true)
  return
}

if (phone.length !== 10) {
  setAlertMessage("Enter valid 10 digit phone number")
  setShowAlertCard(true)
  return
}

    navigate("/summary", {
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
  const handleConfirm = () => {

const booking = {
court: title,
price: price,
date: date,
time: time
}

let bookings = JSON.parse(localStorage.getItem("bookings")) || []

bookings.push(booking)

localStorage.setItem("bookings", JSON.stringify(bookings))

navigate("/payment")

}

  return (

<>

{showAlertCard && (

<div className="login-overlay">

<div className="login-card">

<h2>Warning</h2>

<p>{alertMessage}</p>

<div className="login-buttons">

<button
className="login-btn"
onClick={() => {
  setShowAlertCard(false)
  navigate("/courts")
}}
>
OK
</button>

</div>

</div>

</div>

)}

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

<div>
<h3>Morning Slots</h3>
{slots.slice(0,5).map((slot)=>(
<button
key={slot}
type="button"
onClick={()=>setTime(slot)}
style={{margin:"5px"}}
>

{slot}

</button>
))}

<h3>Evening Slots</h3>
{slots.slice(5).map((slot)=>(
<button
key={slot}
onClick={()=>setTime(slot)}
style={{margin:"5px"}}
>
{slot}
</button>
))}

</div>

</div>

<button
className="booking-btn"
onClick={handleNext}
>
Next
</button>

</div>

</div>

</>

)
    

   
}

export default Booking