"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Tabs } from "antd";
import type { TabsProps } from "antd";
import Header from "../../Components/header-footer-profile/Header";
import Footer from "../../Components/header-footer-profile/Footer";
import Match from "@/Components/Match";
import Plan from "@/Components/Plan";
import Notification from "@/Components/Notification";
import Discover from "@/Components/Discover";
import ProtectedRoute from "@/Components/ProtectedRoute";
import { useSelector } from 'react-redux';
import { RootState } from "@/Redux/store";
import { useRouter } from "next/navigation";
import Favourate from "@/Components/Favourate";
import withAuth from "@/Components/WithAuth/WithAuth";
import UserDetails from "@/Components/UserDetails";
import '../../app/globals.css'


const Profile: React.FC = () => {
  const accessToken = useSelector((state:RootState) => state.userReducer.accessToken);

 

  const items: TabsProps["items"] = [
    {
      key: "1",
      label: `My Details`,
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
      key: "5",
      label: `Billing`,
      children: (
        <div>
          {/* <BillingInfo /> */}
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
    <div className="flex min-h-screen flex-col">

        <Header />
      <div className="flex-grow bg-[#E6F2F7]">
        <div className="flex justify-center">
          <Image
            src="/bigad.png"
            width={150}
            height={200}
            alt="profile"
            className="h-14 w-full"
          />
        </div>

        <div className="px-4 py-6 ">
        
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

export default withAuth(Profile);
