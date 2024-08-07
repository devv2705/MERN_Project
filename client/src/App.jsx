import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home"
import {About} from "./pages/About"
import {Contact} from "./pages/Contact"
import {Service} from "./pages/Service"
import {Registration} from "./pages/Registration"
import {Login} from "./pages/Login"

export const App=()=>{
  return (
  <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/service" element={<Service />} />
      <Route path="/registration" element={<Registration />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </BrowserRouter>
  </>);
};