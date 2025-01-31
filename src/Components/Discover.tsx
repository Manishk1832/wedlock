"use client";

import React, { useState } from "react";
import { PiSlidersLight } from "react-icons/pi";
import ProfileCard from "./ProfileCard";
import DiscoverModal from "./DiscoverPageModal/DiscoverModal";
import { useGetProfilesQuery } from "@/Redux/Api/profile.api";
import Pagination from "./Pagination";
import SkeletonCard from "./SkeletonCard/SkeletonCard"; 

const Discover = () => {
  const [filterModelOpen, setFilterModelOpen] = useState(false);
  const skeletonArray = new Array(6).fill(0); 

  const { data, isLoading } = useGetProfilesQuery({});

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

  return (
    <div>
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">Discover your matches</h1>
        <div className="flex items-center gap-10">
          <h1 className="text-[#475467]">Filter by your preference</h1>
          <button onClick={openFilterModel}>
            <PiSlidersLight className="text-2xl text-[#061C3D]" />
          </button>
          <DiscoverModal isVisible={filterModelOpen} onClose={closeFilterModel} />
        </div>
      </div>

      <div className="mt-10">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {isLoading
            ? skeletonArray.map((_, index) => (
                <SkeletonCard key={index} /> // Render skeleton cards when loading
              ))
            : data?.profiles?.map((profile: any) => (
                <ProfileCard key={profile.id} profiles={[profile]} />
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
