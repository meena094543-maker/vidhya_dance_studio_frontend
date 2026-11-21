import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Home";
import About from "../Pages/About";
import Signup from "../Pages/Signup";
import Login from "../Pages/Login";
import Departments from "../Pages/Departments";
import ClassSchedule from "../Pages/ClassSchedule";
import Contact from "../Pages/Contact";
import FAQ from "../Pages/FAQ";
import ForgotPassword from "../Pages/ForgotPassword";
import PrivacyPolicy from "../Pages/PrivacyPolicy";
import TermsAndConditions from "../Pages/TermsAndConditions";
import Appointment from "../Pages/Appointment";
function AppRoutes(){
    return(
<Routes>
    <Route path="/" element={<Homepage name="vidhya" />} /> 
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<Signup />} />
    <Route path="/login" element={<Login />} />
    <Route path="/departments" element={<Departments />} />
    <Route path="/schedule" element={<ClassSchedule />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/faq" element={<FAQ />} />
    <Route path="/forgot-password" element={<ForgotPassword />} />
    <Route path="/privacy-policy" element={<PrivacyPolicy />} />
    <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
    <Route path="/appointment" element={<Appointment />} />
</Routes>
    );
}

export default AppRoutes;