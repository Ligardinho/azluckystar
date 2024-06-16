import { FaStar } from "react-icons/fa";
import Link from 'next/link';
import { IoCall } from "react-icons/io5";

export default function Testimonial() {
    return(
        <div className="hidden lg:flex items-center justify-center space-y-4 text-center p-6 md:px-[100px] gap-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 items-center">
          <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col w-[300px] h-[270px]">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-[#E51C1B] text-white w-10 h-10 flex items-center justify-center text-xl font-bold">
                SP
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Sandra Parrent</h3>
                <div className="flex items-center text-[#E51C1B]">
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="text-gray-500  flex-1 text-sm">
            &quot;I was pleasantly surprised by the excellent customer service I recieved from Drew and Jeff at AZ Lucky Star... I was just passing through AZ and they took me right in!! Thanks Guys!&quot;
            </p>
            <div className="mt-4 flex justify-center">
              <a href="tel:+1 480 674 3338">
                <button className="bg-[#E51C1B] w-fit flex items-center gap-2 text-sm px-3 py-3 rounded-xl shadow text-white my-auto hover:bg-black">
                  <IoCall size={20}/>
                  Get a Quote
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col w-[300px]">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-[#E51C1B] text-white w-10 h-10 flex items-center justify-center text-xl font-bold">
                PK
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Phillip Kamau</h3>
                <div className="flex items-center text-[#E51C1B]">
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="text-gray-500 flex-1 text-sm">
            &quot;Only best European vehicle specialist around town with good quality service, knowledgeable in Range rovers. Fixed my suv in a short time, with genuine parts and reasonable time. I would recommend them anytime.&quot;
            </p>
            <div className="mt-4 flex justify-center">
              <a href="tel:+1 480 674 3338">
                <button className="bg-[#E51C1B] w-fit flex items-center gap-2 text-md px-3 py-3 rounded-xl shadow text-white my-auto hover:bg-black">
                  <IoCall size={20}/>
                  Get a Quote
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col w-[300px] h-[270px]">
            <div className="flex items-center mb-4">
              <div className="rounded-full bg-[#E51C1B] text-white w-10 h-10 flex items-center justify-center text-xl font-bold">
                IH
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-bold">Irina Heer</h3>
                <div className="flex items-center text-[#E51C1B]">
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                  <FaStar className="h-5 w-5" />
                </div>
              </div>
            </div>
            <p className="text-gray-500 flex-1 text-sm">
            &quot;Courteous, knowledgeable, and honest! I always feel comfortable and confident that AZ Lucky Star will do what they promise.&quot;
            </p>
            <div className="mt-4 flex justify-center">
              <a href="tel:+1 480 674 3338">
                <button className="bg-[#E51C1B] w-fit flex items-center gap-2 text-md px-3 py-3 rounded-xl shadow text-white my-auto hover:bg-black">
                  <IoCall size={20}/>
                  Get a Quote
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* <button className="border-2 border-[--primary] w-fit flex items-center gap-2 text-xl px-6 py-3 rounded-xl shadow text-[--primary] transition-all hover:bg-[--primary] hover:text-white">
          Read All Reviews
          <IoIosArrowForward />
        </button> */}
      </div>
    )
}