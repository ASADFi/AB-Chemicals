/* eslint-disable react/jsx-no-undef */
"use client";
import { AnnimationPage } from "@/components/annimation";
import CircularProgressBar from "@/components/ui/CircularProgressBar/CircularProgressBar";
import ExperienceCard from "@/components/ui/ExperienceCard/ExperienceCard";
import { asadUserProfileData, bilalUserProfileData, fahadUserProfileData } from "@/info/userInfo";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";



// export const metadata: Metadata = {
//   title: "Fahad  Ibrahim. | About",
//   description: "Fahad  Ibrahim RESUME.",
// };

export default function Page() {

  const [userProfileData, setUserProfileData] = useState(bilalUserProfileData);

  const searchParams = useSearchParams()
  const id = searchParams.get('id')
  useEffect(() => {

    if (id === "1") {
      setUserProfileData(bilalUserProfileData);
    } else if (id === "2") {
      setUserProfileData(fahadUserProfileData);
    } else if (id === "3") {
      setUserProfileData(asadUserProfileData);
    }

  }, [])
  return (


    <div>
      {/* <Head>
         */}
      <title>
        {userProfileData.Name + userProfileData.lastName + " |Portfolio"}


      </title>


      {/* <meta  name="keyword" content="/public/asadphoto.png"/> */}

      {/* </Head> */}

      {/* <meta  charSet="UTF-8"/>
       <title>
  {userProfileData.Name+userProfileData.lastName+" |Portfolio"}
  
     
  </title> */}





      <div className="min-h-screen min-w-screen bg-gray-800	">
        <section>
          <div className="h-40 flex justify-center items-center relative">
            <h1 className="text-6xl sm:text-8xl text-center text-slate-700 font-extrabold antialiased hover:subpixel-antialiased">
              RESUME
            </h1>

            <div className="absolute flex">
              <p className="">
                <span className="text-3xl sm:text-5xl text-white font-extrabold text-center">
                  ABOUT &nbsp;
                  <span className="text-amber-500">
                    ME
                  </span>
                </span>
              </p>
            </div>
          </div>
        </section>
        <AnnimationPage>
          <div className="container mx-auto px-5 md:px-10 lg:px-20 pb-36 md:pb-20 mt-5">
            <section className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-3 pb-24">
              <section>
                <h1>
                  <span className="text-2xl font-bold">PERSONAL INFOS</span>
                </h1>

                <div className="grid grid-cols-2 gap-3 sm:gap-6 w-full  pt-4">
                  <div className="">
                    <span className="text-sm font-extralight">
                      First Name:{" "}
                      <span className="font-extrabold">
                        {userProfileData.Name}
                      </span>
                    </span>
                  </div>
                  <div>
                    {" "}
                    <span className="text-xs sm:text-sm font-extralight">
                      LastName:{" "}
                      <span className="font-extrabold">
                        {" "}
                        {userProfileData.lastName}
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-xs sm:text-sm font-extralight">
                      Age:{" "}
                      <span className="font-extrabold">
                        {userProfileData.Age}
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-xs sm:text-sm font-extralight">
                      Freelance:{" "}
                      <span className="font-extrabold text-green-500">
                        {" "}
                        {userProfileData.freelance}
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-xs sm:text-sm font-extralight">
                      Phone:{" "}
                      <span className="font-extrabold">
                        {userProfileData.phone}
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-xs sm:text-sm font-extralight">
                      Email:{" "}
                      <span className="font-extrabold">
                        {userProfileData.email}
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-xs sm:text-sm font-extralight">
                      Skype:{" "}
                      <span className="font-extrabold">
                        {userProfileData.skype}
                      </span>
                    </span>
                  </div>
                  <div className="">
                    <span className="text-xs sm:text-sm font-extralight">
                      Language:{" "}
                      <span className="font-extrabold">
                        {userProfileData.languages}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="pt-16 md:flex flex-row    ">
                  <div className="rounded-t-full">
                  <a
                    href={"files/" + userProfileData.resume}
                    download={userProfileData.resume}
                    className="  relative bg-amber-400 rounded-full overflow-hidden text-white font-bold border border-amber-400 bg-transparent text-center px-16 py-4 group "
                  >
                    <span className="stroke-white  px-7  absolute w-0 group-hover:w-full translate-all ease-out duration-700 h-full bg-amber-400 left-0 top-0 rounded-full">
                      <svg
                        className="w-6 h-11 font-extrabold bg-transparent -mx-3"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                        />
                      </svg>
                    </span>

                    <span className="relative text-justify justify-normal ">
                      DOWNLOAD CV
                    </span>
                  </a>
                </div>
                </div>
              </section>

              <section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
                  <ExperienceCard count={userProfileData.experinces} label="years of experience" />
                  <ExperienceCard count={userProfileData.acheivements} label="Achievements" />
                  <ExperienceCard count={userProfileData.completed_project} label="Completed Projects" />
                  <ExperienceCard count={userProfileData.happy_customer} label="Happy customer" />
                </div>
              </section>
            </section>

            <section className="text-center justify-center align-middle  ">
              <div className="font-semibold text-3xl text-center justify-center align-middle ">
                MY SKILLS
              </div>
            </section>

            <section
              className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-12 gap-x-28 content-center items-center justify-center py-12"
            >
              {userProfileData.skills.map((obj) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  <div className="text-base lg:text-xl content-center font-extrabold h-full">
                    <CircularProgressBar title={obj.skill} rating={obj.rating} />
                  </div>
                );
              })}
            </section>

            <section className="pt-12">
              <div className="font-semibold  text-3xl  text-center justify-center align-middle ">
                EXPERIENCES & EDUCATION
              </div>

              <section className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-10">
                {userProfileData.education.map((obj) => {
                  return (
                    <>
                      <div className="flex justify-start items-start gap-8">
                        <div>
                          <div className="flex justify-center items-center rounded-full w-10 h-10 bg-amber-400 ">
                            <svg
                              className="w-6 h-6"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                              />
                            </svg>
                          </div>

                          <div
                            className="bg-amber-100"
                            style={{
                              height: "50px",
                              width: "1px",
                              marginLeft: "20px",
                            }}
                          ></div>
                        </div>

                        <div className="flex flex-col">
                          <div
                            className="flex justify-center items-center px-8 py-2 w-fit grow-0 bg-slate-700 rounded-full text-xs font-bold text-white-500">
                            {obj.date}
                          </div>
                          <div className="font-semibold text-xl sm:text-2xl capitalize caption-top mt-5">
                            {obj.title}
                            <a className="font-bold text-slate-300 text-sm sm:text-base px-2">
                              {obj.source}
                            </a>
                            <p className="text-slate-300 font-semibold text-xs sm:text-sm pt-2">
                              {obj.desception}
                            </p>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
              </section>
            </section>
          </div>
        </AnnimationPage>
      </div>

      <section className="hidden lg:flex fixed top-0 right-0 min-h-screen justify-center items-center pr-5">
        <div className="flex flex-col py-6 items-end">
          <div className="flex">
            <Link href={`/profile?id=${id}`}>
              <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white bg-amber-400 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex text-lg font-bold">
                  Profile
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
            <Link href={`/about?id=${id}`}>
              <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white bg-amber-400 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex text-lg font-bold">
                  About
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white bg-amber-400 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex text-lg font-bold">
                  Portfolio
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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
              <div className="flex justify-center  rounded-full w-12 h-12 transition ease-in-out delay-150 text-[#dfd3d3] hover:text-white bg-amber-400 hover:justify-between hover:w-auto items-center gap-8  px-3 hover:px-5  hover:scale-110 hover:bg-amber-400 duration-300 group">
                <p className="hidden group-hover:flex text-lg font-bold">
                  Contact
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
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

      <section className="fixed lg:hidden bottom-0 left-0 bg-white w-full py-3">
        <div className="flex justify-evenly">
          <Link href={`/profile?id=${id}`}>
            <div className="bg-amber-400 rounded-full w-12 h-12 flex justify-center items-center">
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
          </Link>

          <Link href={`/about?id=${id}`}>
            <div className="bg-amber-400 rounded-full w-12 h-12 flex justify-center items-center">
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
          </Link>

          <Link href={`/protfolio?id=${id}`}>
            <div className="bg-amber-400 rounded-full w-12 h-12 flex justify-center items-center">
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
          </Link>

          <Link href={`/contact?id=${id}`}>
            <div className="bg-amber-400 rounded-full w-12 h-12 flex justify-center items-center">
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
      </section>
    </div>
  );
}
