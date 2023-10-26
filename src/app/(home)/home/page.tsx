"use client"

import { AnnimationPage } from "@/components/annimation";
import Image from "next/image";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import styles from "./page.module.css";
import Link from "next/link";




export default function Page() {


  return (

    <>
      <title>AB Chemicals | Home</title>
      <main className="flex min-h-screen flex-col ">

        <div>

          <div className="min-h-full min-w-full bg-gray-800	overflow-hidden	absolute ">
            <div className="min-h-screen w-1/5 scale-150 -rotate-12 -translate-x-20 translate-y- bg-teal-300	"></div>
          </div>

          <AnnimationPage>
            <div className="absolute">
              <div className="flex flex-col justify-center items-center lg:flex-row lg:justify-evenly w-screen h-vh-72 lg:h-screen p-5 md:p-10 gap-10 lg:gap-8">
                <div className="hidden lg:block h-full">
                  <div
                    className={styles.box}

                  >
                    <div
                      style={{
                        width: "98%",
                        height: "98%",
                        position: "absolute",
                        borderRadius: "10px",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        alt="Profile Pic"
                        src="/public/asadphoto.png"
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full h-full"
                        style={{ objectFit: "cover" }}


                      />
                    </div>
                  </div>
                </div>

                <div className="block lg:hidden">
                  <div className="rounded-full h-56 w-56 border-4 border-[#252525] mx-auto overflow-hidden">
                    <Image
                      alt="Profile Pic"
                      src="/public/asadphoto.png"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="w-full h-full"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                <div className="container w-auto px-5 flex flex-col justify-center gap-6 text-center lg:text-left">
                  <div className="flex gap-5">
                    <HiOutlineArrowNarrowRight className="h-12 w-12 hidden lg:block mt-0.5 shrink-0" />
                    <div className="w-full lg:w-auto">
                      <h1
                        className="three-d w-full pt-0.5 decoration-8 mb-2 text-teal-300 dark:text-light-gold subpixel-antialiased text-3xl md:text-5xl font-bold uppercase justify-self-stretch">
                        Welcome TO AB Chemicals
                      </h1>
                      <h1 className="w-full pt-0.5 space-y-5 text-white dark:text-light-gold subpixel-antialiased text-xl md:text-3xl font-bold uppercase">
                        Trusted source for chemicals and raw materials.
                      </h1>
                    </div>
                  </div>
                  <p className="text-md md:text-lg md:leading-loose ">
                    <a className="font-bold text-teal-300">AB Chemicals </a> Your trusted source for chemicals and raw materials. With years of experience, we deliver quality solutions for diverse industries. Our extensive portfolio includes specialty chemicals, raw materials, and custom sourcing to meet unique needs. Quality assurance is our priority, ensuring industry standards are met. We offer reliability and a global reach, making us your partner of choice for essential supplies. Explore the potential of innovation with us across various sectors.
                  </p>
                  <div className="pt-7 flex justify-center lg:justify-start gap-5">
                    <button className="rounded-full">
                      <a

                        className="relative bg-teal-300 rounded-full overflow-hidden  text-white font-bold border border-teal-300 bg-transparent text-center px-16 py-4 group "
                      >
                        <span className="stroke-white px-7 py-3.5 absolute w-0 group-hover:w-full translate-all ease-out duration-700 h-full bg-teal-300 left-0 top-0 rounded-full">
                          <svg className="w-6 h-6 font-extrabold bg-transparent -mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#000000" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                          </svg>
                        </span>
                        <span className="relative text-justify justify-normal text-black">MORE ABOUT ME</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </AnnimationPage>
        </div>
      </main>

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
            <Link href="gallery"><div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#000000] hover:text-black bg-teal-300 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-teal-300 duration-300 group">
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
    </>
  );
}
