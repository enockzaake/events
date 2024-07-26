import Search from "@/components/search";
import { Suspense } from "react";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-[#101212] relative to-[#08201D] h-screen">
        <Navbar />
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
