import { useState } from "react"
import axios from "axios"



export const Login = () =>{
 
    const [email,setEmail]=useState('');
    const [pass,setPass]=useState('');

    const handleLogin=()=>{
        let data={
            "email":email,
            "pass":pass,
        }
        console.log(data)
        axios.post('https://reqres.in/api/login',data).then((r)=>{
          console.log(r)
        }).catch((e)=>{
            console.log(e)
        })
    }

    return(
        <>
            <input placeholder="email" onChange={(e)=>setEmail(e.target.value)}>
            </input>
            <input placeholder="pass" onChange={(e)=>setPass(e.target.value)}>
            </input>
            <button onSubmit={handleLogin()}>Submit</button>
        </>
    )
}