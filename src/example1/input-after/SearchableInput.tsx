import { Props as InputProps, Input } from "./Input";
import { Props as SearchActionProps, SearchAction } from "./SearchAction";

type Props = Omit<InputProps, "action"> & SearchActionProps;

export function SearchableInput(props: Props) {
  const { onSearchClick, ...restProps } = props;

  return (
    <Input
      {...restProps}
      // @ts-ignore
      action={<SearchAction onSearchClick={onSearchClick} />}
    />
  );
}
