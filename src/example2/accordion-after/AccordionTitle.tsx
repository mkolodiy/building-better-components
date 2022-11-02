import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick: () => void;
};

export function AccordionTitle({ children, onClick }: Props) {
  const handleOnClick = () => {
    onClick();
  };
  return (
    <div
      className="cursor-pointer border-2 border-solid border-gray-400 p-2"
      onClick={handleOnClick}
    >
      {children}
    </div>
  );
}
