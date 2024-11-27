import Link from "next/link";
import { FaFacebook } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white ">
      {/* Main Container */}
      <div className="bg-white m-20 p-16 shadow-lg rounded-md p-8 w-[90%] max-w-lg text-center">
        {/* Header Text */}
        <h1 className="text-[1.5rem] font-normal text-main  leading-6">
          Before continuing to the application, please subscribe on these social media platforms.
        </h1>

        {/* Social Media Icon */}
        <div className="mt-6">
          <div className="flex justify-center items-center mb-6">
            <button className="w-12 h-12 rounded-full flex items-center justify-center ">
            <Link href="https://www.facebook.com/SohaibTouseef">
            <FaFacebook className='text-white  h-9 w-9 rounded-full  bg-blue-800 pt-1 pb-1' /></Link>
            </button>
          </div>

          {/* Continue Button */}
          <button className="w-full bg-main hover:bg-main opacity-50 text-white font-semibold text-[16px] py-3 rounded-md">
            CONTINUE
          </button>
        </div>

        {/* Link for Admit Card */}
        <div className="mt-4">
          <Link href="/admit-card">
            <p className="text-blue-500 underline text-[14px]"><span className="text-black">Already applied?</span> Get Admit Card</p>
          </Link>
        </div>
      </div>

      {/* Footer Navigation */}
      <div className="flex items-center justify-center mt-6 space-x-2 text-[1rem] text-main">
        <span className="font-medium"><span className="border-2 border-main rounded-full h-[50px] w-[50px] px-2 py-1 mx-1">1</span>Facebook</span>
        <span className="">____</span>
        <span className="font-medium"><span className="border-2 border-main rounded-full h-[50px] w-[50px] px-2 py-1 mx-1">2</span>YouTube</span>
        <span className="">____</span>
        <span className="font-medium"><span className="border-2 border-main rounded-full h-[50px] w-[50px] px-2 py-1 mx-1">3</span>Twitter</span>
        <span className="">____</span>
        <span className="font-medium"><span className="border-2 border-main rounded-full h-[50px] w-[50px] px-2 py-1 mx-1">4</span>Instagram</span>
        <span className="">____</span>
        <span className="font-medium"><span className="border-2 border-main rounded-full h-[50px] w-[50px] px-2 py-1 mx-1">5</span>Apply</span>
      </div>
    </div>
  );
}
