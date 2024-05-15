import { BLOG_API_ENDPOINT } from "@/constants";
import axios from "axios";
import { notFound } from "next/navigation";

export async function getBlog(slug: string = "") {
  const response = await axios.get(`${BLOG_API_ENDPOINT}?slug=${slug}`);

  if (response.status === 404) {
    notFound();
  }

  return response.data;
}
