
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";
import About from "./components/About"
import Booking from "./components/Booking"
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import "./App.css";
import OurWork from "./components/OurWork";

export default function App() {
  return (
    <>
      <Header />

      <main>
        <Hero />
        <Services />
        <OurWork/>
        <About />
        <Booking />
      </main>

      <Footer />
      <WhatsAppButton />
    </>
  );
}
