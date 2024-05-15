import clsx from "clsx";

export default function ColorSwatch({
  title,
  subTitle,
  colorClassname,
}: ColorSwatchProps) {
  return (
    <div className={clsx("mt-4 flex items-center gap-2")}>
      <div
        style={{
          backgroundColor: colorClassname,
          backgroundImage: colorClassname,
        }}
        className={clsx(
          "h-10 w-10 rounded",
          "shadow-sm dark:shadow-none",
          "border border-solid border-neutral-200 dark:border-neutral-700",
        )}
      />
      <div className="flex flex-col gap-1">
        <p>{title}</p>
        <p className="secondary text-sm">{subTitle}</p>
      </div>
    </div>
  );
}

interface ColorSwatchProps {
  title: string;
  subTitle: string;
  colorClassname: string;
}
