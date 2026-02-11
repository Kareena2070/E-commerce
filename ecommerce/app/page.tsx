import Navbar  from "./components/Navbar";
import HeroSection from "./home/Hero";
import Footer from "./components/Footer";
import Category from "./home/Category";


export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />

    <Category />
    
    <Footer />
    
    </>
  );
}
