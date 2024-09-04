"use client";
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import Cookies from 'js-cookie';

const withAuth = (WrappedComponent: any) => {
  return (props: any) => {
    const router = useRouter();
    
    const accessToken = Cookies.get('access_token') ;

    const isLocationFormFilled = Cookies.get('isLocationFormFilled');
    const isPersonalFormFilled = Cookies.get('isPersonalFormFilled');
    const isQualificationFormFilled = Cookies.get('isQualificationFormFilled');
    const isOtherFormFilled = Cookies.get('isOtherFormFilled');
    const isImageFormFilled = Cookies.get('isImageFormFilled');
   
    useEffect(()=>{
      if (!accessToken) {
        Cookies.remove('isLocationFormFilled');
        Cookies.remove('isPersonalFormFilled');
        Cookies.remove('isQualificationFormFilled');
        Cookies.remove('isOtherFormFilled');
        Cookies.remove('isImageFormFilled');
    }
    },[accessToken])
   
   
    const isAuthenticated = Boolean(accessToken);


   

    useEffect(() => {
      if (!isAuthenticated) {
        router.push('/login');
      }
    }, [isAuthenticated, router]);


    useEffect(() => {
  
      if (isAuthenticated) {
        router.push('/login');
        return;
      }

      switch (false) {
        case Boolean(isLocationFormFilled):
          router.push('/location');
          break;
        case Boolean(isPersonalFormFilled):
          router.push('/personal');
          break;
        case Boolean(isQualificationFormFilled):
          router.push('/qualification');
          break;
        case Boolean(isOtherFormFilled):
          router.push('/otherdetails');
          break;
        case Boolean(isImageFormFilled):
          router.push('/photoUpload');
          break;
        default:
      
          break;
      }
    }, [isAuthenticated, isLocationFormFilled, isPersonalFormFilled, isQualificationFormFilled, isOtherFormFilled, isImageFormFilled, router]);

    return isAuthenticated ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
