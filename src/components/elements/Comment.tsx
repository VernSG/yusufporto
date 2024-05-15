"use client";
import Giscus, { Repo, Theme } from "@giscus/react";
import { useTheme } from "next-themes";

export default function Comment({
  marginTop = "mt-16",
}: {
  marginTop?: string;
}) {
  const { theme } = useTheme();

  return (
    <section className={`${marginTop} h-fit w-full`}>
      <Giscus
        id="comments"
        repo={(process.env.NEXT_PUBLIC_GISCUS_REPO as Repo) || ""}
        repoId={process.env.NEXT_PUBLIC_GISCUS_REPO_ID || ""}
        category={process.env.NEXT_PUBLIC_GISCUS_CATEGORY}
        categoryId={process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID}
        mapping="pathname"
        term="Welcome to @giscus/react component!"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme={theme as Theme}
        lang="en"
        loading="lazy"
      />
    </section>
  );
}
