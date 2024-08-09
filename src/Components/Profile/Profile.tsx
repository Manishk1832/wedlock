import React from "react";
import Header from "../header-footer-profile/Header";
import Footer from "../header-footer-profile/Footer";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Match from "../Match";

const Profile: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Matches`,
      children: (
        <div>
          <Match />
        </div>
      ),
    },
    {
      key: "2",
      label: `Discover`,
    },
    {
      key: "3",
      label: `Favorite Profile`,
    },
    {
      key: "4",
      label: `Notifications`,
    },
  ];

  return (
    <div className="min-w-screen flex min-h-screen flex-col">
      <Header />
      <div className="flex-grow bg-[#E6F2F7]">
        <div className="flex w-full justify-center">
          <Image
            src="/bigad.png"
            width={150}
            height={200}
            alt="profile"
            className="h-40 w-full"
          />
        </div>
        <div className="px-4 py-6 md:py-10 lg:px-40 2xl:px-20">
          <h1 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl">
            User Profile
          </h1>
          <div className="p-0 md:p-4">
            <Tabs
              defaultActiveKey="1"
              items={items}
              style={{ height: "fit-content", font: "#363636" }}
              className="ant-tabs"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
