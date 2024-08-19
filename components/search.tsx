"use client";
import { SearchIcon } from "lucide-react";
import { usePathname, useSearchParams } from "next/navigation";
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
      <div className="flex justify-center mt-12 ">
        <input
          // name="search"
          className="w-[600px] items-center justify-center px-3 py-3 text-black rounded-s-lg text-xl"
          defaultValue={searchParams.get("query")?.toString()}
        />

        <button className="bg-indigo-500 py-3 px-4 rounded-e-lg">
          <SearchIcon />
        </button>
      </div>
    </form>
  );
};

export default Search;
