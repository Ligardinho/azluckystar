import Image from "next/image";
import { InputWithButton } from "@/components/Email";
import Testimonial from "@/components/Testimonials";
import { CarouselDemo } from "@/components/Carousel";

export default function Home() {
  return (
    <main className="flex justify-center md:w-full h-screen">
      <div className="md:mt-[170px] flex flex-col items-center mt-[150px] h-full">
        <div className="flex flex-col items-center gap-2 md:gap-4 md:w-[800px]">
          <h1 className="md:text-4xl text-2xl font-extrabold text-center px-5 md:px-0">
            SOLVE YOUR <span className="text-[#E51C1B]">AUTOMOTIVE ISSUES</span> WITH MESA&apos;S <span className="text-[#E51C1B]">FINEST AUTO REPAIR SHOP</span>
          </h1>
          <p className="md:text-sm text-[10px] text-gray-500 md:mb-0 mb-10 text-center"><i>Expert auto repair in Mesa with affordable, guaranteed service; call now.</i></p>
        </div>
        <Testimonial/>
        <CarouselDemo/>
      </div>
    </main>
  );
}
