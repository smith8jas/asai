import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import YogaClasses from "./pages/services/YogaClasses";
import NutritionCoaching from "./pages/services/NutritionCoaching";
import HealingSessions from "./pages/services/HealingSessions";
import WorkshopsCourses from "./pages/services/WorkshopsCourses";
import CorporatePrograms from "./pages/services/CorporatePrograms";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/yoga-asai" element={<YogaClasses />} />
          <Route path="/services/nutrition-coaching" element={<NutritionCoaching />} />
          <Route path="/services/healing-sessions" element={<HealingSessions />} />
          <Route path="/services/workshops-courses" element={<WorkshopsCourses />} />
          <Route path="/services/corporate-programs" element={<CorporatePrograms />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
