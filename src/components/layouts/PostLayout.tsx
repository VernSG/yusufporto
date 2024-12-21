// import { ReactNode } from "react";

// interface PostLayoutProps {
//   title: string;
//   summary: string;
//   publishedAt: string;
//   tags?: string[]; // Tags bersifat opsional
//   children: ReactNode; // Konten anak (artikel)
// }

// export default function PostLayout({
//   title,
//   summary,
//   publishedAt,
//   tags = [],
//   children,
// }: PostLayoutProps) {
//   return (
//     <main className="post-layout mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8">
//       {/* Header untuk metadata artikel */}
//       <header className="mb-12 text-center">
//         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
//           {title}
//         </h1>
//         <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-400">
//           {summary}
//         </p>
//         <time
//           className="mt-2 block text-sm text-neutral-500 dark:text-neutral-400"
//           dateTime={publishedAt}
//         >
//           {new Date(publishedAt).toLocaleDateString("id-ID", {
//             year: "numeric",
//             month: "long",
//             day: "numeric",
//           })}
//         </time>
//         {tags.length > 0 && (
//           <div className="mt-6 flex flex-wrap justify-center gap-3">
//             {tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-800 dark:bg-gray-800 dark:text-gray-200"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>
//         )}
//       </header>

//       {/* Konten utama */}
//       <div className="content prose dark:prose-invert mx-auto">{children}</div>
//     </main>
//   );
// }
