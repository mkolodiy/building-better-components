import { ReactComponent as SearchIcon } from "../../assets/search.svg";

export type Props = {
  onSearchClick: () => void;
};

export function SearchAction({ onSearchClick }: Props) {
  const handleOnClick = () => {
    onSearchClick();
  };

  return (
    <button
      className="rounded border-2 border-gray-400 pl-2 pr-2 hover:border-gray-600"
      onClick={handleOnClick}
    >
      <SearchIcon />
    </button>
  );
}
