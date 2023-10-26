"use client";
import { AnnimationPage } from "@/components/annimation";
import CircularProgressBar from "@/components/ui/CircularProgressBar/CircularProgressBar";
import { asadUserProfileData, fahadUserProfileData } from "@/info/userInfo";
import { Metadata } from "next";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "Fahad  Ibrahim. | About",
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
      <div className="min-h-screen min-w-screen bg-gray-800	">
        <section>
          <div className="h-40 flex justify-center items-center relative">
            <h1 className="text-8xl text-center text-slate-700  font-extrabold antialiased hover:subpixel-antialiased">
              RESUME
            </h1>

            <div className="absolute  flex ">
              <p className="">
                <span className="text-5xl text-white font-extrabold uppercase  text-center ">
                  about
                  <span className="text-5xl text-amber-500 font-extrabold  uppercase">
                    {" "}
                    ME
                  </span>
                </span>
              </p>
            </div>
          </div>
        </section>
        <AnnimationPage>
          <section className="flex flex-row py-3 px-28 pb-24  ">
            <section className="flex-auto w-60  ">
              <h1>
                <span className="text-2xl   font-bold "> PERSONAL INFOS</span>
              </h1>

              <div className="grid grid-cols-2 gap-6 w-full   pt-4 ">
                <div className="">
                  <span className="text-sm font-extralight  ">
                    First Name:{" "}
                    <span className=" text-sm font-extrabold  ">
                      {userProfileData.Name}
                    </span>
                  </span>
                </div>
                <div className="">
                  {" "}
                  <span className="text-sm font-extralight  ">
                    LastName:{" "}
                    <span className=" text-sm font-extrabold  ">
                      {" "}
                      {userProfileData.lastName}
                    </span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-extralight  ">
                    Age:{" "}
                    <span className=" text-sm font-extrabold  ">
                      {userProfileData.Age}
                    </span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-extralight  ">
                    Freelance:{" "}
                    <span className=" text-sm font-extrabold  text-green-500 ">
                      {" "}
                      {userProfileData.freelance}
                    </span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-extralight  ">
                    Phone:{" "}
                    <span className=" text-sm font-extrabold  ">
                      {userProfileData.phone}
                    </span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-extralight  ">
                    Email:{" "}
                    <span className=" text-sm font-extrabold  ">
                      {userProfileData.email}
                    </span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-extralight  ">
                    Skype:{" "}
                    <span className=" text-sm font-extrabold  ">
                      {userProfileData.skype}
                    </span>
                  </span>
                </div>
                <div className="">
                  <span className="text-sm font-extralight  ">
                    Language:{" "}
                    <span className=" text-sm font-extrabold  ">
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

            <section className="flex-auto w-40  ">
              <div className="grid grid-cols-2 gap-7 ">
                <div className="  border-x-slate-400 border-y-slate-400  h-32 w-80 p-2 border-2 rounded-md  ">
                  <div className="flex flex-row">
                    <p className="text-5xl text-amber-400 font-extrabold  mx-4  ">
                      
                    {userProfileData.experinces}
                    </p>
                    <p className="text-4xl text-amber-400 font-semibold  -mx-3 ">
                      +
                    </p>
                  </div>
                  <div className="flex flex-row mx-4">
                    <p className="text-amber-400	">_____</p>
                    <p className=" text-1xl font-light uppercase mx-2">
                      years of
                      <br />
                      experinces
                    </p>
                  </div>
                </div>
                <div className="border-x-slate-400 border-y-slate-400  h-32 w-80 p-4 border-2 rounded-md ">
                  <div className="flex flex-row">
                    <p className="text-5xl text-amber-400 font-extrabold  mx-4  ">
                      {userProfileData.completed_project}
                    </p>
                   
                    <p className="text-4xl text-amber-400 font-semibold  -mx-3 ">
                      +
                    </p>
                  </div>
                  <div className="flex flex-row mx-4">
                    <p className="text-amber-400	">_____</p>
                    <p className=" text-1xl font-light uppercase mx-2">
                      COMPLETED
                      <br />
                      PROJECTS
                    </p>
                  </div>
                </div>
                <div className="border-x-slate-400 border-y-slate-400  h-32 w-80 p-4 border-2 rounded-md ">
                  <div className="flex flex-row">
                    <p className="text-5xl text-amber-400 font-extrabold  mx-4  ">
                      {userProfileData.acheivements}
                    </p>

                    <p className="text-4xl text-amber-400 font-semibold  -mx-3 ">
                      +
                    </p>
                  </div>
                  <div className="flex flex-row mx-4">
                    <p className="text-amber-400	">_____</p>
                    <p className=" text-1xl font-light uppercase mx-2">
                      ACHEIVEMENTS
                    </p>
                  </div>
                </div>
                <div className="border-x-slate-400 border-y-slate-400  h-32 w-80 p-4 border-2 rounded-md ">
                  <div className="flex flex-row">
                    <p className="text-5xl text-amber-400 font-extrabold  mx-4  ">
                      {userProfileData.happy_customer}
                    </p>

                    <p className="text-4xl text-amber-400 font-semibold  -mx-3 ">
                      +
                    </p>
                  </div>
                  <div className="flex flex-row mx-4">
                    <p className="text-amber-400	">_____</p>
                    <p className=" text-1xl font-light uppercase mx-2">
                      happy customer
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </section>

          <section className=" text-center justify-center align-middle  ">
            <div className="font-semibold  text-3xl  text-center justify-center align-middle ">
              MY SKILLS
            </div>
          </section>

          <section className="grid grid-cols-4 gap-28 content-center items-center	justify-center	py-12 px-32  ">
            {userProfileData.skills.map((obj) => {
              return (
                // eslint-disable-next-line react/jsx-key
                <div className="flex content-center items-center	justify-center font-extrabold ">
                  <CircularProgressBar tittle={obj.skill} />
                </div>
              );
            })}
          </section>

          <section className="py-12 px-32">
            <div className="font-semibold  text-3xl  text-center justify-center align-middle ">
              EXPRINCES & EDUCATION
            </div>

            <section className="grid grid-cols-2 gap-5">
              {userProfileData.education.map((obj) => {
                return (
                  <>
                    <div className="flex justify-start items-start mt-20">
                      <div className="flex-col   w-1/12">
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

                      <div className="flex-col  w-11/12 px-5">
                        <div className="px-2 py-1 bg-slate-700 rounded-full text-xs font-bold text-white-500 h-6  w-28">
                          {obj.date}
                        </div>
                        <div className="font-semibold  text-2xl  capitalize caption-top mt-1">{obj.title}
                          <a className="font-bold text-slate-300 text-base pl-2">
                            {obj.source}
                          </a>
                          <br />
                          <span className="text-slate-300	font-semibold text-sm leading-6">{obj.desception}</span>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </section>
          </section>

        </AnnimationPage>
      </div>
      <section className="flex absolute top-0 right-0 min-h-screen justify-center items-center pr-5 ">

        <div className="  flex flex-col py-6 items-end ">
          <div className="flex ">
            <Link href={`/profiles?id=${id}`}>
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-slate-600 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
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
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-amber-400 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
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
            <Link href={`protfolio?id=${id}`}>
              <div className="flex justify-center items-center rounded-full w-12 h-12  transition ease-in-out delay-150 bg-slate-700 hover:w-32 hover:justify-between hover:items-center  px-3  hover:scale-110 hover:bg-amber-400 duration-300 group">
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
