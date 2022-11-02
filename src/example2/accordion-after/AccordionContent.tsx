import { type ReactNode } from "react";

type Props = {
  children: ReactNode;
  isVisible: boolean;
};

export function AccordionContent({ children, isVisible }: Props) {
  return (
    <div className={`p-2 ${isVisible ? "visible" : "hidden"}`}>{children}</div>
  );
}
