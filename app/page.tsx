import Image from "next/image";
import { loremIpsum } from "@/app/loremIpsum";

export default function Home() {
  return (
    <div className="bg-white min-h-screen min-w-screen">
      <h1 className="text-black">{loremIpsum}</h1>
    </div>
  );
}