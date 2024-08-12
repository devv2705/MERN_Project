import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('token') || "");
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const storeTokenInLocalStorage = (serverToken) => {
    setToken(serverToken);
    localStorage.setItem("token", serverToken);
  };

  const isLoggedIn = !!token;

  const LogoutUser = () => {
    setToken("");
    localStorage.removeItem("token");
  };

  // JWT authentication - get current logged-in user data
  const userAuthentication = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setUser(data.userData);
      }
    } catch (error) {
      console.error("Error while fetching userdata");
    } finally {
      setLoading(false); // Set loading to false after fetching user data
    }
  };

  // Fetch services data from the backend
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/data/service", {
        method: "GET",
      });

      if (response.ok) {
        const data = await response.json();
        setServices(data.msg);
      }
    } catch (error) {
      console.error("services frontend error: ", error);
    }
  };

  useEffect(() => {
    userAuthentication();
    getServices();
  }, [token]);

  return (
    <AuthContext.Provider value={{ isLoggedIn, storeTokenInLocalStorage, LogoutUser, user, services, loading }}>
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
