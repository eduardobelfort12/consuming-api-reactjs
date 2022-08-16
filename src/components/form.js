import React from "react";
import { useState, useEffect } from "react";
import './css/style.css'
export default function Formulario(){   
const [name, setName] = useState([])
const [username, setUsername] = useState([])
const [email, setEmail] = useState([])
const [phone, setPhone] = useState([])

const autocomplete = (id) =>{
    console.log(id)
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        setName(data.name)
        setEmail(data.email)
        setUsername(data.username)  
        setPhone(data.phone)
      
    })
}
    return (
        <form>
            <input type={'text'} id="id" name="id" onBlur={(e) => autocomplete(e.target.value)} />
            <input type={'text'} id="name" name="name" value={name}/> 
            <input type={'text'} id="username" name="username" value={username}/>
            <input type={'text'} id="email" name="email" value={email}/> 
            <input type={'text'} id="phone" name="phone" value={phone}/>
         
        </form>
    )

}