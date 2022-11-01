import type { HTMLProps, ReactNode } from "react";

export type Props = HTMLProps<HTMLInputElement> & {
  id: string;
  label?: string;
  action?: ReactNode;
  message?: ReactNode;
};

export function Input(props: Props) {
  const { id, label, action = null, message = null, ...restProps } = props;

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
        {action}
      </span>
      {message}
    </div>
  );
}
