import { ShoppingCart, ExternalLink } from "lucide-react";

interface ProductBoxProps {
  price: string;
  publishedAt: string;
  updatedAt: string;
  sales: number;
  tags: string[];
}

export default function ProductBox({
  price,
  publishedAt,
  updatedAt,
  sales,
  tags,
}: ProductBoxProps) {
  return (
    <div className="rounded-xl bg-gradient-to-r from-blue-500 to-purple-600 p-6 text-white shadow-lg">
      <div className="text-center">
        <div className="text-2xl font-bold">Rp. {price}</div>
        <div className="mt-4 flex justify-center gap-2">
          <a
            href="https://wa.me/6285250872072"
            className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 text-blue-600 shadow-md"
          >
            <ShoppingCart size={18} /> BUY NOW
          </a>
          <button className="flex items-center gap-2 rounded-lg bg-white p-2 text-blue-600 shadow-md">
            <ExternalLink size={18} />
          </button>
        </div>
      </div>
      <div className="mt-6 space-y-2 text-sm">
        <div className="flex items-center gap-2">
          <span className="font-medium">Published on</span> {publishedAt}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Updated on</span> {updatedAt}
        </div>
        <div className="flex items-center gap-2">
          <span className="font-medium">Sales</span> {sales}
        </div>
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="rounded-full bg-white px-3 py-1 text-sm text-blue-600 shadow-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
