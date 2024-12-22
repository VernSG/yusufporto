import { ChevronLeft, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ButtonWithIcon() {
  return (
    <Link href="/blog" legacyBehavior>
      <Button variant={"outline"} className="mt-10">
        <ChevronLeft className="mr-2 h-4 w-4" />
        Back
      </Button>
    </Link>
  );
}
