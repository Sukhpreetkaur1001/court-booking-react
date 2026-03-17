import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../Styles/Loginpopup.css"

function LoginPopup(){

const [showPopup,setShowPopup] = useState(false)
const navigate = useNavigate()

useEffect(()=>{

const user = localStorage.getItem("user")

if(!user){

setTimeout(()=>{
setShowPopup(true)
},10000)

}

},[])

if(!showPopup || window.location.pathname === "/success") return null

return(

<div className="popup-overlay">

<div className="popup-card">

<h2>Login Required</h2>

<p>You must login to book a court.</p>

<div className="popup-buttons">

<button
className="login-btn"
onClick={()=>{
setShowPopup(false)
navigate("/login")
}}
>
Login
</button>

<button
className="close-btn"
onClick={()=>setShowPopup(false)}
>
Close
</button>

</div>

</div>

</div>

)

}

export default LoginPopup