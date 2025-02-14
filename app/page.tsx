import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "OG Image 101",
  description: "OG Image example",
  openGraph: {
    images: [
      {
        // Also see layout.tsx where we specify the hostname
        url: `/api/image?title=${encodeURIComponent("OG Image 101")}`,
      },
    ],
  },
};

export default function Home() {
  return (
    <div className="p-4">
      <Image
        className="rounded-lg border"
        src={`/api/image?title=${encodeURIComponent("OG Image 101")}`}
        alt="OG Images"
        width={1200}
        height={630}
      />
    </div>
  );
}
