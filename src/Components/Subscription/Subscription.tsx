import React from "react";
import { IoIosCheckmark } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

const Subscription: React.FC = () => {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-4">
        Subscription tiers at a glance
      </h2>

      <hr className="my-4" />

      <div>
        <div className="mb-2">
          <h3 className="text-xl font-semibold">Features</h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full  table-fixed border-collapse">
            <thead className="border-b-2 ">
              <tr className="border-b-2 ">
              <th className="font-normal text-left ">Match. Chat. Meet.</th>
              <th className="font-normal">Up to 3</th>
              <th className="font-normal">Unlimited</th>
              <th className="font-normal">Unlimited</th>
              </tr>
            </thead>
            <tbody className="text-left">
            <tr className="border-b-2">
                <td className="">Unlimited likes </td>
                <td className="p-2 text-2xl">
                  <IoIosCheckmark className="mx-auto" />
                </td>
                <td className="p-2 text-2xl">
                  <IoIosCheckmark className="mx-auto" />
                </td>
                <td className="p-2 text-2xl">
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>


              <tr className="border-b-2 ">
                <td>Unlimited Rewinds</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  <IoIosCheckmark className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>

            

              <tr className="border-b-2">
                <td>Passport™ to any location</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1  className="mx-auto"/>
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>

            
              <tr className="border-b-2">
                <td>Hide advertisements</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1  className="mx-auto"/>
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
              <tr className="border-b-2">
                <td>Go Incognito </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1  className="mx-auto"/>
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1  className="mx-auto"/>
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
              <tr className="border-b-2">
                <td>*Weekly Super Likes</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark  className="mx-auto"/>
                </td>
              </tr>
            
              <tr className="border-b-2">
                <td>*1 Free Boost a month</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
              <tr className="border-b-2">
                <td>
                  Free monthly Boost only available with subscriptions of 1
                  month or longer. 
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
              <tr className="border-b-2">
                <td>See who likes you</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1  className="mx-auto"/>
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
              
              <tr className="border-b-2">
                <td> New Top Picks every day</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark  className="mx-auto"/>
                </td>
              </tr>
              
              <tr className="border-b-2">
                <td>Message before matching</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
             
              <tr className="border-b-2">
                <td>Prioritised likes</td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
             
              <tr className="">
                <td>
                  See the likes you’ve sent over the last 7 days 
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1 className="mx-auto" />
                </td>
                <td className="p-2  text-md text-[#AFAFAF] ">
                  {" "}
                  <RxCross1   className="mx-auto"/>
                </td>
                <td className="p-2 text-2xl ">
                  {" "}
                  <IoIosCheckmark className="mx-auto" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
