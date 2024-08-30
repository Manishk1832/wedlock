"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
import { RootState } from "@/Redux/store";

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    
    const accessToken = Cookies.get('access_token') || null;
    const isAuthenticated = Boolean(accessToken);
    console.log(isAuthenticated, 'isAuthenticated');
    console.log(accessToken, 'accessToken');

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
