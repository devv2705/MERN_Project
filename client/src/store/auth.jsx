import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || "");

  const [user,setUser]=useState("");
  const [services,setServices]= useState([])

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  //jwr authentication - to get current login user data
  const userAuthentication=async()=>{
    try {
      const response=await fetch("http://localhost:4000/api/auth/user",
        {
          method:"GET",
          headers:{
            Authorization:`Bearer  ${token}`
          },
        }
      );
      if(response.ok){
        const Data=await response.json();
        setUser(Data.userData)

      }
      
    } catch (error) {

      console.error("Error while fetching userdata")
      
    }
  }

//to fetch services data from backend 

const getServices=async()=>{
  try {

    const response= await fetch("http://localhost:4000/api/data/service",
       {
        method:"GET"
       } 
    )

    if(response.ok){
      const data=await  response.json();
      console.log(data.msg)
      setServices(data.msg)
    }
    
  } catch (error) {
     console.log(`services frontend error : ${error}`)
    
  }
}

  useEffect(()=>{
    
    getServices();

    userAuthentication();
  },[]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser ,user,services}}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);
  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return authContextValue;
};
