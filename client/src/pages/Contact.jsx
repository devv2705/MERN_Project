import { useState } from "react";

export const Contact=()=>{

    const [user,setUser]=useState({
        username:"",
        email:"",
        message:"",

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
           <div className="section-contact">
               <div className="container grid grid-two-cols">
                   <div className="registration-image">
                       <img src="/image/regi.jpg" alt="registation image" width="500" height="500" />
                   </div>
                   <div className="registration-form">
                       <h1 className="main-heading">Contact Form</h1>
                       <br />
                       <form onSubmit={handleSubmit}>

                       <div>
                               <label htmlFor="username">username</label>
                               <input 
                               type="text" 
                               name="username" 
                               placeholder="Enter username" 
                               id="username" 
                               required
                               autoComplete="off" 
                               value={user.username}
                               onChange={handleInput}
                               />

                           </div>
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
                               <label htmlFor="message">message</label>
                               <textarea name="message" id="message" placeholder="enter msg" required autoComplete="off" value={user.message} onChange={handleInput} cols={30} rows={5}></textarea>
                           </div>
                           <br />
                           <button type="submit" className="btn btn-submit">send</button>
                       </form>
                   </div>
               </div>
           </div>
       </main>
    </section>
   </>
};