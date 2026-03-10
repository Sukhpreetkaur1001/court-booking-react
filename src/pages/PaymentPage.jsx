import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import QRCode from "react-qr-code";


function PaymentPage() {

  const location = useLocation();
  const Navigate = useNavigate();
  const { title, price, date, time } = location.state || {};

  const amount = Number(price).toFixed(2);

const upiLink = `upi://pay?pa=7625808791@pthdfc&pn=Courtline&am=${amount}&cu=INR&tn=${encodeURIComponent(
  `Court Booking - ${title}`

)}`;
console.log("UPI LINK:", upiLink);

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePay = () => {
    if (!cardNumber || !expiry || !cvv) {
      alert("Please fill all card details");
      return;
    }

    alert("Payment Successful!");

    Navigate("/success", {
      state: {
        title,
        date,
        time,
        price,
        paymentCompleted: true
      }
    });
  };

  // ❌ Cancel booking
  const handleCancelBooking = () => {

    Navigate("/success", {
      state: {
        bookingCancelled: true
      }
    });

  };

  return (
    <div style={{ padding: "50px", textAlign: "center" }}>

      <h1>Payment for {title}</h1>

      <p>Date: {date} | Time: {time}</p>

   <p>Amount: ₹{price}</p>

      <div style={{ marginTop: "30px" }}>

        <input
          type="text"
          placeholder="Card Number"
          onChange={(e) => setCardNumber(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="MM/YY"
          onChange={(e) => setExpiry(e.target.value)}
        />

        <br /><br />

        <input
          type="text"
          placeholder="CVV"
          onChange={(e) => setCvv(e.target.value)}
        />

        <br /><br />

        <button onClick={handlePay}>
          Pay Now
        </button>

        {/* NEW BUTTON */}
        <button
          onClick={handleCancelBooking}
          style={{ marginLeft: "15px", background: "red", color: "white" }}
        >
          Cancel Booking
        </button>

      </div>

      <div style={{ marginTop: "50px" }}>

        <h3>Scan & Pay</h3>

        <QRCode value={upiLink} size={180} />

      </div>

    </div>
  );
}

export default PaymentPage;