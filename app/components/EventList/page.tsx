"use client";

import { time } from "console";
import EventThumbnail from "../EventThumbnail/page";

const music_events = [
  {
    id: 1,
    time: "21:30",
    date: "2023-05-11",
    name: "Taylor Show 1",
    description: "Some detail about the show",
  },
  {
    id: 2,
    time: "21:30",
    date: "2023-05-11",
    name: "Taylor Show 2",
    description: "Some detail about the show",
  },
  {
    id: 3,
    time: "21:30",
    date: "2023-05-11",
    name: "Taylor Show 2",
    description: "Some detail about the show",
  },
  {
    id: 4,
    time: "21:30",
    date: "2023-05-11",
    name: "Taylor Show 2",
    description: "Some detail about the show",
  },
  {
    id: 5,
    time: "21:30",
    date: "2023-05-11",
    name: "Taylor Show 2",
    description: "Some detail about the show",
  },
];
export default function EventList() {
  return (
    <>
      <div className="text-2xl font-bold">Music Events</div>
      <div className="text-gray-700">Hanoi, Vietnam</div>
      {music_events.map((event) => (
        <EventThumbnail key={event.id} event={event} />
      ))}
    </>
  );
}
