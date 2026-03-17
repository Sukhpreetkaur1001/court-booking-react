import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import "../Styles/Auth.css"

function Login(){

const navigate = useNavigate()

const [email,setEmail] = useState("")
const [password,setPassword] = useState("")

const handleLogin = (e)=>{
e.preventDefault()

const user = JSON.parse(localStorage.getItem("user"))

if(user && user.email === email && user.password === password){

const time = new Date().toLocaleTimeString()

// user login save
localStorage.setItem("user", JSON.stringify(user))

// login time save
localStorage.setItem("loginTime",time)

window.dispatchEvent(new Event("userLogin"))

setEmail("")
setPassword("")

navigate("/")

}else{
alert("Invalid Email or Password")
}

}

return(

<div className="auth-container">

<div className="auth-box">

<h2>Login Account</h2>

<form onSubmit={handleLogin} autoComplete="off">

<input
type="email"
placeholder="Enter Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
autoComplete="off"
required
/>

<input
type="password"
placeholder="Enter Password"
value={password}
onChange={(e)=>setPassword(e.target.value)}
autoComplete="new-password"
required
/>

<button type="submit">
Login
</button>

</form>

<p>
Don't have account? <Link to="/signup">Signup</Link>
</p>

</div>

</div>

)

}

export default Login