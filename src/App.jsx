import Home from "../src/Home/Home";
import Footer from "../src/components/Footer";
import Clients from "./components/Clients";
import FeatureSection from "./components/FeatureSection";
import Features from "./components/Features";
import JoinUs from "./components/JoinUs";
import TestimonialSwiper from "./components/TestimonialSwiper";
import FeatureSection2 from "./components/featureSection2";

const App = () => {
  return (
    <div className="mx-auto overflow-hidden">
      <Home />
      <Features />
      <Clients />
      <FeatureSection />
      <FeatureSection2 />
      <TestimonialSwiper />
      <JoinUs />
      <Footer />
    </div>
  );
};

export default App;
