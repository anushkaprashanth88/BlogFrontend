import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const [inputfield,setField]=useState(
        {
            "email":"",
            "password":""
        }
    )
    const inputHandler =(event)=>{
        setField({...inputfield,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(inputfield)
        if (inputfield.email == "admin@gmail.com" && inputfield.password == "12345") {
            navigate("/add")
            
        } else {
            alert("Invalid Credentials")
        }
        
            
        
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">email</label>
                            <input type="text" className="form-control" name="email" value={inputfield.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name="password" value={inputfield.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">LOGIN</button>
                        </div>
                        
                       
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login