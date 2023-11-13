import HeroPage from "../components/HeroPage";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <section className="bg-[url('./assets/Lines.png')]  relative min-h-screen">
      <Navbar />
      <HeroPage />
    </section>
  );
};

export default Home;
