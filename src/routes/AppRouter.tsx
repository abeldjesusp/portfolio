import React from "react";
import { 
  BrowserRouter, 
  Navigate, 
  Route, 
  Routes
} from "react-router-dom";

// PAGES
import { About } from "../pages/about/About";
import { Home } from "../pages/home/Home";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/Footer";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route 
            path="*" 
            element={ <Navigate to='/home' replace />} 
          />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};
