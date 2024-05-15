"use client";
const BlockContent = require("@sanity/block-content-to-react");
import { useCopyToClipboard } from "@/hooks/useCopyToClipboard";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import styles from "@/styles/blogDetails.module.css";
import clsx from "clsx";
import Image from "next/image";
import * as React from "react";
import { BiCheckDouble, BiSolidCopyAlt } from "react-icons/bi";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export default function Article({ content }: any) {
  const [value, copy] = useCopyToClipboard();
  const [isCopied, setIsCopied] = React.useState<boolean>(false);
  const isTableSize = useMediaQuery("(min-width: 768px)");
  const isLaptopSize = useMediaQuery("(min-width: 1024px)");

  const handleCopy = (code: string) => {
    copy(code);
    setIsCopied(true);
  };

  React.useEffect(() => {
    if (isCopied) {
      const timeout = setTimeout(() => {
        setIsCopied(false);
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [isCopied]);

  const serializers = {
    types: {
      code: (props: any) => (
        <div className="group relative mb-5">
          <SyntaxHighlighter
            language={props.node.language}
            style={a11yDark}
            customStyle={{
              padding: "16px",
              fontSize: "14px",
              borderRadius: "8px",
            }}
            PreTag="pre"
            wrapLongLines={isTableSize ? (isLaptopSize ? false : true) : false}
          >
            {props.node.code}
          </SyntaxHighlighter>

          <button
            className={clsx(
              "absolute right-1 top-1",
              "primary rounded-md p-2 text-sm",
            )}
            onClick={() => handleCopy(props.node.code)}
            aria-label="Copy code to clipboard"
          >
            {!isCopied ? (
              <BiSolidCopyAlt size={18} className="text-neutral-200" />
            ) : (
              <BiCheckDouble size={18} className="text-green-300" />
            )}
          </button>
        </div>
      ),

      block: (props: any) => {
        const { node, children } = props;
        const { style, _key } = node;

        if (
          style.startsWith("h") &&
          style.length === 2 &&
          parseInt(style[1]) >= 2 &&
          parseInt(style[1]) <= 6
        ) {
          const HeadingTag = style;
          const headingId = _key;
          return (
            <HeadingTag id={headingId} className="scroll-mt-28">
              {children}
            </HeadingTag>
          );
        } else {
          return <p>{children}</p>;
        }
      },

      image: (props: any) => {
        const url = props.node.asset._ref;
        const cleanUrl = url
          .replace("image-", "")
          .replace("-webp", ".webp")
          .replace("-gif", ".gif");

        const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
        const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;
        const uri = `https://cdn.sanity.io/images/${projectId}/${dataset}/${cleanUrl}`;

        return (
          <Image
            src={uri}
            alt={props.node.alt}
            width={1920}
            height={1080}
            placeholder="blur"
            blurDataURL={uri}
            className="h-auto w-auto"
          />
        );
      },
    },
  };

  return (
    <article className={styles.content}>
      <BlockContent
        blocks={content}
        projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
        dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
        serializers={serializers}
      />
    </article>
  );
}
