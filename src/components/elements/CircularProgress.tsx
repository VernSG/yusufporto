import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export default function CircularProgress({ value }: { value: number }) {
  return (
    <div data-testid="progress" className="h-16 w-16">
      <CircularProgressbar
        value={value}
        text={`${value}`}
        background
        className="text-xl"
        styles={buildStyles({
          backgroundColor: "#E4FBEF",
          textColor: "#04CC68",
          pathColor: "#04CC68",
          trailColor: "transparent",
        })}
      />
    </div>
  );
}
