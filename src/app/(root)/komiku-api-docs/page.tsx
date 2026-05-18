import PageTitle from "@/components/elements/PageTitle";
import {
  BookOpen,
  CheckCircle2,
  Code2,
  Database,
  ExternalLink,
  FileJson,
  Globe2,
  Link as LinkIcon,
  Search,
  ShieldCheck,
} from "lucide-react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Komiku API Docs | Muhammad Yusuf",
  description:
    "Complete API documentation for the Komiku REST API endpoints, response fields, examples, and scraper compatibility notes.",
  alternates: {
    canonical: "https://yusufs.me/komiku-api-docs",
  },
};

const API_BASE_URL = "https://komiku-rest-api.vercel.app";

const endpoints = [
  {
    method: "GET",
    path: "/terbaru",
    title: "Komik Terbaru",
    description:
      "Mengambil daftar update komik terbaru dari halaman publik Komiku.",
    params: [],
    responseFields: [
      "title",
      "originalLink",
      "thumbnail",
      "type",
      "genre",
      "updateTime",
      "latestChapterTitle",
      "latestChapterLink",
      "isColored",
      "updateCountText",
      "mangaSlug",
      "apiDetailLink",
      "apiChapterLink",
    ],
    example: [
      "{",
      '  "title": "Komen Fuufu",',
      '  "originalLink": "https://komiku.org/manga/komen-fuufu/",',
      '  "thumbnail": "https://thumbnail.komiku.org/...",',
      '  "type": "Manga",',
      '  "genre": "Komedi",',
      '  "updateTime": "7 jam lalu",',
      '  "latestChapterTitle": "Chapter 19",',
      '  "latestChapterLink": "https://komiku.org/komen-fuufu-chapter-19/",',
      '  "isColored": false,',
      '  "updateCountText": "Up 1",',
      '  "mangaSlug": "komen-fuufu",',
      '  "apiDetailLink": "/detail-komik/komen-fuufu",',
      '  "apiChapterLink": "/baca-chapter/komen-fuufu/19"',
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/detail-komik/:slug",
    title: "Detail Komik",
    description:
      "Mengambil informasi lengkap komik, sinopsis, metadata, chapter awal/terbaru, daftar chapter, dan rekomendasi serupa.",
    params: [{ name: "slug", value: "komen-fuufu" }],
    responseFields: [
      "title",
      "alternativeTitle",
      "description",
      "sinopsis",
      "thumbnail",
      "info",
      "genres",
      "slug",
      "firstChapter",
      "latestChapter",
      "chapters",
      "similarKomik",
    ],
    example: [
      "{",
      '  "title": "Komen Fuufu",',
      '  "thumbnail": "https://thumbnail.komiku.org/...",',
      '  "genres": ["Comedy", "Fantasy", "Romance"],',
      '  "firstChapter": { "apiLink": "/baca-chapter/komen-fuufu/1" },',
      '  "latestChapter": { "apiLink": "/baca-chapter/komen-fuufu/19" },',
      '  "chapters": []',
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/baca-chapter/:slug/:chapter",
    title: "Baca Chapter",
    description:
      "Mengambil gambar chapter, metadata chapter, info manga, dan navigasi chapter sebelumnya/berikutnya.",
    params: [
      { name: "slug", value: "komen-fuufu" },
      { name: "chapter", value: "19" },
    ],
    responseFields: [
      "title",
      "mangaInfo",
      "description",
      "chapterInfo",
      "images",
      "meta",
      "navigation",
      "additionalDescription",
    ],
    example: [
      "{",
      '  "title": "Komen Fuufu Chapter 19",',
      '  "mangaInfo": { "slug": "komen-fuufu" },',
      '  "images": [',
      '    { "src": "https://img.komiku.org/upload5/...", "id": "1" }',
      "  ],",
      '  "navigation": { "allChapters": "/detail-komik/komen-fuufu" }',
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/search?q=:keyword",
    title: "Pencarian Komik",
    description:
      "Mencari komik berdasarkan keyword dan mengembalikan daftar hasil ringkas.",
    params: [{ name: "q", value: "one" }],
    responseFields: [
      "status",
      "message",
      "keyword",
      "url",
      "total",
      "data",
    ],
    example: [
      "{",
      '  "status": true,',
      '  "keyword": "one",',
      '  "total": 10,',
      '  "data": [',
      '    { "title": "hitoner", "slug": "hitoner", "href": "/detail-komik/hitoner/" }',
      "  ]",
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/pustaka",
    title: "Pustaka Komik",
    description:
      "Mengambil daftar komik dari pustaka halaman pertama, termasuk chapter awal dan terbaru.",
    params: [],
    responseFields: ["page", "results"],
    example: [
      "{",
      '  "page": 1,',
      '  "results": [',
      '    { "title": "Komen Fuufu", "detailUrl": "/detail-komik/komen-fuufu" }',
      "  ]",
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/pustaka/page/:page",
    title: "Pustaka Pagination",
    description: "Mengambil pustaka komik berdasarkan nomor halaman.",
    params: [{ name: "page", value: "2" }],
    responseFields: ["page", "results"],
    example: '{ "page": 2, "results": [] }',
  },
  {
    method: "GET",
    path: "/komik-populer",
    title: "Komik Populer",
    description:
      "Mengambil komik populer yang dikelompokkan sebagai manga, manhwa, dan manhua.",
    params: [],
    responseFields: ["manga", "manhwa", "manhua"],
    example: [
      "{",
      '  "manga": { "title": "Manga Populer", "items": [] },',
      '  "manhwa": { "title": "Manhwa Populer", "items": [] },',
      '  "manhua": { "title": "Manhua Populer", "items": [] }',
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/komik-populer/manga",
    title: "Manga Populer",
    description: "Mengambil subset manga populer saja.",
    params: [],
    responseFields: ["title", "items"],
    example: '{ "title": "Manga Populer", "items": [] }',
  },
  {
    method: "GET",
    path: "/komik-populer/manhwa",
    title: "Manhwa Populer",
    description: "Mengambil subset manhwa populer saja.",
    params: [],
    responseFields: ["title", "items"],
    example: '{ "title": "Manhwa Populer", "items": [] }',
  },
  {
    method: "GET",
    path: "/komik-populer/manhua",
    title: "Manhua Populer",
    description: "Mengambil subset manhua populer saja.",
    params: [],
    responseFields: ["title", "items"],
    example: '{ "title": "Manhua Populer", "items": [] }',
  },
  {
    method: "GET",
    path: "/rekomendasi",
    title: "Rekomendasi",
    description:
      "Mengambil daftar rekomendasi/ranking komik dari homepage Komiku.",
    params: [],
    responseFields: ["title", "originalLink", "apiDetailLink", "thumbnail"],
    example: '[{ "title": "Tsue to Tsurugi no Wistoria" }]',
  },
  {
    method: "GET",
    path: "/genre-all",
    title: "Semua Genre",
    description:
      "Mengambil daftar genre yang tersedia, lengkap dengan slug dan link API internal.",
    params: [],
    responseFields: ["title", "slug", "apiGenreLink", "titleAttr"],
    example: '[{ "title": "Action", "slug": "action", "apiGenreLink": "/genre/action" }]',
  },
  {
    method: "GET",
    path: "/genre-rekomendasi",
    title: "Genre Rekomendasi",
    description:
      "Mengambil genre pilihan seperti Isekai, Fantasi, Berwarna, dan Tamat.",
    params: [],
    responseFields: [
      "title",
      "slug",
      "originalLink",
      "readLink",
      "apiGenreLink",
      "thumbnail",
    ],
    example: '[{ "title": "Isekai", "apiGenreLink": "/genre/isekai" }]',
  },
  {
    method: "GET",
    path: "/genre/:slug",
    title: "Detail Genre",
    description:
      "Mengambil daftar komik berdasarkan genre halaman pertama.",
    params: [{ name: "slug", value: "action" }],
    responseFields: [
      "success",
      "genre",
      "currentPage",
      "totalManga",
      "hasNextPage",
      "nextPageUrl",
      "data",
      "debug",
    ],
    example: [
      "{",
      '  "success": true,',
      '  "genre": "action",',
      '  "totalManga": 10,',
      '  "nextPageUrl": "/genre/action/page/2",',
      '  "data": []',
      "}",
    ].join("\n"),
  },
  {
    method: "GET",
    path: "/genre/:slug/page/:page",
    title: "Detail Genre Pagination",
    description: "Mengambil daftar komik genre berdasarkan nomor halaman.",
    params: [
      { name: "slug", value: "action" },
      { name: "page", value: "2" },
    ],
    responseFields: [
      "success",
      "genre",
      "currentPage",
      "totalManga",
      "hasNextPage",
      "nextPageUrl",
      "data",
      "debug",
    ],
    example: '{ "success": true, "genre": "action", "currentPage": 2, "data": [] }',
  },
  {
    method: "GET",
    path: "/berwarna",
    title: "Komik Berwarna",
    description: "Mengambil daftar komik berwarna halaman pertama.",
    params: [],
    responseFields: ["status", "message", "data"],
    example: '{ "status": true, "message": "Success", "data": { "results": [] } }',
  },
  {
    method: "GET",
    path: "/berwarna/:page",
    title: "Komik Berwarna Pagination",
    description: "Mengambil daftar komik berwarna berdasarkan nomor halaman.",
    params: [{ name: "page", value: "2" }],
    responseFields: ["status", "message", "data"],
    example: '{ "status": true, "message": "Success", "data": { "page": 2 } }',
  },
];

const responseModels = [
  {
    name: "ComicListItem",
    fields: [
      "title",
      "originalLink / url",
      "thumbnail",
      "type",
      "genre",
      "description",
      "mangaSlug / slug",
      "apiDetailLink / detailUrl",
      "latestChapter / latestChapterTitle",
      "apiChapterLink",
    ],
  },
  {
    name: "ChapterImage",
    fields: ["src", "alt", "id", "fallbackSrc"],
  },
  {
    name: "ApiError",
    fields: ["error", "detail", "message", "status / success"],
  },
];

function buildExampleUrl(path: string, params: Array<{ name: string; value: string }>) {
  return params.reduce(
    (url, param) =>
      url
        .replace(`:${param.name}`, param.value)
        .replace(`=:${param.name}`, `=${param.value}`),
    `${API_BASE_URL}${path}`,
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-neutral-200 bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-light shadow-sm dark:border-neutral-800 dark:bg-neutral-950 dark:text-secondary-dark">
      {children}
    </span>
  );
}

function MethodBadge({ method }: { method: string }) {
  return (
    <span className="rounded-md bg-emerald-500/10 px-2.5 py-1 text-xs font-bold text-emerald-700 ring-1 ring-emerald-500/25 dark:text-emerald-300">
      {method}
    </span>
  );
}

export default function ApiDocsPage() {
  return (
    <div className="p-8">
      <PageTitle
        title="Komiku REST API Docs"
        description="Dokumentasi endpoint untuk backend Express.js Komiku scraper yang memakai halaman publik komiku.org."
      />

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border__color bg-white p-5 shadow-sm dark:bg-neutral-950">
          <Globe2 className="mb-4 h-6 w-6 text-primary-gradient" />
          <p className="primary text-sm font-bold">Base URL</p>
          <code className="mt-2 block overflow-x-auto rounded-md bg-neutral-100 px-3 py-2 text-sm text-secondary-light dark:bg-neutral-900 dark:text-secondary-dark">
            {API_BASE_URL}
          </code>
        </div>
        <div className="rounded-lg border__color bg-white p-5 shadow-sm dark:bg-neutral-950">
          <ShieldCheck className="mb-4 h-6 w-6 text-primary-gradient" />
          <p className="primary text-sm font-bold">Source</p>
          <p className="secondary mt-2 text-sm leading-6">
            Scraper mengambil HTML publik dari komiku.org dan menghindari
            endpoint lama yang rawan SSL mismatch.
          </p>
        </div>
        <div className="rounded-lg border__color bg-white p-5 shadow-sm dark:bg-neutral-950">
          <FileJson className="mb-4 h-6 w-6 text-primary-gradient" />
          <p className="primary text-sm font-bold">Format</p>
          <p className="secondary mt-2 text-sm leading-6">
            Semua endpoint mengembalikan JSON dan mempertahankan field lama yang
            dipakai frontend.
          </p>
        </div>
      </section>

      <section className="mb-12 rounded-lg border__color bg-white p-5 dark:bg-neutral-950">
        <div className="mb-5 flex items-center gap-3">
          <Database className="h-5 w-5 text-primary-gradient" />
          <h2 className="primary text-lg font-bold">Response Models</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {responseModels.map((model) => (
            <div
              key={model.name}
              className="rounded-lg border border-neutral-200 p-4 dark:border-neutral-800"
            >
              <p className="primary font-semibold">{model.name}</p>
              <ul className="mt-3 space-y-2">
                {model.fields.map((field) => (
                  <li
                    key={field}
                    className="secondary flex items-start gap-2 text-sm"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" />
                    <code>{field}</code>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <SectionLabel>Endpoints</SectionLabel>
            <h2 className="primary mt-3 text-xl font-bold">
              Complete API Reference
            </h2>
          </div>
          <p className="secondary max-w-md text-sm leading-6">
            Gunakan URL contoh di bawah untuk test cepat dengan browser, fetch,
            Postman, atau curl.
          </p>
        </div>

        {endpoints.map((endpoint) => {
          const exampleUrl = buildExampleUrl(endpoint.path, endpoint.params);

          return (
            <article
              key={`${endpoint.method}-${endpoint.path}`}
              className="rounded-lg border__color bg-white p-5 shadow-sm dark:bg-neutral-950"
            >
              <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <MethodBadge method={endpoint.method} />
                    <code className="rounded-md bg-neutral-100 px-2.5 py-1 text-sm font-semibold text-primary-light dark:bg-neutral-900 dark:text-primary-dark">
                      {endpoint.path}
                    </code>
                  </div>
                  <h3 className="primary mt-4 text-lg font-bold">
                    {endpoint.title}
                  </h3>
                  <p className="secondary mt-2 max-w-2xl text-sm leading-6">
                    {endpoint.description}
                  </p>
                </div>
                <a
                  href={exampleUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-fit items-center gap-2 rounded-md border border-neutral-200 px-3 py-2 text-sm font-semibold text-primary-light transition hover:border-primary-gradient hover:text-primary-gradient dark:border-neutral-800 dark:text-primary-dark"
                >
                  Try endpoint
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="mt-5 grid gap-4 lg:grid-cols-[1fr_1.2fr]">
                <div className="space-y-4">
                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <LinkIcon className="h-4 w-4 text-primary-gradient" />
                      <p className="primary text-sm font-bold">Example URL</p>
                    </div>
                    <code className="block overflow-x-auto rounded-md bg-neutral-100 p-3 text-xs leading-6 text-secondary-light dark:bg-neutral-900 dark:text-secondary-dark">
                      {exampleUrl}
                    </code>
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <Search className="h-4 w-4 text-primary-gradient" />
                      <p className="primary text-sm font-bold">Parameters</p>
                    </div>
                    {endpoint.params.length ? (
                      <ul className="space-y-2">
                        {endpoint.params.map((param) => (
                          <li
                            key={param.name}
                            className="secondary rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800"
                          >
                            <code className="primary font-semibold">
                              {param.name}
                            </code>
                            <span className="mx-2">example:</span>
                            <code>{param.value}</code>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="secondary rounded-md border border-neutral-200 px-3 py-2 text-sm dark:border-neutral-800">
                        No parameters.
                      </p>
                    )}
                  </div>

                  <div>
                    <div className="mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4 text-primary-gradient" />
                      <p className="primary text-sm font-bold">
                        Response Fields
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {endpoint.responseFields.map((field) => (
                        <code
                          key={field}
                          className="rounded-md bg-neutral-100 px-2.5 py-1 text-xs text-secondary-light dark:bg-neutral-900 dark:text-secondary-dark"
                        >
                          {field}
                        </code>
                      ))}
                    </div>
                  </div>
                </div>

                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Code2 className="h-4 w-4 text-primary-gradient" />
                    <p className="primary text-sm font-bold">
                      Example Response
                    </p>
                  </div>
                  <pre className="max-h-72 overflow-auto rounded-md bg-neutral-950 p-4 text-xs leading-6 text-neutral-100">
                    <code>{endpoint.example}</code>
                  </pre>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
}
