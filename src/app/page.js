import Button from "@/components/atoms/Button";
import ClientSlider from "@/components/atoms/ClientSlider";
import AccessTicketSection from "@/components/molecule/AccessTicketSection";
import BookTicket from "@/components/molecule/BookTicket";
import CuisineLocation from "@/components/molecule/CuisineLocation";
import Footer from "@/components/molecule/Footer";
import Header from "@/components/molecule/Header";
import HeroSection from "@/components/molecule/HeroSection";

export default function Home() {
  return (
    <div>
      <div
        className="bg-local h-screen bg-cover bg-no-repeat "
        style={{ backgroundImage: "url('/background.jpg')" }}
      >
        <Header />
        <HeroSection />
      </div>
      <div className="bg-[linear-gradient(97deg,#283606,#0F1500)]">
        <AccessTicketSection />

        <div className="w-full ">
          <ClientSlider />
        </div>
        <CuisineLocation />
        <BookTicket />
        <Footer />
      </div>
    </div>
  );
}
