import { formatDate } from "@/commons/helpers";
import WakatimeOverviewItem from "./wakatime-overview-item";

interface WakatimeOverviewProps {
  data: {
    human_readable_total?: string;
    human_readable_daily_average?: string;
    best_day?: {
      text?: string;
      date?: string;
    };
    all_time_since_today?: {
      text?: string;
    };
    start_date?: string;
    end_date?: string;
  };
}

const WakatimeOverview = ({ data }: WakatimeOverviewProps) => {
    const dailyTotal = data?.human_readable_total || "N/A";
    const dailyAverage = data?.human_readable_daily_average || "N/A";
    const bestDayText = data?.best_day?.text || "N/A";
    const bestDayDate = data?.best_day?.date;
    const allTimeSinceToday = data?.all_time_since_today?.text || "N/A";
    const startDate = data?.start_date ? formatDate(data.start_date) : "";
    const endDate = data?.end_date ? formatDate(data.end_date) : "";
    const bestDay = bestDayDate
      ? `${formatDate(bestDayDate)} (${bestDayText})`
      : "N/A";
  
    return (
      <div className="mb-6 grid gap-6 py-4 sm:grid-cols-2 lg:grid-cols-3">
        <WakatimeOverviewItem label="Start Date" value={startDate} />
        <WakatimeOverviewItem label="End Date" value={endDate} />
        <WakatimeOverviewItem label="Daily Coding Average" value={dailyAverage} />
        <WakatimeOverviewItem label="This Week Coding Time" value={dailyTotal} />
        <WakatimeOverviewItem label="Best Day Coding Time" value={bestDay} />
        <WakatimeOverviewItem
          label="All Time Since Today"
          value={allTimeSinceToday}
        />
      </div>
    );
  };
  

export default WakatimeOverview;