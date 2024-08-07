import { useState } from "react";

export const Login=()=>{

    const [user,setUser]=useState({
        email:"",
        password:"",

    })

    const handleInput=(e)=>{
        let name=e.target.name
        let value=e.target.value

        setUser({
            ...user,
            [name]:value,
        })
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(user)
    }
    return <>
    <section>
       <main>
           <div className="section-registration">
               <div className="container grid grid-two-cols">
                   <div className="registration-image">
                       <img src="/image/regi.jpg" alt="registation image" width="500" height="500" />
                   </div>
                   <div className="registration-form">
                       <h1 className="main-heading">Registration Form</h1>
                       <br />
                       <form onSubmit={handleSubmit}>
                           <div>
                               <label htmlFor="email">email</label>
                               <input 
                               type="email" 
                               name="email" 
                               placeholder="Enter Email" 
                               id="email" 
                               required
                               autoComplete="off" 
                               value={user.email}
                               onChange={handleInput}
                               />

                           </div>
                           <div>
                               <label htmlFor="password">password</label>
                               <input type="password" 
                               name="password" 
                               placeholder="Enter password" 
                               id="password" 
                               required 
                               autoComplete="off"
                               value={user.password}
                               onChange={handleInput}
                               />

                           </div>
                           <br />
                           <button type="submit" className="btn btn-submit">Login</button>
                       </form>
                   </div>
               </div>
           </div>
       </main>
    </section>
   </>
};