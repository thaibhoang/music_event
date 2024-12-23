"use client";

const EventThumbnail = ({ event }) => {
  return (
    <div className="flex gap-4 items-center p-4 rounded-md bg-white">
      <div className="flex flex-col gap-2 p-2 rounded-md bg-[#81BFDA] text-white items-center">
        <div className="">{event.date}</div>
        <div className="">{event.time}</div>
      </div>
      <div className="flex flex-col gap-2 grow">
        <div className="font-bold text-lg">{event.name}</div>
        <div className="">{event.description}</div>
      </div>
      <div className="p-2 rounded-md bg-[#FADA7A]">buy a ticket</div>
    </div>
  );
};

export default EventThumbnail;
