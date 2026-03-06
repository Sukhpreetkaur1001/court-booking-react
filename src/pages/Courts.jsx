import CourtCard from "../components/CourtCard";
import courtImg1 from "../assets/court1.jpg";
import courtImg2 from "../assets/court2.jpg";
import courtImg3 from "../assets/court3.png";
import courtImg4 from "../assets/court4.jpg";
import courtImg5 from "../assets/court5.jpg";
import courtImg6 from "../assets/court6.jpg";
import courtImg7 from "../assets/court7.jpg";
import courtImg8 from "../assets/court8.jpg";



function Courts() {

  const courts = [
    {
      image: courtImg1,
      title: "Premium Outdoor Court",
      location: "Mohali, Punjab",
      price: "₹500 / hour"
    },
    {
      image: courtImg2,
      title: "Indoor Tennis Court",
      location: "Chandigarh",
      price: "₹800 / hour"
    },
    {
      image: courtImg3,
      title: "Elite Court",
      location: "Delhi",
      price: "₹1200 / hour"
    },
    {
      image: courtImg4,
      title: "Club Court",
      location: "Gurgaon",
      price: "₹900 / hour"
    },
    {
      image: courtImg5,
      title: "Pro Court",
      location: "Hyderabad",
      price: "₹1500 / hour"
    },
    {
      image: courtImg6,
      title: "Pro Court",
      location: "Kolkata",
      price: "₹1500 / hour"
    },
    {
      image: courtImg7,
      title: "Pro Court",
      location: "lucknow",
      price: "₹1500 / hour"
    },
    {
      image: courtImg8,
      title: "Pro Court",
      location: "Ahemdabad",
      price: "₹1500 / hour"
    },
  ];

  return (
    <div className="courts-section">

      <h1 className="section-title">Available Courts</h1>
      <p className="section-subtitle">
        Choose and book your preferred court
      </p>

      <div className="courts-container">
        {courts.map((court, index) => (
          <CourtCard key={index} {...court} />
        ))}
      </div>

    </div>
  );
}

export default Courts;