import Search from "@/components/search";
import Link from "next/link";
import { Suspense } from "react";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D] h-screen">
        <header className=" inset-x-0 top-0 z-10 w-full">
          <div className="px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16 lg:h-20">
              <div className="flex-shrink-0">
                <Link href="#" title="" className="flex">
                  <span className="text-white mr-12 ml-6 text-4xl">
                    EVENTLY
                  </span>
                </Link>
              </div>

              <div className="hidden lg:flex lg:items-center lg:justify-center lg:space-x-10">
                <Link
                  href="/events"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                >
                  Events
                </Link>

                <Link
                  href="/solutions"
                  title=""
                  className="text-base text-white transition-all duration-200 hover:text-opacity-80"
                >
                  {" "}
                  Solutions{" "}
                </Link>
              </div>

              <div className="lg:flex lg:items-center lg:justify-end lg:space-x-6 sm:ml-auto">
                <Link
                  href="/dashboard"
                  title=""
                  className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-indigo-500"
                >
                  {" "}
                  Organiser dashboard{" "}
                </Link>
                <Link
                  href="/login"
                  title=""
                  className="hidden text-base text-white transition-all duration-200 lg:inline-flex hover:text-opacity-80"
                >
                  {" "}
                  Log in{" "}
                </Link>

                <Link
                  href="/signup"
                  title=""
                  className="inline-flex items-center justify-center px-3 sm:px-5 py-2.5 text-sm sm:text-base font-semibold transition-all duration-200 text-white bg-white/20 hover:bg-white/40 focus:bg-white/40 rounded-lg"
                  role="button"
                >
                  {" "}
                  Register{" "}
                </Link>
              </div>

              <button
                type="button"
                className="inline-flex p-2 ml-1 text-white transition-all duration-200 rounded-md sm:ml-4 lg:hidden focus:bg-gray-800 hover:bg-gray-800"
              >
                <svg
                  className="block w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>

                <svg
                  className="hidden w-6 h-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </header>

        <section className="pt-24 pb-10 sm:pt-32 sm:pb-16 lg:pb-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-20">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-4xl font-bold sm:text-6xl">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-white">
                  {" "}
                  Find all the latest events
                </span>
              </h1>
              <p className="mt-5 text-base text-white sm:text-xl">
                No more hassle taking loans and making payments. Try Postcrats
                credit card, make your life simple.
              </p>

              <Suspense fallback={"Loading..."}>
                <Search />
              </Suspense>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
