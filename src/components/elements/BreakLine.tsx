import clsx from "clsx";

export default function BreakLine({
  decoration = "border-solid",
  classname,
}: {
  decoration?: string;
  classname?: string;
}) {
  return (
    <div
      className={clsx(
        decoration,
        classname,
        "my-8 border-b",
        "border-gray-300 dark:border-neutral-700",
      )}
    />
  );
}
