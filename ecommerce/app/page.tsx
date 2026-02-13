import Navbar  from "./components/Navbar";
import HeroSection from "./home/Hero";
import Footer from "./components/Footer";
import Category from "./home/Category";
import DeliveryFeatures from "./home/DeliveryFeatures";
import Bestsellers from "./home/Bestsellers";
import FreshDeals from "./home/FreshDeals";


export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />

    <Category />
    <DeliveryFeatures />
    <Bestsellers />
    <FreshDeals />
  
    <Footer />
    
    </>
  );
}
