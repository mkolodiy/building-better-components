import { useAccordion } from "./useAccordion";

type Item = {
  title: string;
  content: string;
};

type Props = {
  items: Item[];
};

export function OldAccordion({ items }: Props) {
  const { openIndexes, toggleOpenIndex } = useAccordion();

  const handleOnToggle = (index: number) => () => {
    toggleOpenIndex(index);
  };

  return (
    <div className="w-96">
      {items.map((item, index) => (
        <div key={item.title}>
          <div
            className="mb-2 cursor-pointer border-2 border-dotted border-gray-400 p-2"
            onClick={handleOnToggle(index)}
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
