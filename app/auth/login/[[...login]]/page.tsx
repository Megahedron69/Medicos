import Header from "@/app/Components/Landing/Header";
import { SignIn } from "@clerk/nextjs";
import Image from "next/image";
export default function Page() {
  return (
    <div>
      <Header />
      <section className="min-h-screen flex box-border justify-center items-center w-full">
        <div className="bg-teal-200 rounded-3xl flex max-w-6xl p-5 items-center shadow-xl shadow-gray-300 drop-shadow-2xl dark:bg-teal-500">
          <div className="md:w-1/2 px-8">
            <SignIn />
          </div>
          <div className="md:block hidden w-1/2">
            <Image
              width={1200}
              height={800}
              className="rounded-2xl max-h-[1600px]"
              src="/assets/Images/login.svg"
              alt="login form image"
              loading="lazy"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
