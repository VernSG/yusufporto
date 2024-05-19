import NumberTicker from "@/components/magicui/numberticker";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

interface GithubOverviewItemProps {
  label: string;
  value: number;
  unit?: string;
}

const GithubOverviewItem = ({
  label,
  value,
  unit = "",
}: GithubOverviewItemProps) => (
  <Card>
    <CardHeader className="text-sm dark:text-neutral-400">{label}</CardHeader>
    <CardContent>
      <NumberTicker
        className="text-xl font-medium text-green-600 lg:text-2xl"
        value={value}
      />
      {unit && <span className="text-sm dark:text-neutral-400"> {unit}</span>}
    </CardContent>
  </Card>
);

export default GithubOverviewItem;