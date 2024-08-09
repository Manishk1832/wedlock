"use client";
import React from "react";
// import Header from "../../Components/header-footer-profile/Header";
// import Footer from "../../Components/header-footer-profile/Footer";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
// import UserDetails from "../../components/UserDetails";
// import BillingInfo from "../../Components";
// import Plan from "../../components/Plan";
// import Notification from "../../components/Notification";
// import Discover from "../../components/Discover";
// import Favourate from "@/components/Favourate";
// import '../../app/globals.css'

const Profile: React.FC = () => {
  // const items: TabsProps["items"] = [
  //   {
  //     key: "1",
  //     label: `My Details`,
  //     children: (
  //       <div>
  //         <UserDetails />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "2",
  //     label: `Discover`,
  //     children: (
  //       <div>
  //         <Discover />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "3",
  //     label: `Favorite Profile`,
  //     children: (
  //       <div>
  //         <Favourate />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "4",
  //     label: `Plan`,
  //     children: (
  //       <div>
  //         <Plan />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "5",
  //     label: `Billing`,
  //     children: (
  //       <div>
  //         <BillingInfo />
  //       </div>
  //     ),
  //   },
  //   {
  //     key: "6",
  //     label: `Notifications`,
  //     children: (
  //       <div>
  //         <Notification />
  //       </div>
  //     ),
  //   },
  // ];

  return (
    <div className="flex min-h-screen flex-col">
      {/* <Header />
      <div className="flex-grow bg-[#E6F2F7]">
        <div className="flex justify-center">
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
      <Footer /> */}
    </div>
  );
};

export default Profile;
