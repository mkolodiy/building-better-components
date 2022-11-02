import { AccordionContent } from "./AccordionContent";
import { AccordionItem } from "./AccordionItem";
import { AccordionTitle } from "./AccordionTitle";
import { useAccordion } from "./useAccordion";

export type Item = {
  title: string;
  content: string;
};

export type Props = {
  items: Item[];
};

export function Accordion({ items }: Props) {
  const { openIndexes, toggleOpenIndex } = useAccordion();

  const handleOnToggle = (index: number) => () => {
    toggleOpenIndex(index);
  };

  return (
    <div className="w-96">
      {items.map((item, index) => (
        <AccordionItem key={item.title}>
          <AccordionTitle onClick={handleOnToggle(index)}>
            {item.title}
          </AccordionTitle>
          <AccordionContent isVisible={openIndexes.includes(index)}>
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </div>
  );
}
