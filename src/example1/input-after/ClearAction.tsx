import { ReactComponent as CloseIcon } from "../../assets/close.svg";

export type Props = {
  onClearClick: () => void;
};

export function ClearAction({ onClearClick }: Props) {
  const handleOnClick = () => {
    onClearClick();
  };

  return (
    <button
      className="rounded border-2 border-gray-400 pl-2 pr-2 hover:border-gray-600"
      onClick={handleOnClick}
    >
      <CloseIcon />
    </button>
  );
}
