import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import logo from "../assets/Logo.svg"
import "../Styles/Navbar.css"

function Navbar(){

const [user,setUser] = useState(null)
const [loginTime,setLoginTime] = useState("")
const [showMenu,setShowMenu] = useState(false)

useEffect(()=>{

const checkUser = ()=>{

const storedUser = JSON.parse(localStorage.getItem("user"))
const storedTime = localStorage.getItem("loginTime")

if(storedUser){
setUser(storedUser.name)
setLoginTime(storedTime)
}

}

checkUser()

window.addEventListener("userLogin",checkUser)

return ()=> window.removeEventListener("userLogin",checkUser)

},[])

const handleLogout = ()=>{

localStorage.removeItem("user")
localStorage.removeItem("loginTime")

setUser(null)
setShowMenu(false)

}

return(

<nav className="navbar">

<div className="nav-left">
<img src={logo} className="logo-img"/>
</div>

<div className="nav-right">

<Link className="nav-item" to="/">Home</Link>
<Link className="nav-item" to="/courts">Courts</Link>
<Link className="nav-item" to="/booking">Booking</Link>

{user ? (

<div className="profile">

<span
className="user-name"
onClick={()=>setShowMenu(!showMenu)}
>
Hi, {user}
</span>

{showMenu && (

<div className="dropdown">

<button className="time-btn">
⏰ Login Time : {loginTime}
</button>

<button
className="logout-btn"
onClick={handleLogout}
>
Logout
</button>

</div>

)}

</div>

) : (

<>

<Link className="nav-item login-btn" to="/login">
Login
</Link>

<Link className="nav-item signup-btn" to="/signup">
Signup
</Link>

</>

)}

</div>

</nav>

)

}

export default Navbar