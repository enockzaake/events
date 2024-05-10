"use client";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const Search = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

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
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        defaultValue={searchParams.get("query")?.toString()}
      />
      <button className="bg-green-500 p-2 rounded ml-12 mt-4">SUBMIT</button>
    </form>
  );
};

export default Search;
