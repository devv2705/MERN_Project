import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Service} from "./pages/Service"
import {Registration} from "./pages/Registration"
import {Login} from "./pages/Login"
import { Navbar } from "./components/Navbar";
import {Error} from "./pages/Error"
import { Logout } from "./pages/Logout";

export const App=()=>{
  return (
  <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout/>}/>
      <Route path="*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  </>);
};