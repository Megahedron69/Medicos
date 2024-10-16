import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="bg-teal-900 dark:bg-teal-900 rounded-t-3xl shadow-lg bottom-0 absolute w-full h-auto transition-all duration-300">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link
            href="/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <Image
              src="/logo.svg"
              className="h-8"
              width={30}
              height={30}
              alt="Medicos Logo"
            />
            <span className="text-white self-center text-3xl font-bold whitespace-nowrap dark:text-black">
              Medicos
            </span>
          </Link>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <a href="" target="_blank" className="font-semibold ml-2">
              <li className="flex flex-row flex-wrap justify-center items-center text-gray-200">
                Made with{" "}
                <FaHeart className="text-red-600 ml-2 mr-2 text-center" /> by
                {"  "}
                MegaJJ
              </li>
            </a>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
