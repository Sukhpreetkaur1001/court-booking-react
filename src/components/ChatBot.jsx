import { useState } from "react"
import "../Styles/Chatbot.css";

function ChatBot(){

const [open,setOpen] = useState(false)
const [messages,setMessages] = useState([
{sender:"bot",text:"Hello 👋 How can I help you?"}
])

const sendMessage=(e)=>{

e.preventDefault()

const userText = e.target.message.value

if(!userText) return

const newMessages = [...messages,{sender:"user",text:userText}]

let reply = "Sorry, I didn't understand."

if(userText.toLowerCase().includes("book")){
reply="Go to Courts page and select a court to book."
}

if(userText.toLowerCase().includes("login")){
reply="Click login button on the top right."
}

setMessages([...newMessages,{sender:"bot",text:reply}])

e.target.reset()

}

return(

<div className="chatbot">

<button className="chat-btn" onClick={()=>setOpen(!open)}>💬</button>

{open && (

<div className="chat-box">

<div className="chat-messages">

{messages.map((msg,i)=>(

<p key={i} className={msg.sender}>{msg.text}</p>

))}

</div>

<form onSubmit={sendMessage}>

<input name="message" placeholder="Type message..." />

<button type="submit">Send</button>

</form>

</div>

)}

</div>

)

}

export default ChatBot