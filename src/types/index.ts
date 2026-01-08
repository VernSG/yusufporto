export interface BlogItem {
  releaseDate: string;
  description: string;
  tags: Array<string>;
  _id: string;
  title: string;
  slug: {
    _type: string;
    current: string;
  };
  readingTime: string;
  views: number;
  image: string;
  content: any;
}
export interface Repository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
}

export interface Headings {
  level: number;
  text: string;
  headingId: string;
}

export interface SpotifyData {
  is_playing: boolean;
  item: {
    name: string;
    album: {
      name: string;
      artists: Array<{ name: string }>;
      images: [{ url: string }];
    };
    external_urls: {
      spotify: string;
    };
  };
  currently_playing_type: string;
}

export interface ApiResponse {
  data: {
    discord_user: {
      id: string;
      username: string;
      avatar: string;
      discriminator: string;
    };
    discord_status: string;
    active_on_discord_mobile: boolean;
    activities: Activity[];
  };
  statusBeautify: string;
}

export interface Activity {
  id: string;
  name: string;
  type: number;
  details?: string;
  state?: string;
  application_id?: string;
  timestamps?: {
    start?: number;
    end?: number;
  };
  assets?: {
    large_image?: string;
    large_text?: string;
    small_image?: string;
    small_text?: string;
  };
  buttons?: string[];
}

// MDX Component Types
export interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
  [key: string]: unknown;
}

export interface RoundedImageProps {
  alt: string;
  src: string;
  width?: number;
  height?: number;
  className?: string;
}

// Block Types for extractHeadings
export interface ContentBlock {
  _type: string;
  _key: string;
  style?: string;
  children?: Array<{ text: string }>;
}

// Chat Types
export interface ChatMessage {
  role: "user" | "system" | "bot";
  content: string;
}

export interface ChatCommand {
  command: string;
  description: string;
}

// Search/Post Types
export interface PostMetadata {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags: string[];
}

export interface Post {
  metadata: PostMetadata;
  slug: string;
  source?: string;
}

// Tech Stack Types (untuk Card)
export interface TechStackItem {
  label: string;
  icon: React.ReactElement;
}

// Base Card Props (untuk ProjectCard & SertifCard)
export interface BaseCardProps {
  url: string;
  title: string;
  description: string;
  techStack: TechStackItem[];
  image: string;
  imageAlt: string;
}
