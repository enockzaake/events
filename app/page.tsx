import Navbar from "@/components/navbar";
import Search from "@/components/search";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="">LANDING PAGE</div>
      <Search />
      <Link href="/events">
        <button className="bg-blue-500 p-2 rounded ml-12 mt-4">ALL EVENTS</button>
      </Link>
    </>
  );
}
