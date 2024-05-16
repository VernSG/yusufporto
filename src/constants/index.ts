// export const CV_URL =
//   "https://res.cloudinary.com/dqqmzgesp/image/upload/v1697030578/personal-website/cv.jpg";

export const CV_URL = "/CV.pdf";

export const PROFILE_PICTURE_URL =
  "https://res.cloudinary.com/djsdnb4td/image/upload/v1715884966/4bc2da65-bc94-454a-9ea1-f028e2987c96_onrgmz.jpg";

export const BLOG_API_ENDPOINT =
  process.env.NODE_ENV === "production"
    ? "https://yusufsaputra.vercel.app/api/blog"
    : "http://localhost:3000/api/blog";

export const PAGESPEED_CATEGORIES =
  "&category=accessibility&category=performance&category=best-practices&category=seo";

const ONE_HOUR_IN_SECONDS = 3600;
const ONE_DAY_IN_SECONDS = ONE_HOUR_IN_SECONDS * 24;
const ONE_WEEK_IN_SECONDS = ONE_DAY_IN_SECONDS * 7;
export const REVALIDATE_INTERVAL = ONE_WEEK_IN_SECONDS;
