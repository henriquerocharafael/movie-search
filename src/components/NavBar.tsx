import { ChangeEvent } from "react";
import Logo from "/logo.svg";

interface NavBarProps {
  movieSearch: string;
  setMovieSearch: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (event: ChangeEvent<HTMLFormElement>) => void;
}

export function NavBar({
  movieSearch,
  setMovieSearch,
  handleSubmit,
}: NavBarProps) {
  return (
    <header>
      <nav className="bg-sky-950 py-5">
        <div className="max-w-7xl flex items-center justify-between my-0 mx-auto">
          <img src={Logo} className="w-37 h-5" />

          <form onSubmit={handleSubmit}>
            <input
              className="mr-2 text-black rounded-md outline-none"
              type="text"
              placeholder="Search Movie"
              onChange={(event: ChangeEvent<HTMLInputElement>) =>
                setMovieSearch(event.target.value)
              }
              value={movieSearch}
            />
            <button className="text-white border rounded-md" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
}
