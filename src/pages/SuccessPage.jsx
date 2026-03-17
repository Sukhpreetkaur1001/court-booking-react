import { useLocation } from "react-router-dom";

function SuccessPage(){

const location = useLocation();

const { title, date, time, price, bookingCancelled } = location.state || {};

if(bookingCancelled){
return <h1 style={{textAlign:"center"}}>Booking Cancelled ❌</h1>
}

return(

<div style={{textAlign:"center", padding:"50px"}}>

<h1>Booking Confirmed ✅</h1>

<p>Court: {title}</p>
<p>Date: {date}</p>
<p>Time: {time}</p>
<p>Price: ₹{price}</p>

</div>

)

}

export default SuccessPage;