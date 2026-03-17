import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/courts.css";

function CourtCard({ image, title, location, price }) {

  const [showLoginCard, setShowLoginCard] = useState(false);

  const navigate = useNavigate();

  const handleBooking = () => {

    const user = localStorage.getItem("user");

    if (!user) {
      setShowLoginCard(true);
      return;
    }

    navigate("/booking", {
      state: { title, price }
    });

  };

  return (

    <>

      <div className="card">

        <img src={image} className="card-img" />

        <h2>{title}</h2>

        <p>{location}</p>

        <p>₹{price}</p>

        <button className="btn" onClick={handleBooking}>
          Book Court
        </button>

      </div>

      {showLoginCard && (

        <div className="login-overlay">

          <div className="login-card">

            <h2>Login Required</h2>

            <p>Please login first to book a court</p>

            <div className="login-buttons">

              <button
                className="login-btn"
                onClick={() => navigate("/login")}
              >
                Login
              </button>

              <button
                className="close-btn"
                onClick={() => setShowLoginCard(false)}
              >
                Close
              </button>

            </div>

          </div>

        </div>

      )}

    </>

  );
}

export default CourtCard;