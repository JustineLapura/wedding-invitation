import Confirmation from "@/components/Confirmation";
import Footer from "@/components/Footer";
import ImageSlider from "@/components/ImageSlider";
import Main from "@/components/Main";
import Map from "@/components/Map";
import Program from "@/components/Program";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full bg-yellow-100">
      <Main />
      <Confirmation />
      <Program />
      <Map />
      <ImageSlider />
      <Footer />
    </div>
  );
}
