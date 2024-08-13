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
import { Footer } from "./components/Footer";
import {AdminLayout} from "./components/layouts/Admin-layout"
import { AdminUsers } from "./pages/Admin-Users";
import { AdminContacts } from "./pages/Admin-Contacts";

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
      <Route path="/admin" element={<AdminLayout/>}>
      <Route path="user" element={<AdminUsers/>}/>
      <Route path="contact" element={<AdminContacts/>}/>

      </Route>
    </Routes>
    <Footer/>
    </BrowserRouter>
  </>);
};