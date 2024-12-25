import Link from "next/link";
import { Metadata } from "next";
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import { fetchGithubData } from "@/services/github";
import { GITHUB_ACCOUNTS } from "@/constants/github";
import GithubCalendar from "./github-calendar";
import GithubOverview from "./github-overview";
import { getALLTimeSinceToday, getReadStats } from "@/services/wakatime";
import PageTitle from "@/components/elements/PageTitle";
import WakatimeOverview from "./wakatime-overview";
import { ClockIcon } from "lucide-react";
import WakatimeActive from "./wakatime-active";
import Repos from "./repos.";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "My activity dashboard as software engineer",
  alternates: {
    canonical: "https://yusufs.me/dashboards",
  },
};

const DashboardsPage = async () => {
  const readStatsResponse = await getReadStats();
  const allTimeSinceTodayResponse = await getALLTimeSinceToday();

  const wakatime = {
    ...readStatsResponse.data,
    all_time_since_today: allTimeSinceTodayResponse.data,
  };

  const github = await fetchGithubData(
    GITHUB_ACCOUNTS[0].username,
    GITHUB_ACCOUNTS[0].token,
  );

  return (
    <>
      <div className="container mx-auto p-6">
        <PageTitle
          title="Dashboard"
          description="This is my personal dashboard, built with Next.js API routes deployed as serverless functionsn."
        />
        <div className="space-y-3">
          <h4 className="flex items-center gap-3 font-normal">
            <ClockIcon height={24} width={24} />
            Weekly Statistic
          </h4>
          <p>My WakaTime last 7 days stats.</p>
          <WakatimeOverview data={wakatime} />
          <WakatimeActive data={wakatime} />
        </div>
        <div className="mt-6 space-y-3">
          <h4 className="flex items-center gap-3 font-normal">
            <GitHubLogoIcon height={24} width={24} />
            Contributions
          </h4>
          <div className="flex justify-between">
            <p>My contributions from last year on github.</p>
            <Link href={`https://github.com/${GITHUB_ACCOUNTS[0].username}`}>
              <p>{`@${GITHUB_ACCOUNTS[0].username}`}</p>
            </Link>
          </div>
          <GithubOverview
            data={github?.data?.contributionsCollection?.contributionCalendar}
          />
          <GithubCalendar
            data={github?.data?.contributionsCollection?.contributionCalendar}
          />
          {/* <Repos /> */}
        </div>
      </div>
    </>
  );
};

export default DashboardsPage;
