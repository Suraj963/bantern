import "./App.css";
import Navbar from "./screens/Navbar/Navbar";
import { Outlet, Route, Routes } from "react-router-dom";
import About from "./screens/About";
import Services from "./screens/Services";
import Portfolio from "./screens/Portfolio";
import Home from "./screens/Home";
import Footer from "./screens/Footer/Footer";
import WebsiteDesign from "./screens/Services/AllServices/WebsiteDesign";
import WebsiteDevelopment from "./screens/Services/AllServices/WebsiteDevelopment";
import BugFixing from "./screens/Services/AllServices/BugFixing";
import Maintenance from "./screens/Services/AllServices/Maintenance";
import SpeedSEO from "./screens/Services/AllServices/SpeedSEO";
import AIAutomation from "./screens/Services/AllServices/AIAutomation";
import MobileAppDevelopment from "./screens/Services/AllServices/MobileAppDevelopment";
import ProjectPage from "./screens/Portfolio/ProjectDetails/ProjectPage";
import Contact from "./screens/ContactUs/Contact";
import ScrollToTop from "./Common/ScrollToTop";
import ThankYou from "./pages/ThankYou";
import AuditForm from "./pages/AuditForm";
import WhatsAppCTA from "./Common/WhatsAppCTA";

const NavbarLayout = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <main style={{ paddingTop: "100px" }}>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppCTA />
    </>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<NavbarLayout />}>
        <Route index element={<Home />} />
        <Route path="/audit" element={<AuditForm />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route
          path="/services/website-development"
          element={<WebsiteDevelopment />}
        />
        <Route
          path="/services/app-development"
          element={<MobileAppDevelopment />}
        />
        <Route path="/services/bug-fixing" element={<BugFixing />} />
        <Route path="/services/maintenance" element={<Maintenance />} />
        <Route path="/services/speed-seo" element={<SpeedSEO />} />
        <Route path="/services/ai-automation" element={<AIAutomation />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/:id" element={<ProjectPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Route>
    </Routes>
  );
}

export default App;
