import About from "@/components/About";
import Bridge from "@/components/Bridge";
import Food from "@/components/Food";
import Query from "@/components/Query";
import Rooms from "@/components/Rooms";
import Slider from "@/components/Slider";

export default function Home() {
  return (
    <>
      <Slider />
      <About />
      <Bridge />
      <Food />
      <Rooms />
      {false && <Query />}
    </>
  );
}
