"use client";
import { AnnimationPage } from "@/components/annimation";

import { ABChamicalsProfileData } from "@/info/userInfo";
import Image from "next/image";
import Link from "next/link";



export default function Page() {

  return (
    <div>
      {/* Main UI */}
      <div className="min-h-screen min-w-screen bg-gray-800	">
        <title>
          AB Chemicals |Gallery
        </title>
        <section className="">
          <div className="h-40 flex justify-center items-center relative text-center">

            <p className="absolute flex">
              <span className="text-4xl sm:text-5xl text-white font-extrabold">
                AB &nbsp;
                <span className="text-teal-500 font-extrabold ">
                  Gallery
                </span>
              </span>
            </p>
          </div>
          <AnnimationPage>
            <div className="w-100 py-5 px-10 text-center ">
              <h1 className="text-2xl md:text-5xl font-semibold">Our Produces</h1>
            </div>
          </AnnimationPage>
        </section>

        <section>
          <AnnimationPage>

            <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-36 md:pb-20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-7">
                {ABChamicalsProfileData.portfolioInfo.map((obj) => {
                  return (
                    <>
                      <div
                        className="border-slate-800 cursor-pointer p-4 border-2 rounded-2xl"
                        style={{
                          background: obj.hexColor,
                        }}
                      >
                        <div
                          style={{
                            width: "100%",
                            height: "85%",
                            borderRadius: "10px",
                            overflow: "hidden",
                          }}
                        >
                          <Image
                            alt="Google Pic"
                            src={obj.bannerImage}
                            width={0}
                            height={0}
                            sizes="100vw"
                            className="w-full	h-full"
                          />
                        </div>
                        <div className="text-center text-white font-semibold capitalize text-xl py-2">
                          {obj.heading}
                        </div>
                        <div>{obj.subHeading}</div>
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
          </AnnimationPage>
        </section>
      </div>

      {/* Navigation Component */}
      <section className="hidden lg:flex absolute top-0 right-0 min-h-screen justify-center items-center pr-5">
        <div className="flex flex-col py-6 items-end">
          <div className="flex">
            <Link href="home"><div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#000000] hover:text-black bg-teal-300 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-teal-300 duration-300 group">
              <p className="hidden group-hover:flex text-lg font-bold">
                Home
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-home"
              >
                <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                <polyline points="9 22 9 12 15 12 15 22" />
              </svg>
            </div></Link>



          </div>

          <div className="flex mt-8">
            <Link href="about">
              <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#000000] hover:text-black bg-teal-300 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-teal-300 duration-300 group">
                <p className="hidden group-hover:flex text-lg font-bold">
                  About
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div></Link>


          </div>

          <div className="flex mt-8">
            <Link href="gallery">
              <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#000000] hover:text-black bg-teal-300 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-teal-300 duration-300 group">
                <p className="hidden group-hover:flex text-lg font-bold">
                  Gallery
                </p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-gallery-vertical"><path d="M3 2h18" /><rect width="18" height="12" x="3" y="6" rx="2" /><path d="M3 22h18" /></svg>
              </div></Link>



          </div>

          <div className="flex mt-8">
            <Link href="contact"> <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#000000] hover:text-black bg-teal-300 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-teal-300 duration-300 group">
              <p className="hidden group-hover:flex text-lg font-bold">
                Contact
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-mail-open"
              >
                <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
                <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
              </svg>
            </div></Link>


          </div>
        </div>
      </section>


      <section className="fixed lg:hidden bottom-0 left-0 bg-white w-full py-3">
        <div className="flex justify-evenly">

          <div className="bg-teal-300 rounded-full w-12 h-12 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-home"
            >
              <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
              <polyline points="9 22 9 12 15 12 15 22" />
            </svg>
          </div>



          <div className="bg-teal-300 rounded-full w-12 h-12 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-user"
            >
              <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>



          <div className="bg-teal-300 rounded-full w-12 h-12 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-briefcase"
            >
              <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
              <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
            </svg>
          </div>

          <div className="bg-teal-300 rounded-full w-12 h-12 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#FFF"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail-open"
            >
              <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
              <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
            </svg>
          </div>

        </div>
      </section>
    </div>
  );
}
