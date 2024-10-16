import { type FC } from "react";
import Link from "next/link";
import ThemeSwitcher from "@/app/Utilities/ColorModeSwitcher";
import Image from "next/image";

const Header: FC = () => {
  return (
    <nav className="shadow-sm-light shadow-gray-400 dark:shadow-slate-400 mb-6 rounded-b-3xl">
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="/logo.svg"
            className="h-8"
            alt="Medicos Logo"
            width={30}
            height={30}
          />
          <span className="self-center text-3xl font-bold whitespace-nowrap dark:text-white">
            Medicos
          </span>
        </Link>
        <div className="flex items-center space-x-6 rtl:space-x-reverse">
          <Link href="/auth/login">
            <button className="relative inline-flex h-10 overflow-hidden rounded-lg p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-md shadow-teal-300">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#B2F5EA_0%,#319795_50%,#B2F5EA_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  bg-teal-200 px-3 py-1 text-md font-semibold text-slate-700 backdrop-blur-3xl">
                Login
              </span>
            </button>
          </Link>
          <Link href="/auth/register">
            <button className="inline-flex h-10 animate-shimmer items-center justify-center rounded-lg border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-semiBold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 shadow-md shadow-slate-500">
              Register
            </button>
          </Link>
          <ThemeSwitcher />
        </div>
      </div>
    </nav>
  );
};

export default Header;
