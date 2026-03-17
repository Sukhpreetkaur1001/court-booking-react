import { useLocation, useNavigate } from "react-router-dom";
import "../Styles/summary.css";
function BookingSummary() {

const location = useLocation();
const navigate = useNavigate();

const { name, phone, title, price, date, time } = location.state || {};

const handleConfirm = () => {
  navigate("/payment", {
    state: { name, phone, title, price, date, time }
  });
};

return (

<div style={{textAlign:"center", padding:"50px"}}>

<h1>Booking Summary</h1>

<p><b>Name:</b> {name}</p>
<p><b>Court:</b> {title}</p>
<p><b>Date:</b> {date}</p>
<p><b>Time:</b> {time}</p>
<p><b>Price:</b> ₹{price}</p>

<button onClick={handleConfirm}>
Confirm & Pay
</button>

</div>

);
}

export default BookingSummary;