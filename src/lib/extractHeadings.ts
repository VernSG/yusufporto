import { Headings, ContentBlock } from "../types";

type HeadingStyle = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

const HEADING_LEVELS: Record<HeadingStyle, number> = {
  h1: 1,
  h2: 2,
  h3: 3,
  h4: 4,
  h5: 5,
  h6: 6,
};

export const extractHeadings = (blocks: ContentBlock[]): Headings[] => {
  const headings: Headings[] = [];

  blocks.forEach((block) => {
    if (block._type === "block" && block.style) {
      const level = HEADING_LEVELS[block.style as HeadingStyle];
      if (level && block.children?.[0]?.text) {
        headings.push({
          level,
          text: block.children[0].text,
          headingId: block._key,
        });
      }
    }
  });

  return headings;
};
