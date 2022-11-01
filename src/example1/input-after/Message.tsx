type Props = {
  message: string | string[];
  type?: "error" | "info" | "base";
};

// @ts-ignore
const typeToColor: Record<Props["type"], string> = {
  base: "",
  error: "text-red-500",
  info: "text-cyan-500",
};

export function Message({ message, type = "base" }: Props) {
  if (Array.isArray(message)) {
    return (
      <span className="flex flex-col gap-1">
        {message.map((line, index) => (
          <span key={index} className={typeToColor[type]}>
            {line}
          </span>
        ))}
      </span>
    );
  }

  return <span className={typeToColor[type]}>{message}</span>;
}
