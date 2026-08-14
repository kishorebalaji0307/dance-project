import Navbar from "../components/layout/Navbar";
import Hero from "../sections/Hero/Hero";
import Marquee from "../components/Marquee";
import About from "../sections/About/About";
import Footer from "../components/layout/Footer";
import WhyChooseUs from "../sections/WhyChooseUs/WhyChooseus";
// import Classes  from  "../sections/Classes/Classes";
import StudioShowcase from "../sections/Studioshowcase/Studioshowcase";
import Founder from "../sections/Founder/Founder";
import Team from "../sections/Team/Team";
import HomeContect from "../components/HomeContect";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <StudioShowcase />
      <About />
      <Founder />
      <Team />
      <WhyChooseUs />
      {/* <Classes/> */}
      <HomeContect />
      <Footer />

    </>
  );
}

export default Home;