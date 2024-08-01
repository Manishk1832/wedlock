import React from 'react'
import Input from '../../Components/Input'
import Image from 'next/image'

const CreatePassword = () => {
  return (
    <div className="min-w-screen h-screen flex flex-col items-center justify-center   bg-[#007EAF] ">
         <div className="flex items-center justify-center mb-2 md:mb-10 ">
        <Image src="/logowhite.png" alt="" width={268} height={90} className='w-72 h-24 fixed top-10' />
      </div>
      <div className="flex flex-col items-center justify-center mt-4 ">
        <div className="bg-white flex items-center justify-center rounded-full w-12 h-12">
            <div className="bg-[#D1FADF] rounded-full w-9 h-9 flex items-center justify-center " >
            <Image src="/confirm.png" alt="Star"  width={24} height={24}/>

            </div>
        
        </div>
        <div className="flex flex-col items-center justify-center text-white mt-2">
          <h1 className="text-3xl font-bold">Create Your Password</h1>
          <p className="mt-4 md:text-lg text-center">
          This blog post has been published. Team members <br /> will be able to edit this post and republish changes.
          </p>
        </div>
        </div>
        <div  className="w-full max-w-md px-2  py-4 mt-4">
            <form action=" rounder-[8px]">
            <Input label="Enter new password" placeholder='password' />
            <Input label="Re-enter password" placeholder='Re-enter password' />
            </form>

            <div className="flex items-center justify-center mt-2"></div>
              <button className="bg-white text-[#007EAF] w-full h-10 rounded-md mt-4">
                Confirm
              </button>
              </div>
      
    </div>
  )
}

export default CreatePassword
