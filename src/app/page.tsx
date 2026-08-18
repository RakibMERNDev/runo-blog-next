import Carousel from "@/components/Carousel/Carousel";

function PopularSection() {
  return (
    <div className="mt-28 max-w-7xl mx-auto text-[#495057FF]">
      <h2 className="text-5xl font-bold  mb-8">Popular Topics</h2>
      <div className="flex justify-between text-sm font-bold">
        <div className="flex gap-5">
          <p>All</p>
          <p>Adventure</p>
          <p>Travel</p>
          <p>Fashion</p>
          <p>Technology</p>
          <p>Branding</p>
        </div>
        <div>
          <p>View All</p>
        </div>
      </div>
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
