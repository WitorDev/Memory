import Image from "next/image";
import NavBar from "@/components/NavBar";
import ItemContainer from "@/components/ItemContainer";

export default function Home() {
  return (
    <>
      <header className="bg-black">
        <NavBar />
      </header>
      {/* Hero Section */}
      <section className="bg-black h-[400px] flex justify-center items-center">
          <h1 className="text-5xl text-white">Mercury</h1>
      </section>
      {/* Content Section */}
    </>
  );
}
