import { type Props as InputProps, Input } from "./Input";
import { type Props as ClearActionProps, ClearAction } from "./ClearAction";

type Props = Omit<InputProps, "action"> & ClearActionProps;

export function ClearableInput(props: Props) {
  const { onClearClick, ...restProps } = props;

  return (
    <Input
      {...restProps}
      // @ts-ignore
      action={<ClearAction onClearClick={onClearClick} />}
    />
  );
}
