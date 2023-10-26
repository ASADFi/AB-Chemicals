'use client';

import { asadUserProfileData, bilalUserProfileData, fahadUserProfileData } from "@/info/userInfo";
import { MailOpen, Map, Phone } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from 'next/navigation';

import { useEffect, useState } from "react";
import { FaPaperPlane } from "react-icons/fa6";
import { BsGithub, BsLinkedin, BsStackOverflow } from "react-icons/bs";
import PuffLoader from 'react-spinners/PuffLoader';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// const nodemailer = require("nodemailer");

// export const metadata: Metadata = {
//   title: "Fahad  Ibrahim. | contact",
//   description: "Fahad  Ibrahim RESUME.",
// };




export default function Page() {

  const [userProfileData, setUserProfileData] = useState(bilalUserProfileData);

  const searchParams = useSearchParams()


  const id = searchParams.get('id')
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [msg, setMsg] = useState('');

  const [loading, setLoading] = useState(false)

  useEffect(() => {

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000)



    if(id === "1") {
      setUserProfileData(bilalUserProfileData);
    } else if(id === "2"){
      setUserProfileData(fahadUserProfileData);
    } else if(id === "3"){
      setUserProfileData(asadUserProfileData);
    }

  }, [])

  // function App() {
  //   const [loading, setLoading] = useState(false)
  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000)
  //   }, [])
  // }


  //   let configOptions = {\

  //     host: "smtp.example.com",
  //     port: 587,
  //     tls: {
  //         rejectUnauthorized: true,
  //         minVersion: "TLSv1.2"
  //     }
  // }

  // const transporter = nodemailer.createTransport({
  //   host: "smtp.meerasad636@gmail.com",
  //   port: 465,
  //   secure: true,
  //   auth: {
  //     // TODO: replace `user` and `pass` values from <https://forwardemail.net>
  //     user: 'meerasad636@gmail.com',
  //     pass: 'VARIFICATIONasad112233'
  //   }
  // });




  const notify = (msg: string) => {


    toast.error(msg,
      {
        position: "top-right",
        autoClose: 5079,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });



  };

  const notifySuccess = (msg: string) => {
    toast.success(msg,
      {
        position: "top-right",
        autoClose: 5079,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
  };





  const handleClick = async () => {

    if (!!name == false) {
      notify("Please provide name");
    } else if (!!email === false) {
      notify("Please provide email");
    } else if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))) {
      notify("Please provide valid email");
    } else if (!!subject === false) {
      notify("Please provide subject");
    } else if (!!msg === false) {
      notify("Please provide msg")
    } else {
      //TODO Function which send the email!
      notifySuccess("Email sent successfully!")

      setName('');
      setEmail('');
      setSubject('');
      setMsg('');
    }
  }

  // try {
  //   Send the message via email using nodemailer
  //   await axios.post('api/sendEmail', {
  //     name: 'Asad',
  //     email: 'asad@gmail.com',
  //     message: 'Hello',
  //   });

  //   Clear the form data after successful submission
  //   setFormData({
  //     name: '',
  //     email: '',
  //     message: '',
  //   });

  //   alert('Message sent successfully!');
  // } catch (error) {
  //   alert('An error occurred while sending the message. Please try again later.');
  //   console.error(error);
  // }
  //   const info = await transporter.sendMail({
  //     from: '"Fred Foo 👻" <meerasad636@gmail.com>', // sender address
  //     to: "fahadibrahim@gmail.com", // list of receivers
  //     subject: "Hello ✔", // Subject line
  //     text: "Hello world?", // plain text body
  //     // html: "<b>Hello world?</b>", // html body
  //   });

  //   console.log("Message sent: %s", info.messageId);

  // }

  // function App() {
  //   const [loading, setLoading] = useState(false)
  //   useEffect(() => {
  //     setLoading(true);
  //     setTimeout(() => {
  //       setLoading(false);
  //     }, 5000)
  //   }, [])
  // }



  return (
    <div>
      {
        loading ?
          <div className="flex flex-1 flex-col pt-40 justify-center items-center">
            <PuffLoader
              color={'#f59e0b'}
              loading={loading}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />

            <h1 className="text-3xl mt-5 text-center text-slate-700  font-extrabold antialiased hover:subpixel-antialiased">
              Thunder Tech Solutions
            </h1>
          </div>
          :
            <div>
                <div className="bg-gray-800">
                    <div className="flex justify-center items-center relative py-14">
                      <h1 className="text-6xl sm:text-8xl text-center text-slate-700 font-extrabold antialiased hover:subpixel-antialiased">
                        CONTACT
                      </h1>

                      <p className="absolute flex">
                          <span className="text-3xl sm:text-5xl text-white font-extrabold text-center">
                            GET IN &nbsp;
                            <span className="text-amber-500">TOUCH</span>
                          </span>
                      </p>
                    </div>

                    <section className="container mx-auto px-5 md:px-10 lg:px-20 pb-36 md:pb-20 mt-5">
                        <div className="grid lg:grid-cols-12 gap-y-12 lg:gap-10">
                          <div className="col-span-12 lg:col-span-5">
                            <div className="text-3xl font-semibold">DONT BE SHY !</div>
                            <div className="text-sm mt-3">
                              Feel free to get in touch with me. I am always open to
                              discussing new projects, creative ideas or opportunities to be
                              part of your visions.
                            </div>
                            <div className="flex justify-start items-start">
                              <div className="flex flex-col w-full">
                                <div className="flex flex-auto mt-5">
                                  <div>
                                    <Map
                                      size={50}
                                      color="#f59e0b"
                                      strokeWidth={2.5}
                                    />
                                  </div>

                                  <div className="ml-4">
                                    <span className="text-sm font-thin">ADDRESS POINT</span>
                                    <p className="text-sm font-medium">{userProfileData.address}</p>
                                  </div>
                                </div>
                                <div className="flex flex-auto mt-5">
                                  <Phone
                                    size={50}
                                    color="#f59e0b"
                                    strokeWidth={2.5}
                                  />

                                  <div className="ml-4">
                                    <span className="text-sm font-thin">CALL</span>
                                    <p className="text-sm font-medium">{userProfileData.phone}</p>
                                  </div>
                                </div>
                                <div className="flex flex-auto  mt-5  ">
                                  <MailOpen
                                    size={50}
                                    color="#f59e0b"
                                    strokeWidth={2.5}
                                  />

                                  <div className="ml-4">
                                    <span className="text-sm font-thin">EMAIL</span>
                                    <p className="text-sm font-medium">{userProfileData.email}</p>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-5 mt-5 md:mt-8">
                              <div>
                                <Link
                                  href={userProfileData.contactInfo.linkedin}
                                  target="_blank"
                                >
                                  <div className="flex justify-center items-center rounded-full w-10 h-10  transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 ">
                                    <BsLinkedin />
                                  </div>
                                </Link>
                              </div>
                              <div>
                                <Link
                                  href={userProfileData.contactInfo.stackoverflow}
                                  target="_blank"
                                >
                                  <div className="flex justify-center items-center rounded-full w-10 h-10  transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 ">
                                    <BsStackOverflow />
                                  </div>
                                </Link>
                              </div>
                              <div className="flex">
                                <Link
                                  href={userProfileData.contactInfo.github}
                                  target="_blank"
                                >
                                  <div className="flex justify-center items-center rounded-full w-10 h-10  transition ease-in-out delay-150 bg-slate-700 hover:-translate-y-1 hover:scale-110 hover:bg-amber-500 duration-300 ">
                                    <BsGithub />
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </div>

                          <div className="col-span-12 lg:col-span-7">
                            <form>
                              <div className="grid grid-cols-12 gap-5">
                                  <div className="col-span-12 md:col-span-6">
                                      <input
                                          type="text"
                                          name="name"
                                          value={name}
                                          onChange={(event) => {
                                              setName(event.target.value);
                                          }}
                                          className="w-full px-4 py-2 bg-slate-600 shadow-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 rounded-full sm:text-sm focus:ring-2"
                                          placeholder="YOUR NAME"
                                      />
                                  </div>

                                  <div className="col-span-12 md:col-span-6">
                                      <input
                                          type="email"
                                          name="email"
                                          value={email}
                                          onChange={(event) => {
                                              setEmail(event.target.value);
                                          }}
                                          className="w-full px-4 py-2 bg-slate-600 shadow-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 rounded-full sm:text-sm focus:ring-2"
                                          placeholder="you@example.com"
                                      />
                                  </div>

                                  <div className="col-span-12">
                                      <input
                                        type="text"
                                        name="name"
                                        required
                                        value={subject}
                                        onChange={(event) => {
                                          setSubject(event.target.value);
                                        }}
                                        className=" px-4 py-2 bg-slate-600 shadow-sm text-white  placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 block w-full h-11 rounded-full sm:text-sm focus:ring-2"
                                        placeholder="YOUR SUBJECT"
                                      />
                                  </div>

                                  <div className="col-span-12">
                                    <textarea
                                      name="message"
                                      id=""
                                      rows={10}
                                      value={msg}
                                      onChange={(event) => {
                                        setMsg(event.target.value);
                                      }}
                                      placeholder="HOW CAN I HELP YOU"
                                      className="px-4 py-4 bg-slate-600 shadow-sm text-white placeholder-slate-400 focus:outline-none focus:border-amber-500 focus:ring-amber-500 block w-full rounded-3xl sm:text-sm focus:ring-2"
                                    />
                                </div>
                              </div>
                                <button
                                    className="mt-8"
                                    type="submit"
                                    onClick={handleClick}
                                >
                                    <a
                                      href="#_"
                                      className="relative w-56 inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium  transition duration-300 ease-out border-2 border-amber-500 rounded-full shadow-md group "
                                    >
                                      <span className="absolute inset-0 flex items-center justify-center gap-2 w-full h-full text-black duration-500 -translate-x-full bg-amber-500 group-hover:translate-x-0 ease">
                                        <span>SEND MESSAGE</span>
                                        <FaPaperPlane />
                                      </span>
                                      <span className="absolute flex items-center justify-center w-full h-full text-white  duration-300 transform group-hover:translate-x-full ease transition-all ">{" SEND MESSAGE"}</span>
                                      <span className="relative invisible">T</span>
                                    </a>
                                </button>
                                <ToastContainer />
                            </form>
                          </div>
                        </div>
                      </section>
                </div>
            </div>
      }
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
                            <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                            <polyline points="9 22 9 12 15 12 15 22"/>
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


