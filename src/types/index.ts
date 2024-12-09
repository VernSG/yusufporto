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
