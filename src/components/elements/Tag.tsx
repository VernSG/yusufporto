import clsx from "clsx";

export default function Tag({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"button">) {
  return (
    <button
      {...rest}
      className={clsx(
        "primary",
        "px-1.5 py-0.5",
        "rounded-md font-medium",
        "bg-neutral-200 dark:bg-neutral-800",
        "disabled:cursor-not-allowed",
        "disabled:bg-opacity-20 disabled:text-opacity-20",
      )}
    >
      {children}
    </button>
  );
}
