import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  direction?: "vertical" | "horizontal";
};

export function AccordionItem({ children, direction = "vertical" }: Props) {
  return (
    <div
      className={`flex ${direction === "vertical" ? "flex-col" : "flex-row"}`}
    >
      {children}
    </div>
  );
}
