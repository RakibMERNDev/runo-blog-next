import Carousel from "@/components/Carousel/Carousel";

function PopularSection() {
  return (
    <div className="mt-28 max-w-7xl mx-auto">
      <h2 className="text-5xl font-bold">Popular Topics</h2>
    </div>
  );
}

export default function Home() {
  return (
    <div>
      <Carousel />
      <PopularSection />
    </div>
  );
}
