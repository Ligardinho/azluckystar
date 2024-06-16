import * as React from "react"
import { FaStar } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import Link from 'next/link';

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function CarouselDemo() {
  return (
    <Carousel className="md:w-full max-w-xs lg:hidden w-2/5-sm">
      <CarouselContent>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col w-[280px] h-[300px]">
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col w-[280px] h-[320px]">
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
                  <p className="text-gray-500  flex-1 text-sm">
                    &quot;Only best European vehicle specialist around town with good quality service, knowledgeable in Range rovers. Fixed my suv in a short time, with genuine parts and reasonable time. I would recommend them anytime.&quot;
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem>
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-6">
                <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col w-[280px] h-[300px]">
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
                  <p className="text-gray-500  flex-1 text-sm">
                    &quot;Courteous, knowledgeable, and honest! I always feel comfortable and confident that AZ Lucky Star will do what they promise.&quot;
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
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
