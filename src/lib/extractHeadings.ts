import { Headings } from "../types";

export const extractHeadings = (blocks: any[]) => {
  const headings: Headings[] = [];

  blocks.forEach((block) => {
    if (block._type === "block" && block.style === "h1") {
      headings.push({
        level: 1,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === "block" && block.style === "h2") {
      headings.push({
        level: 2,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === "block" && block.style === "h3") {
      headings.push({
        level: 3,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === "block" && block.style === "h4") {
      headings.push({
        level: 4,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === "block" && block.style === "h5") {
      headings.push({
        level: 5,
        text: block.children[0].text,
        headingId: block._key,
      });
    } else if (block._type === "block" && block.style === "h6") {
      headings.push({
        level: 5,
        text: block.children[0].text,
        headingId: block._key,
      });
    }
  });

  return headings;
};
