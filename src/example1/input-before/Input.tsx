import type { HTMLProps, ReactNode } from "react";
import { ReactComponent as CloseIcon } from "../../assets/close.svg";
import { ReactComponent as SearchIcon } from "../../assets/search.svg";

type Props = HTMLProps<HTMLInputElement> & {
  id: string;
  label?: string;
  searchAction?: () => void;
  clearAction?: () => void;
  errorMessage?: string;
  infoMessage?: string;
};

export function Input(props: Props) {
  const {
    id,
    label,
    searchAction,
    clearAction,
    errorMessage,
    infoMessage,
    ...restProps
  } = props;

  const renderMessages = () => {
    if (errorMessage) {
      return <span className="text-red-500">{errorMessage}</span>;
    } else if (infoMessage) {
      return <span className="text-cyan-500">{infoMessage}</span>;
    }

    return null;
  };

  const renderActions = () => {
    if (searchAction) {
      return (
        <button
          className="rounded border-2 border-gray-400 pl-2 pr-2 hover:border-gray-600"
          onClick={() => searchAction()}
        >
          <SearchIcon />
        </button>
      );
    } else if (clearAction) {
      return (
        <button
          className="rounded border-2 border-gray-400 pl-2 pr-2 hover:border-gray-600"
          onClick={() => clearAction()}
        >
          <CloseIcon />
        </button>
      );
    }

    return null;
  };

  return (
    <div className="flex flex-col gap-2">
      {label ? (
        <label className="text-xl" htmlFor={id}>
          {label}
        </label>
      ) : null}
      <span className="flex flex-row gap-2">
        <input
          className="rounded border-2 border-gray-400 p-2 text-xl"
          id={id}
          {...restProps}
        />
        {renderActions()}
      </span>
      {renderMessages()}
    </div>
  );
}
