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
