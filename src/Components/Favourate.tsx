import Image from "next/image";
import React from "react";
import { PiSlidersLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import ProfileCard from "./ProfileCard";

const Favourate = () => {
  const CardData = [
    {
      id: "1",
      member: "Premium",
      name: "Eleanor P",
      GA: "F,29",
      occ: "Senior Developer",
      cast: "Katolik",
      verified: true,
      mstatus: "Never married",
      place: "Mumbai-India",
    },
    {
      id: "1",
      member: "Standard",
      name: "Eleanor P",
      GA: "F,29",
      verified: true,
      occ: "Senior Developer",
      cast: "Katolik",
      mstatus: "Never married",
      place: "Mumbai-India",
    },
    {
      id: "1",
      member: "Exclusive",
      name: "Eleanor P",
      GA: "F,29",
      verified: true,
      occ: "Senior Developer",
      cast: "Katolik",
      mstatus: "Never married",
      place: "Mumbai-India",
    },
  ];
  return (
    <div>
      {/* <div className="flex items-center justify-between">
        <h1 className="font-semibold">Discover your matches</h1>
        <div className="flex items-center gap-10 ">
          <h1 className="text-[#475467]">Filter by your preference</h1>
          <PiSlidersLight className="text-[#061C3D] text-2xl" />
        </div>
      </div> */}
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {CardData.map((data) => (
            <ProfileCard key={data.id} profiles={[data]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Favourate;
