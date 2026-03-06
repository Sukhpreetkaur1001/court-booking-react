// import { useEffect, useRef } from "react";

// function CourtCard({ image, title, location, price }) {

//   const cardRef = useRef();

//   useEffect(() => {

//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add("show");
//           }
//         });
//       },
//       { threshold: 0.2 }
//     );

//     observer.observe(cardRef.current);

//   }, []);

//   return (
//     <div className="card hidden" ref={cardRef}>

//       <img src={image} className="card-img" />

//       <h2>{title}</h2>

//       <p>{location}</p>

//       <p>{price}</p>

//       <button className="btn">
//         Book Court
//       </button>

//     </div>
//   );
// }

// export default CourtCard;
import { useState } from "react";

function CourtCard({ image, title, location, price }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleBooking = () => {

    if (!date || !time) {
      alert("Please select date and time first");
      return;
    }

    alert(`Booking successful!
Court: ${title}
Date: ${date}
Time: ${time}`);
  };

  return (
    <div className="card">

      <img src={image} className="card-img" />

      <h2>{title}</h2>

      <p>{location}</p>

      <p>{price}</p>

      {/* DATE INPUT */}
      <input
        type="date"
        onChange={(e) => setDate(e.target.value)}
      />

      {/* TIME INPUT */}
      <input
        type="time"
        onChange={(e) => setTime(e.target.value)}
      />

      <button className="btn" onClick={handleBooking}>
        Book Court
      </button>

    </div>
  );
}

export default CourtCard;