import { useState } from "react";

import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {toast} from "react-toastify"

export const Registration=()=>{
    const [user,setUser]=useState({
        username:"",
        email:"",
        phone:"",
        password:""

    });

    const navigate = useNavigate();

    const { storeTokenInLocalStorage }=useAuth()


    //handling the input value
    const handleInput=(e) =>{
        let name=e.target.name;
        let value=e.target.value;

        setUser({
            ...user,
            [name]:value,
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/api/auth/registration`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const res_data= await response.json();

            if (response.ok) {
                storeTokenInLocalStorage(res_data.token)
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: "",
                });
                toast.success("Reginstration Sucessful")
                navigate("/login");
            } else {
                toast.error(res_data.extraDetails ? res_data.extraDetails :res_data.message)
            }
        } catch (error) {
            toast("Registration Error!!!!")
            console.log("register error", error);
        }
    };
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
                                <label htmlFor="username">username</label>
                                <input type="text" 
                                name="username" 
                                placeholder="Enter Username" 
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
                                <label htmlFor="phone">phone</label>
                                <input type="number" name="phone" placeholder="Enter Phonenumber" id="phone" required autoComplete="off" 
                                value={user.phone}
                                onChange={handleInput}/>

                            </div>
                            <div>
                                <label htmlFor="password">password</label>
                                <input type="password" name="password" placeholder="Enter password" id="password" required autoComplete="off"
                                value={user.password}
                                onChange={handleInput}
                                />

                            </div>
                            <br />
                            <button type="submit" className="btn btn-submit">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
     </section>
    </>
};