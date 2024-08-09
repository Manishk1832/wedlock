"use client";

import Image from "next/image";
import React, { useState } from "react";
import { PiSlidersLight } from "react-icons/pi";
import { FaRegStar } from "react-icons/fa";
import ProfileCard from "./ProfileCard";
import DiscoverModal from "./DiscoverPageModal/DiscoverModal";
import Favourate from "./Favourate";
import Pagination from "./Pagination";

const Discover = () => {
  const [filterModelOpen, setFilterModelOpen] = useState(false);

  const openFilterModel = () => {
    setFilterModelOpen(true);
  };
  const closeFilterModel = () => {
    setFilterModelOpen(false);
  };
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 5;

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

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
    {
      id: "1",
      member: "Premium",
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
    {
      id: "1",
      member: "Premium",
      name: "Eleanor P",
      GA: "F,29",
      verified: false,
      occ: "Senior Developer",
      cast: "Katolik",
      mstatus: "Never married",
      place: "Mumbai-India",
    },
  ];
  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Discover your matches</h1>
        <div className="flex items-center gap-10">
          <h1 className="text-[#475467]">Filter by your preference</h1>
          <button onClick={openFilterModel}>
            {" "}
            <PiSlidersLight className="text-2xl text-[#061C3D]" />
          </button>
          <DiscoverModal
            isVisible={filterModelOpen}
            onClose={closeFilterModel}
          />{" "}
        </div>
      </div>
      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {CardData.map((data) => (
            <ProfileCard key={data.id} profiles={[data]} />
          ))}
        </div>
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default Discover;
