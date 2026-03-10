import { useState } from "react"
import "../Styles/sucess.css";
import { Link, useNavigate, useLocation } from "react-router-dom"
import picture1 from "../assets/picture1.jpg";
import picture2 from "../assets/picture2.jpg";
import picture3 from "../assets/picture3.jpg";

function BookingSuccess(){

const [showRecommendations,setShowRecommendations] = useState(false)

const navigate = useNavigate()
const location = useLocation()

// state read
const { bookingCancelled } = location.state || {}

return(

<div className="success-page">

{/* ✅ condition */}
{bookingCancelled ? (

<>
<h1>❌ Booking Cancelled</h1>
<p>Your booking has been cancelled.</p>
</>

) : (

<>
<h1>✅ Court Booked Successfully!</h1>
<p>Your booking has been confirmed.</p>
</>

)}

<p>Do you want to see recommended courts?</p>

<div className="choice-buttons">

<button 
className="accept-btn"
onClick={()=>setShowRecommendations(true)}
>
Accept
</button>

<button 
className="decline-btn"
onClick={()=>navigate("/")}
>
Decline
</button>

</div>


{showRecommendations && (

<div className="recommend-courts">

<h2>Recommended Courts</h2>

<div className="court-card">
<img src={picture1} alt="Tennis court A"/>
<h3>Tennis Court A</h3>
<p>Indoor Court</p>
<button
className="book-again-btn"
onClick={()=>navigate("/courts")}
>
Book Again
</button>
</div>

<div className="court-card">
<img src={picture2} alt="Tennis court B"/>
<h3>Tennis Court B</h3>
<p>Outdoor Court</p>
<button
className="book-again-btn"
onClick={()=>navigate("/courts")}
>
Book Again
</button>
</div>

<div className="court-card">
<img src={picture3} alt="Tennis court C"/>
<h3>Tennis Court C</h3>
<p>Premium Court</p>
<button
className="book-again-btn"
onClick={()=>navigate("/courts")}
>
Book Again
</button>
</div>

<Link to="/courts">Explore More Courts</Link>

</div>

)}

</div>

)

}

export default BookingSuccess