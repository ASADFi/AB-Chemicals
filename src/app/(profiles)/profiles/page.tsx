"use client"

import { AnnimationPage } from "@/components/annimation";
import { asadUserProfileData, fahadUserProfileData } from "@/info/userInfo";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import styles from "./page.module.css";


// export const metadata: Metadata = {
//   title: "Fahad  Ibrahim. | Home",
//   description: "Fahad  Ibrahim RESUME.",
// };


export default function Page() {

  const [userProfileData, setUserProfileData] = useState(fahadUserProfileData);

  const searchParams = useSearchParams()

  const id = searchParams.get('id')
  useEffect(() => {

    if(id === "1") {
      setUserProfileData(fahadUserProfileData);
    } else if(id === "2"){
      setUserProfileData(asadUserProfileData);
    }

  }, [])

  return (
    <div>
      <main className="flex min-h-screen flex-col ">

        <div>

          <div className="min-h-full min-w-full bg-gray-800	overflow-hidden	absolute ">

            <div className="min-h-screen w-1/5 scale-150 -rotate-12 -translate-x-20 translate-y- bg-amber-400	"></div>
          </div>
          <AnnimationPage>
            <div className="absolute">
              <div className="flex flex-row w-screen h-screen p-10  ">
                <div className="basis-1/2	h-full ">
                  <div
                    className={styles.box}
                  // className="w-full	h-full px-20"
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
                        src={userProfileData.profilePic}
                        width={0}
                        height={0}
                        sizes="100vw"
                        className="w-full	h-full"

                      // layout='fill'
                      // objectFit='contain'
                      />
                    </div>
                  </div>
                </div>

                <div className=" container  px-0 flex flex-col space-y-4 pt-44 w-16  md:w-auto ">
                  <h1 className="three-d w-full pt-0.5 decoration-8	 text-amber-400 dark:text-light-gold subpixel-antialiased   text-5xl	font-bold	uppercase text-left justify-self-stretch 	 ">
                    {userProfileData.mainHeading}
                  </h1>
                  <div className="px-16">
                    <h1 className="  w-full pt-0.5 space-y-5 text-white dark:text-light-gold subpixel-antialiased text-3xl font-bold uppercase  	 ">
                      {userProfileData.subHeading}
                    </h1>
                  </div>
                  <div className="px-5  leading-loose max-w-xl ">
                    <p className="max-w-xl lg:text-left  ">
                      {userProfileData.description}
                    </p>
                  </div>
                  <div className="pt-7 md:flex gap-5   ">
                    <button className="rounded-full ">
                      <a
                        href={`/abouts?id=${id}`}
                        className="  relative bg-amber-400 rounded-full overflow-hidden  text-white font-bold border border-amber-400 bg-transparent text-center px-16 py-4 group "
                      >

                        <span className="stroke-white  px-7  absolute w-0 group-hover:w-full translate-all ease-out duration-700 h-full bg-amber-400 left-0 top-0 rounded-full">
                          <svg className="w-6 h-12  font-extrabold bg-transparent -mx-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
                          </svg>

                        </span>
                        <span className="relative text-justify justify-normal "> MORE ABOUT ME</span>
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          </AnnimationPage>

        </div>


      </main>

      <section className="flex absolute top-0 right-0 min-h-screen justify-center items-center pr-5 ">

        <div className="  flex flex-col py-6 items-end ">
          <div className="flex ">
            <Link href={`/profiles?id=${id}`}>
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-amber-400 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex ease transition-all  text-white ">
                  Profile
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dfd3d3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-home"
                >
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex mt-8">
            <Link href={`/abouts?id=${id}`}>
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-slate-700 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex ease transition-all  text-white ">
                  About
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dfd3d3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex mt-8">
            <Link href={`/protfolio?id=${id}`}>
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-slate-600 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex ease transition-all  text-white ">
                  Portfolio
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#dfd3d3"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  className="lucide lucide-briefcase"
                >
                  <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
            </Link>
          </div>

          <div className="flex mt-8">
            <Link href={`/contact?id=${id}`}>
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-slate-600 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex ease transition-all  text-white ">
                  Contact
                </p>
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
            </Link>
          </div>

        </div>
      </section>
    </div>



  );
}
