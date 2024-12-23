import EventList from "./components/EventList/page";
import EventThumbnail from "./components/EventThumbnail/page";

export default function Home() {
  return (
    <div className="flex flex-col bg-[#B1F0F7] text-black items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full md:w-[80%] lg:w-[60%] flex flex-col gap-4">
        <EventList />
      </div>
    </div>
  );
}
