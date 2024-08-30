import React from "react";
import Header from "../header-footer-profile/Header";
import Footer from "../header-footer-profile/Footer";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import UserDetails from "../UserDetails";
import Discover from "../Discover";
import Plan from "../Plan";
import Notification from "../Notification";
import Favourate from "../Favourate";


const Profile: React.FC = () => {
  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `Matches`,
      children: (
        <div>
          <UserDetails />
        </div>
      ),
    },
    {
      key: "2",
      label: `Discover`,
      children: (
        <div>
          <Discover />
        </div>
      ),
    },
    {
      key: "3",
      label: `Favorite Profile`,
      children: (
        <div>
          <Favourate />
        </div>
      ),
    },
    {
      key: "4",
      label: `Plan`,
      children: (
        <div>
          <Plan />
        </div>
      ),
    },

    {
      key: "6",
      label: `Notifications`,
      children: (
        <div>
          <Notification />
        </div>
      ),
    },
  ];

  return (
    <div className="">
      <Header />
      <div className="min-h-screen bg-[#E6F2F7]">
        <div className="">
          <div className="">
            <Image
              src="/bigad.png"
              width={150}
              height={0}
              alt="profile"
              className="h-40 w-full md:w-full lg:w-full"
            />
          </div>
          <div className="flex flex-col px-2 py-10 lg:px-20">
            <h1>User Profile</h1>
            <div className="">
              <Tabs defaultActiveKey="1" items={items} className="#007EAF" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
