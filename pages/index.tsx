import Image from "next/image";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Landing from "@/components/Landing";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <div>
      <Header />
      <main className="">
        <Landing />
      </main>
    </div>
  );
}
