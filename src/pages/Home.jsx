import { useNavigate } from "react-router-dom";
import premiumImg from "../assets/tennis.png";
import indoorImg from "../assets/court1.jpg";
import outdoorImg from "../assets/court2.jpg";
import "../Styles/Home.css";

function Home(){

  const navigate = useNavigate();

  const courts = [
    {
      name: "Premium Tennis Court",
      location: "Mohali",
      image: premiumImg
    },
    {
      name: "Indoor Court",
      location: "Delhi",
      image: indoorImg
    },
    {
      name: "Outdoor Court",
      location: "Chandigarh",
      image: outdoorImg
    }
  ];

  return(

    <div className="home">

      {/* HERO SECTION */}

      <div className="hero-section">

        <div className="hero-overlay">

          <h1 className="hero-title">
            Book Your Perfect Court
          </h1>

          <p className="hero-subtitle">
            Premium tennis courts available anytime, anywhere
          </p>

          <button
            className="hero-btn"
            onClick={()=>navigate("/courts")}
          >
            Book Now
          </button>

        </div>

      </div>


      {/* FEATURED COURTS */}

      <div className="container-fluid py-5">

        <h2 className="section-title text-center mb-5">
          Featured Courts
        </h2>

        <div className="row justify-content-center">

          {courts.map((court,index)=>(

            <div className="col-lg-12 col-md-6 mb-4" key={index}>

              <div className="court-card">

                <img
                  src={court.image}
                  className="court-img"
                />

                <div className="court-body">

                  <h4>{court.name}</h4>

                  <p>{court.location}</p>

                  <button
                    className="book-btn"
                    onClick={()=>navigate("/booking")}
                  >
                    Book Court
                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>


      {/* CTA SECTION */}

      <div className="cta-section">

        <h2>
          Ready to Play?
        </h2>

        <p>
          Book your court now in just one click
        </p>

        <button
          className="cta-btn"
          onClick={()=>navigate("/courts")}
        >
          View All Courts
        </button>
        

      </div>


    </div>

  );
}

export default Home;