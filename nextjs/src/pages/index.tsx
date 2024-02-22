import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`container mx-auto ${inter.className}`}>
      <div className="cards">
        <Card
          title="Card Title"
          ctaUrl="/card"
          description="Card Description"
          imageUrl="/flasks.jpg"
        />
      </div>
    </main>
  );
}
