import { Routes, Route } from "react-router-dom";
import HeroSection from "./Herosection";
import AboutUs from "./AboutUs";
import GetStarted from "./pages/Getstarted";
import Register from "./pages/Employer/Register";
import Signin from "./pages/Employer/Signin";
import ForgotPass from "./pages/Employer/ForgotPass";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <HeroSection />
            <AboutUs />
          </>
        }
      />
      <Route path="/get-started" element={<GetStarted />} />
      <Route path="/register/employer" element={<Register />} />
      <Route path="/signin/employer" element={<Signin />} />
      <Route path="/forgot-password" element={<ForgotPass />} />

      {/* Agar koi route match na ho to fallback */}
      <Route path="*" element={<h1>404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default App;
