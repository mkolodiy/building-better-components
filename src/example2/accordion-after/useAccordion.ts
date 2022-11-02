import { useState } from "react";

export function useAccordion(initialOpenIndexes: number[] = []) {
  const [openIndexes, setOpenIndexes] = useState<number[]>(initialOpenIndexes);

  const toggleOpenIndex = (index: number) => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((idx) => idx !== index);
      }

      return [...prevOpenIndexes, index];
    });
  };

  return { openIndexes, toggleOpenIndex };
}
