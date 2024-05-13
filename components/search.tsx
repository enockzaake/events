"use client";
import { redirect, usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const params = new URLSearchParams(searchParams);
    const form = new FormData(e.target as HTMLFormElement);

    const searchValue = form.get("search");
    if (searchValue) {
      params.set("query", searchValue.toString());
    } else {
      params.delete("query");
    }
    if (pathname === "/") {
      router.push(`events/?${params.toString()}`);
    } else {
      router.replace(`${pathname}?${params.toString()}`);
    }
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        className="flex w-[900px] mx-auto items-center px-6 py-4 mt-8 font-semibold text-black border border-black transition-all duration-100 rounded-lg sm:mt-16"
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button className="bg-green-500 p-2 rounded ml-12 mt-4">SUBMIT</button>
    </form>
  );
};

export default Search;
