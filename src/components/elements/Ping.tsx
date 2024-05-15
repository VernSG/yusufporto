import clsx from "clsx";

export default function Ping() {
  return (
    <span className="relative flex h-3 w-3">
      <span
        className={clsx(
          "absolute inline-flex",
          "h-full w-full",
          "rounded-full",
          "bg-gradient-linear opacity-75",
        )}
      />
      <span
        className={clsx(
          "relative inline-flex",
          "h-3 w-3",
          "rounded-full bg-gradient-linear",
        )}
      />
    </span>
  );
}
