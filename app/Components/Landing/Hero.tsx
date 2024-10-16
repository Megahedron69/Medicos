import { type FC } from "react";
import Link from "next/link";
import Image from "next/image";

type Hero = {
  colorMode: string;
};

const Hero: FC = () => {
  return (
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
      <div className="mr-auto place-self-center lg:col-span-7">
        <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
          Medicine Parser for Accurate Prescriptions
        </h1>
        <p className="max-w-2xl mb-6 font-base  dark:text-muted lg:mb-8 md:text-lg lg:text-xl transition-all duration-300">
          Automatically detect and interpret handwritten prescriptions with
          Medicos for fast, reliable medicine details.
        </p>

        <Link href="/auth/register">
          <button className="relative overflow-hidden inline-flex items-center justify-center px-5 py-3 mr-3 text-semiBold font-medium text-center text-white rounded-lg bg-[#004d4d] hover:bg-teal-800 focus:ring-4 focus:ring-teal-500 dark:focus:ring-teal-900 transition-all duration-500 ease-out shadow-md shadow-slate-500">
            <span className="absolute inset-0 bg-gradient-to-r from-teal-700 to-teal-500 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"></span>
            <span className="relative">Get started</span>
          </button>
        </Link>

        <Link href="#">
          <button className="relative overflow-hidden inline-flex items-center justify-center px-5 py-3 text-semiBold font-medium text-center dark:text-white border border-teal-300 rounded-lg transition-all duration-500 ease-out hover:bg-teal-200 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800 shadow-md shadow-slate-500">
            <span className="absolute inset-0 bg-gradient-to-r from-gray-200 to-teal-200 transform translate-x-full group-hover:translate-x-0 transition-all duration-500 ease-out"></span>
            <span className="relative flex items-center">
              Learn More
              <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </span>
          </button>
        </Link>
      </div>
      <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
        <Image
          src="/assets/Images/medicine.svg"
          alt="mockup"
          width={750}
          height={750}
        />
      </div>
    </div>
  );
};

export default Hero;
