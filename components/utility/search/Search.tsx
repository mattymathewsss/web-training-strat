import { useRouter } from "next/router";
import { useState } from "react";

export interface ISearch { }


const Search: React.FC<ISearch> = () => {
  const [searchTerm, SetSearchTerm] = useState<string>('');

  const router = useRouter();

  const submitForm = () => {
    void router.push(`/results?search=${searchTerm}`);
  }

  return (
    <form className="flex flex-col items-center gap-y-5"
      onSubmit={e => {
        e.preventDefault();
        submitForm();
      }}>
      <input
        type="text"
        className="rounded-full border-2 w-5/6 sm:w-96 h-12 px-3"
        value={searchTerm}
        onChange={(e) => SetSearchTerm(e.target.value)}
      />
      <div className="space-x-3">
        <button
          type="submit"
          className="btn-primary"
        >
          Google Search
        </button>
        <button
          type="submit"
          className="btn-primary"
        >
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
};

export default Search;