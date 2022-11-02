import { useState } from "react";

type Item = {
  title: string;
  content: string;
};

type Props = {
  items: Item[];
};

export function Accordion({ items }: Props) {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleOpenIndex = (index: number) => () => {
    setOpenIndexes((prevOpenIndexes) => {
      if (prevOpenIndexes.includes(index)) {
        return prevOpenIndexes.filter((idx) => idx !== index);
      }

      return [...prevOpenIndexes, index];
    });
  };

  return (
    <div className="w-96">
      {items.map((item, index) => (
        <div key={item.title}>
          <div
            className="cursor-pointer border-2 border-solid border-gray-400 p-2"
            onClick={toggleOpenIndex(index)}
          >
            {item.title}
          </div>
          <div
            className={`p-2 ${
              openIndexes.includes(index) ? "visible" : "hidden"
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
}
