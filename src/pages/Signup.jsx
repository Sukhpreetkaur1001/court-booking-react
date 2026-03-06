import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup(){

  const navigate = useNavigate();

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");

  const handleSignup = () => {

    if(!name || !email || !password){
      alert("Please fill all fields");
      return;
    }

    const user = { name, email, password };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Signup Successful ✅");

    // ✅ fields clear
    setName("");
    setEmail("");
    setPassword("");

    navigate("/login");
  };

  return(

    <div className="login-page">

      <div className="login-card">

        <h2>Create Account</h2>

        <input
          type="text"
          placeholder="Enter Name"
          className="login-input"
          value={name}
          autoComplete="off"
          onChange={(e)=>setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="login-input"
          value={email}
          autoComplete="off"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="login-input"
          value={password}
          autoComplete="new-password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          className="login-btn"
          onClick={handleSignup}
        >
          Signup
        </button>

        <p>
          Already have account?
          <span
            className="signup-link"
            onClick={()=>navigate("/login")}
          >
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default Signup;