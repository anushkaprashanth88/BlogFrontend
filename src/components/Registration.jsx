import axios from 'axios'
import React, { useState } from 'react'



const Registration = () => {
    const [inputfield,changeInputField] = useState(
        {
            "name": "",
            "profile":"",
            "email": "",
            "password": ""
        }
    )
    const inputHandler =(event)=>{
        changeInputField({...inputfield,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(inputfield)
        axios.post("http://127.0.0.1:8000/blog/add/",inputfield).then(
            (response) =>{
                alert(response.data.status)
            }
        )
    }
    
  return (
    <div>
        
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Username</label>
                            <input type="text" className="form-control" name="name" value={inputfield.name} onChange={inputHandler} />
                        </div>

                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Image</label>
                            <input type="text" className="form-control" name="profile" value={inputfield.profile} onChange={inputHandler} />
                        </div>
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Email</label>
                            <input type="text" className="form-control" name="email" value={inputfield.email} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Password</label>
                            <input type="text" className="form-control" name="password" value={inputfield.password} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button onClick={readValue} className="btn btn-success">REGISTER</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Registration