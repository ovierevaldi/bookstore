"use client"

import Image from "next/image";
import bgCoverImage from '../public/images/book_cover.png'
import BookItem from "./components/BookItem";
import BannerBox from "./components/BannerBox";

export default function Home() {

  return (
    <main>
      <div className="relative">
         <Image src={bgCoverImage} alt="Book cover"/>
         <div className="text-xl bg-pinkMain absolute py-4 px-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <p className="py-6 tracking-defaultSpacing">OLD BOOKS AT AFFORDABLE PRICES</p>
                <button className="flex p-5 py-3 tracking-defaultSpacing bg-[#A85A5A] items-center mx-auto gap-x-4 gap-y-2">
                    <p className="text-white">
                      SHOP NOW 
                    </p>
                    <Image src={'/images/arrow_down.png'} alt="arrow image" width={30} height={30}></Image>
                </button>
         </div>

         <div className="bg-[#3f3f3f] absolute top-0 h-full w-[2.5rem] flex items-center justify-center flex-col">
          <div className="flex -rotate-90 gap-x-2">
            <p className="tracking-defaultSpacing text-xl px-4 py-2 text-pinkMain">CATEGORIES</p>
            <Image src={'/icons/menu.svg'} alt="arrow image" width={20} height={20} className=""></Image>
          </div>
         </div>
      </div>

      <div className="flex p-8 items-center gap-x-8 justify-between">
        <div>
          <Image src={'/icons/arrow.svg'} alt="" height={50} width={50}></Image>
        </div>
        <div className="grid grid-flow-col justify-items-center w-full">
          <BookItem price={0}></BookItem>
          <BookItem price={0}></BookItem>
          <BookItem price={0}></BookItem>
          <BookItem price={0}></BookItem>
        </div>
        <div>
          <Image src={'/icons/arrow.svg'} alt="" height={50} width={50} className="rotate-180"></Image>
        </div>
      </div>

      <div className="flex justify-around py-4"> 
        <BannerBox bgColor="#EFAF8B"></BannerBox>
        <BannerBox bgColor="#CC775D"></BannerBox>
        <BannerBox bgColor="#EFAF8B"></BannerBox>
      </div>

    </main>
  );
}
