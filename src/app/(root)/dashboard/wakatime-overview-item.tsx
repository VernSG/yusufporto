import {
    Card,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  
  interface WakatimeOverviewItemProps {
    label: string;
    value: string;
  }
  
  const WakatimeOverviewItem = ({ label, value }: WakatimeOverviewItemProps) => (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm text-neutral-600 dark:text-neutral-400">
          {label}
        </CardTitle>
        <CardDescription className="text-black dark:text-white text-lg">
          {value || "-"}
        </CardDescription>
      </CardHeader>
    </Card>
  );
  
  export default WakatimeOverviewItem;