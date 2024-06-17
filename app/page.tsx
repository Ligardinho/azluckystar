import Image from "next/image";
import { InputWithButton } from "@/components/Email";
import Testimonial from "@/components/Testimonials";
import { CarouselDemo } from "@/components/Carousel";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="h-[100dvh] flex flex-col justify-between w-full">
      <Nav/>
      <div>
        <div className="flex flex-col items-center gap-2 md:gap-4 w-full mx-auto md:w-[800px]">
          <h1 className="md:text-4xl text-2xl font-extrabold text-center px-5 md:px-0">
              SOLVE YOUR <span className="text-[#E51C1B]">AUTOMOTIVE ISSUES</span> WITH MESA&apos;S <span className="text-[#E51C1B]">FINEST AUTO REPAIR SHOP</span>
            </h1>
            <p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-10 text-center"><i>Expert auto repair in Mesa with affordable, guaranteed service; call now.</i></p>
        </div>
          <Testimonial/>
          <CarouselDemo/>
          <p className="text-gray-500 md:text-sm text-[10px] italic mx-auto w-fit">Visit <a href="https://www.azluckystar.com/" className="hover:text-[#E51C1B] transition-all">www.azluckystar.com</a> for more information</p>
      </div>
      <Footer/>
    </div>
  );
}
