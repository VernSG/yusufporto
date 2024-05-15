import { groq } from "next-sanity";
import { readClient, writeClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetBlogsParams {
  query: string;
  tags: string;
  page: string;
}

export const getBlog = async (params: GetBlogsParams) => {
  const { query, tags, page } = params;

  try {
    const blogs = await readClient.fetch(
      groq`${buildQuery({
        type: "blog",
        query,
        tags,
        page: parseInt(page),
      })}{
        _id,
        title,
        slug,
        readingTime,
        views,
        releaseDate,
        description,
        "image": poster.asset->url,
        tags,
        content,
      }`,
    );

    return blogs;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export async function incrementViews(blogId: string): Promise<void> {
  try {
    const currentViewsQuery = groq`*[_type == "blog" && _id == $blogId][0].views`;
    const currentViews = await readClient.fetch<number>(currentViewsQuery, {
      blogId,
    });

    const updatedViews = currentViews + 1;

    const patchOperation = {
      set: {
        views: updatedViews,
      },
    };

    await writeClient.transaction().patch(blogId, patchOperation).commit();
  } catch (error) {
    console.error(error);
    throw error;
  }
}
