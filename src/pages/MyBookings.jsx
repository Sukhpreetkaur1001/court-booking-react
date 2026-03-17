import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "../Styles/mybooking.css";

function MyBookings() {

const [bookings, setBookings] = useState([])
const [showPopup,setShowPopup] = useState(false)
const [cancelIndex,setCancelIndex] = useState(null)

useEffect(() => {
const data = JSON.parse(localStorage.getItem("bookings")) || []
setBookings(data)
}, [])


const confirmCancel = (index)=>{
setCancelIndex(index)
setShowPopup(true)
}

const cancelBooking = ()=>{

let updated = bookings.filter((_,i)=> i !== cancelIndex)

setBookings(updated)

localStorage.setItem("bookings", JSON.stringify(updated))

setShowPopup(false)

}


return (

<div className="mybookings-page">

<h1 className="page-title">My Bookings</h1>

{bookings.length === 0 ? (

<div className="no-booking">
<h3>No bookings yet</h3>
<p>Book a court to see it here</p>
</div>

) : (

<div className="booking-grid">

{bookings.map((b,index)=>(

<div key={index} className="booking-card">


<h2>{b.court}</h2>

<p>Date: {b.date}</p>
<p>Time: {b.time}</p>
<p>Price: ₹{b.price}</p>

<button 
className="cancel-btn"
onClick={()=>confirmCancel(index)}
>
Cancel Booking
</button>

</div>

))}

</div>

)}

<div className="go-booking">

<Link to="/courts" className="book-now-btn">
{bookings.length === 0 
? "🎾 Book Your First Court" 
: "🎾 Book Another Court"}
</Link> 

</div>

</div>

)

}

export default MyBookings