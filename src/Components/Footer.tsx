"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { MdKeyboardArrowUp } from "react-icons/md";
import { usePathname } from "next/navigation";
import '../app/font.css';

const Footer = () => {
  const pathname = usePathname();

  // Determine if the footer should be hidden
  const hiddenRoutes = [
    "/verification",
    "/register",
    "/questions/",
    "/login",
    "/forgotpassword",
    "/createpassword",
    "/discover",
    "/contact",
    "/changepassword/",
    "/verification/",
    "/user/",
    "/register/",
    "/createpassword/",
    "/personal/",
    "/location/",
    "/profile/",
    "/contact/",
    "/otherdetails/",
    "/qualification/",
    "/successfully/",
    "/photoupload/",
    "/test/"
  ];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  // If the footer should be hidden, return null
  if (isHiddenRoute) {
    return null;
  }

  return (
    <div className="w-full h-auto bg-[#2A2A2A] 8xl:px-32 3xl:px-56 xl:px-24 7xl:px-40">
      <div className="px-6 sm:px-14 text-white space-y-8 sm:py-16 py-10 container mx-auto sm:font-normal">
        <div className="md:flex gap-10 space-y-8">
          <div className="md:w-2/4 space-y-5">
            <div className="flex items-center">
              <Image src="/newlogo.png" alt="logo" width={300} height={100} />
            </div>
            <p className="sm:w-[80%]" style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              In the spirit of reconciliation, Wedlock acknowledges the
              Traditional Custodians of country throughout Australia and their
              connections to land, sea and community. We pay our respect to
              their elders past and present and extend that respect to all
              Aboriginal and Torres Strait Islander peoples today.
            </p>
          </div>
          <div>
            <ul style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <li><Link href="/mission">Mission</Link></li>
              <li><Link href="/career">Career</Link></li>
              <li><Link href="/success-stories">Success Stories</Link></li>
            </ul>
          </div>
          <div>
            <ul style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <li><Link href="/safe-matrimonial-tips">Safe Matrimonial Tips</Link></li>
              <li><Link href="/faqs">FAQs</Link></li>
              <li><Link href="/trust-and-safety">Trust & Safety</Link></li>
            </ul>
          </div>
          <div>
            <ul style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <li><Link href="/community-guidelines/">Community</Link></li>
              <li><Link href="/contact/">Contact</Link></li>
              <li><Link href="/terms-conditions/">Terms</Link></li>
              <li><Link href="/about/">About</Link></li>
              <li><Link href="/privacy-policy/">Privacy</Link></li>
              <li><Link href="/cookies-policy/">Cookies</Link></li>
              <li><Link href="/plan/">Plan</Link></li>
            </ul>
          </div>
          <div>
            <div className="space-y-2" style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              <h1 className="">Social</h1>
              <div className="flex gap-5 text-2xl">
                <FaFacebookF />
                <IoLogoTwitter />
                <FaInstagram />
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="rounded-full bg-[#a5a4a480] h-[2px] w-[95%]"></div>
          <button className="text-white rounded-full ml-8 bg-[#007EAF]  md:w-12 md:h-12 flex items-center justify-center text-4xl">
            {/* <Image src="/arrowup.png" alt="logo" width={20} height={50} /> */}
            <span ><MdKeyboardArrowUp />
            </span>
          </button>
        </div>
        <div className="flex flex-col md:flex-row  items-center md:items-end justify-between mt-4">
          <div style={{ fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
            <h1 className="font-semibold text-base md:text-lg">
              <i>Married at First Sight</i>
            </h1>
            <p className="text-xs md:text-sm pb-4 text-balance md:pb-0">
            Australia’s premier AI-powered e-matchmaking service specializes in fostering connections among individuals from diverse cultural, national, and community backgrounds.
            </p>
          </div>
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h1 className="text-xs sm:text-sm md:text-base" style={{ letterSpacing: '3%', lineHeight: '22px', fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              © 2024 Wedlock Global Service (Australia) Pty Ltd. All rights reserved.
            </h1>
            <h2 className="text-xs sm:text-sm md:text-base" style={{ letterSpacing: '3%', lineHeight: '22px', fontFamily: 'Proxima-Nova-Regular, sans-serif' }}>
              ABN: 36 679 422 738
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
