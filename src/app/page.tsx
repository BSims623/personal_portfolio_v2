import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col w-full h-screen gap-2 items-center justify-center">
      <div>Hello Next.js!</div>
      <ThemeSwitcher />
    </main>
  );
}
