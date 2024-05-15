import clsx from "clsx";

interface StackCardProps {
  name: string;
  icon: JSX.Element;
}

export default function StackCard({ name, icon }: StackCardProps) {
  return (
    <div className="px-2">
      <div
        className={clsx(
          "border__gradient",
          "w-full px-4 py-2",
          "text-sm font-medium md:text-base",
          "flex items-center gap-2",
          "rounded-md",
        )}
      >
        {icon}
        {name}
      </div>
    </div>
  );
}
