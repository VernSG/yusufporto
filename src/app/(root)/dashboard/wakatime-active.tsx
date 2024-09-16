import { cn } from "@/lib/utils";
import WakatimeProgress from "./wakatime-progress";

interface ItemProps {
  name: string;
  hours: number;
  minutes: number;
}

interface WakatimeActiveProps {
  data?: {
    languages?: ItemProps[];
    categories?: ItemProps[];
  };
}

const sumTotalFromArray = <T extends { hours: number; minutes: number }>(
  data: T[],
  key: keyof T
) => {
  return (
    data.reduce(
      (previousValue, currentValue) =>
        previousValue + (currentValue[key] as number),
      0
    ) ?? 0
  );
};

const WakatimeActive = ({ data }: WakatimeActiveProps) => {
  const getLanguagesTotalHours = sumTotalFromArray<ItemProps>(
    data?.languages || [],
    "hours"
  );
  const getLanguagesTotalMinutes = sumTotalFromArray<ItemProps>(
    data?.languages || [],
    "minutes"
  );
  const getLanguagesTotalTimeDisplay = `${
    Math.floor((getLanguagesTotalMinutes % 3600) / 60) + getLanguagesTotalHours
  } hrs ${getLanguagesTotalMinutes} mins`;

  const getEditorTotalHours = sumTotalFromArray<ItemProps>(
    data?.categories || [],
    "hours"
  );
  const getEditorTotalMinutes = sumTotalFromArray<ItemProps>(
    data?.categories || [],
    "minutes"
  );
  const getEditorTotalTimeDisplay = `${
    Math.floor((getEditorTotalMinutes % 3600) / 60) + getEditorTotalHours
  } hrs ${getEditorTotalMinutes} mins`;

  const actives = [
    {
      title: "Languages",
      total: getLanguagesTotalTimeDisplay,
      data: data?.languages,
      styles: {
        bg: "bg-gradient-to-r from-amber-400 to-rose-600",
      },
    },
    {
      title: "Categories",
      total: getEditorTotalTimeDisplay,
      data: data?.categories,
      styles: {
        bg: "bg-gradient-to-r from-blue-400 to-purple-600",
      },
    },
  ];

  if (!data) {
    return null;
  }

  return (
    <div className="mt-2 flex flex-col gap-6 sm:flex-row sm:gap-4">
      {actives.map((item) => (
        <div
          key={item?.title}
          className={cn(
            item?.styles?.bg,
            "relative flex flex-1 flex-col gap-2 rounded-lg p-[2px]"
          )}
        >
          <div className="h-full w-full rounded-lg bg-background p-2">
            <p className="mb-2 text-lg font-semibold">
              {item?.title}
            </p>

            <ul className="flex flex-col gap-1 px-4 py-3">
              {item?.data?.map((subItem) => (
                <li key={subItem?.name}>
                  <WakatimeProgress
                    data={subItem}
                    className={item?.styles?.bg}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WakatimeActive;