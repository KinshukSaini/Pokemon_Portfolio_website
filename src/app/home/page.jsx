import Image from "next/image";
import Navbar from "@/components/Navbar";
import PokedexScreen from "@/components/PokedexScreen";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Navbar/>
      <PokedexScreen/>


    </div>
  );
}
