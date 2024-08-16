"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { RiArrowDropDownLine, RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Login from './model/Login';
import path from 'path';

const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const openLogin = () => setLoginOpen(true);
  const closeLogin = () => setLoginOpen(false);
  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  const isBlueBgRoute = pathname === "/mission/" || pathname === "/advice/" || pathname === "/help" || pathname === "/legal/" || pathname === "/security/" || pathname == "/faqs/" ||     pathname === "/contact/"|| pathname ==="/cookies-policy/" || pathname === "/community-guidelines/"||
  pathname === "/privacy-policy/"||pathname === "/terms-conditions/"||pathname ==="/about/"||pathname === "/plan/"
  const  hiddenRoutes = ["/verification/", "/register/", "/questions/", "/login/", "/forgotpassword/", "/createpassword/","/ChangePassword/" ,"/otherdetails/","/personal/","/test/"];
  const isHiddenRoute = hiddenRoutes.includes(pathname);

  if (isHiddenRoute) {
    return null;
  }
  
  return (
    <>
      <div className={`absolute  navbar z-10 w-full h-auto 3xl:px-32 7xl:px-32 8xl:px-32 xl:px-10 text-white ${isBlueBgRoute ? 'bg-[#007eb0] h-20' : ' '}`}>

        <div className={`${isBlueBgRoute ? ' ' : ' bg-[#007eb0] '}`}></div>

        <div className="flex justify-around items-center  container w-full  m-auto">

        <div className="flex px-3 xl:px-16 items-center justify-between  w-full">
          <div className='text-white '>
            <ul className='hidden md:flex gap-5 sm:mt-7 text-[24px]'>
              <li><Link href="/mission/">Mission</Link></li>
              <li><Link href="/advice/">Advice</Link></li>
              <li><Link href="/help/">Help</Link></li>
            </ul>
          </div>
            <div className=" px-0 mr-8">

              <div className="  md:my-0 px-0">

          
              <Image src="/newlogo.png" alt="logo" width={300} height={100} className="w-[280px]  h-[90px]  px-0 " />
              </div>
            </div>


            <div className='flex gap-5 items-start  justify-center'>
              <button className='hidden md:flex items-center justify-center md:gap-3 text-[24px] text-white md:rounded-full rounded-3xl border-white font-bold border w-[170px] h-[69px]   px-3' onClick={openLogin}>
                Login
                <RiArrowDropDownLine className="text-5xl" />
              </button>
              <Image src="/Aus.svg" width={40} height={50} alt='lang' className='hidden md:block' />
              
              <button className="md:hidden text-1xl" onClick={toggleSidebar}>
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        <Login isOpen={isLoginOpen} onClose={closeLogin} />
      </div>


      <div className={`fixed top-0 left-0 h-full w-64 bg-[#007eb0] z-20 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
        <div className="flex justify-between items-center p-4">
          <Image src="/Logo.png" alt="logo" width={100} height={50} />
          <button className="text-3xl text-white" onClick={toggleSidebar}>
            <RiCloseLine />
          </button>
        </div>
        <nav className="flex flex-col p-4 text-[24px]">
          <Link href="/mission/" className="py-2 text-white" onClick={toggleSidebar}>Mission</Link>
          <Link href="/advice/" className="py-2 text-white" onClick={toggleSidebar}>Advice</Link>
          <Link href="/help/" className="py-2 text-white" onClick={toggleSidebar}>Help</Link>
        </nav>
      </div>
 

      <div className={`fixed inset-0 bg-black bg-opacity-50 z-10 ${isSidebarOpen ? 'block' : 'hidden'}`} onClick={toggleSidebar}></div>

         </div>  
      
    </>
  );
}

export default Navbar;
