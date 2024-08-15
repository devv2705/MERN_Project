import { useEffect, useState } from "react"
import { useAuth } from "../store/auth"
export const AdminUsers=()=>{
    const [user,setUser]=useState([]);

    const {authorizationToken}=useAuth();

    const getAllUsersData=async()=>{

        try {
            const response=await fetch("http://localhost:4000/api/admin/user",{
                method:"GET",
                headers:{
                    Authorization:authorizationToken   
                }
            })

            const data=await response.json();
            setUser(data)
            
        } catch (error) {
            console.log(error)     
        }     
    }

    const deleteUser=async(id)=>{

        try {
            const response=await fetch(`http://localhost:4000/api/admin/user/delete/${id}`,{
                method:"DELETE",
                headers:{
                    Authorization:authorizationToken   
                }
            })

            if(response.ok){
                getAllUsersData()
            }
            
            
        } catch (error) {
            console.log(error)     
        }     

        

    }
    useEffect(()=>{
        getAllUsersData() 
    },[]);

    return( <>

    <section className="admin-users-section">
        <div className="container">
            <h1>Admin users data</h1>
        </div>
        <div className="container admin-users">
            <table>
                <thead>
                    <tr>
                        <th>name</th>
                        <th>email</th>
                        <th>phone</th>
                        <th>update</th>
                        <th>delete</th> 
                    </tr>
                </thead>
                <tbody> 
                {user.map((curr,index)=>{
                return <tr key={index}>
                    <td>{curr.username}</td>
                    <td>{curr.email}</td>
                    <td>{curr.phone}</td>
                    <td>edit</td>
                    <td><button onClick={()=>deleteUser(curr._id)}>delete</button></td>
                </tr>
            })}

                </tbody>
            </table>
           
            
         </div>
    </section>

    </>
)
}