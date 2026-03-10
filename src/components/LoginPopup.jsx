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

<div className="popup">

<div className="popup-box">

<h3>Login to Book Courts</h3>

<p>Create an account to start booking courts</p>

<button onClick={()=>{
    setShowPopup(false) 
    navigate("/login")}}>
        Login</button>

<button onClick={()=>setShowPopup(false)}>❌ Close</button>

</div>

</div>

)

}

export default LoginPopup