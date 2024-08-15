import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useAuth } from "../store/auth"
import {toast} from "react-toastify"

export const AdminUpdate=()=>{

    const [data,setData]=useState({
         username:"",
         email:"",
         phone:"" 
    })


    const params=useParams()
    const {authorizationToken }=useAuth()

    const getSingleUserData=async()=>{

        try {
            const response=await fetch(`http://localhost:4000/api/admin/user/${params.id}`,{
                method:"GET",
                headers:{
                    Authorization:authorizationToken   
                }
            })
            const data=await response.json()
            setData(data)
            
            
        } catch (error) {
            console.log(error)     
        }     

        

    }


    useEffect(()=>{
         getSingleUserData()
    },[])
    const handleInput=(e)=>{
      let name=e.target.name;
      let value=e.target.value;

      setData({
        ...data,
        [name]:value
      })
    }

    const handleSubmit=async(e)=>{
      e.preventDefault();
      try {

         const response=await fetch(`http://localhost:4000/api/admin/user/update/${params.id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json",
            Authorization:authorizationToken
          },
          body:JSON.stringify(data)
         })

         if(response.ok){

           toast.success("Update Successfully")

         }else{
          toast.error("Not Updated")

         }

        
      } catch (error) {
        console.log(error)
      }



    }



    return (
<section className="section-contact">
            <div className="contact-content container">
              <h1 className="main-heading">Update User-Data</h1>
            </div>
            {/* contact page main  */}
            <div className="container grid grid-two-cols">
    
              {/* contact form content actual  */}
              <section className="section-form">
                <form onSubmit={handleSubmit}> 
                  <div>
                    <label htmlFor="username">username</label>
                    <br />
                    <input
                      type="text"
                      name="username"
                      id="username"
                      autoComplete="off"
                      value={data.username}
                      onChange={handleInput}
                      required
                      
                    />
                  </div>
                  <br /> <br />
    
                  <div>
                    <label htmlFor="email">email</label>
                    <br />
                    <input
                      type="email"
                      name="email"
                      id="email"
                      autoComplete="off"
                      value={data.email}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br /> <br />
    
                  <div>
                  <label htmlFor="phone">phone</label>
                    <br />
                    <input
                      type="number"
                      name="phone"
                      id="phone"
                      autoComplete="off"
                      value={data.phone}
                      onChange={handleInput}
                      required
                    />
                  </div>
                  <br /> <br />
    
                  <div>
                    <button type="submit">Update</button>
                  </div>
                </form>
              </section>
            </div>
          </section>
    )
}