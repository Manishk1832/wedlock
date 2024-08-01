"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { usePathname } from "next/navigation";
import '../app/font.css';


const Footer = () => {
  const pathname = usePathname();

  // Determine if the footer should be hidden
  const hiddenRoutes = [
    "/verification/",
    "/register/",
    "/questions/",
    "/login/",
    "/forgotpassword/",
    "/createpassword/",
  ];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  // If the footer should be hidden, return null
  if (isHiddenRoute) {
    return null;
  }

  return (
   
<div className="w-100 h-auto 8xl:px-32  bg-[#2A2A2A] 3xl:px-56 xl:px-24 7xl:px-40">

<div className="px-6 sm:px-14  text-white space-y-8 sm:py-16 py-10 container m-auto sm:font-normal ">
      <div className="md:flex gap-10 space-y-8">
        <div className="md:w-2/4 space-y-5">
          <div className="flex items-center">
            <Image src="/newlogo.png" alt="logo" width={300} height={100} />
          </div>
          <p className="sm:w-[80%] " style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
            In the spirit of reconciliation, Wedlock acknowledges the
            Traditional Custodians of country throughout Australia and their
            connections to land, sea and community. We pay our respect to their
            elders past and present and extend that respect to all Aboriginal
            and Torres Strait Islander peoples today.
          </p>
        </div>
        <div>
          <ul style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
            <li><Link href="/mission" >Mission</Link></li>
            <li><Link href="/career">Career</Link></li>
            <li><Link href="/success-stories">Success Stories</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </div>
        <div>
          <ul style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
            <li><Link href="/safe-matrimonial-tips">Safe Matrimonial Tips</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/trust-and-safety">Trust & Safety</Link></li>
          </ul>
        </div>
        <div>
          <ul style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
            <li><Link href="/legal">Legal</Link></li>
            <li><Link href="/security">Security</Link></li>
            <li><Link href="/terms">Terms</Link></li>
            <li><Link href="/privacy">Privacy</Link></li>
            <li><Link href="/cookies-policy">Cookies Policy</Link></li>
          </ul>
        </div>
        <div>
          <div className="space-y-2" style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
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
      <div className="rounded-full bg-[#a5a4a480] h-[2px]  w-[95%] "></div> 
       <button className="text-white  rounded-full ml-8 bg-[#007EAF] w-12 h-12 flex items-center justify-center text-2xl" >
          <Image src="/arrowup.png" alt="logo" width={20} height={50} />
        </button>
        </div>
      <div className="flex flex-col md:flex-row items-end justify-between h-6">
        <div style={{fontFamily: 'Proxima-Nova-Regular, sans-serif'}}>
          <h1 className="font-semibold">
            <i>Love at first swipe</i>
          </h1>
          <p className="text-xs">
            This website is strictly for matrimonial purposes only and not a
            dating website.
          </p>
        </div>
        <h1 className=" sm:text-[16px]      " style={{letterSpacing: '3%' , lineHeight:'22px', fontFamily: 'Proxima-Nova-Regular, sans-serif'}}  >© 2024 Wedlock Australia. All rights reserved.</h1>
       
      </div>
    </div>

</div>
   
 

  );
};

export default Footer;
