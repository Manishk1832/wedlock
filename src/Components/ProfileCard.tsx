import { FaRegStar } from "react-icons/fa";
import Image from "next/image";
import { FaRegMap } from "react-icons/fa6";
import { FaRegUser } from "react-icons/fa";
import { MdVerified } from "react-icons/md";
import "../app/font.css";

interface Profile {
  id: string;
  userType: string;
  gender:string;
  age:string;
  match_percentage:string,
  displayName:string,
  firstName:string,
  occupation: string;
  religion: string;
  verified: boolean;
  country:string;
  state:string;
  maritalStatus: string;
}

interface ProfileCardProps {
  profiles: Profile[];
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profiles }) => {
  const getBorderColor = (userType: string) => {
    switch (userType) {
      case "Exclusive":
        return "border-[#8E69B4]"; // Purple border
      case "Premium":
        return "border-[#007EAF]"; // Blue border
      case "Standard":
        return ""; // No border
      default:
        return "";
    }
  };

  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3">
      {profiles.map((data) => (
        <div
          key={data.id}
          className={`relative w-full md:w-[24rem] ${data.userType !== "Standard" ? "h-[33.1rem]" : "h-[33.1rem]"} rounded-[1.9rem] ${
            data.userType !== "Standard" ? "border-t-[1rem]" : ""
          } ${getBorderColor(data.userType)}`}
        >
          <Image
            src="/dummy1.png"
            alt="p"
            width={100}
            height={100}
            className="absolute h-full w-full rounded-2xl object-cover"
          />

          <div
            className={`relative p-5 text-white ${data.userType !== "Standard" ? "space-y-[12.5rem]" : ""} h-full space-y-[13.5rem] rounded-2xl bg-black bg-opacity-45`}
          >
            <div className="flex items-center justify-between">
              <div className="rounded-full border-2 border-[#FFFFFF33] bg-transparent px-2">
                <h1 className="font-bold">{data.userType}</h1>
              </div>
              <FaRegStar className="text-2xl" />
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex h-10 w-24 items-center justify-center rounded-lg bg-gradient-to-t from-[#FFD54266] to-[#C0970766] px-1">
                <h1 className="text-white">{data.match_percentage}% match</h1>
              </div>
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="flex items-center gap-2 text-4xl font-bold">
                    {" "}
                    {data.displayName || data.firstName}{" "}
                    {data.verified ? (
                      <MdVerified className="text-2xl text-[#0788F5]" />
                    ) : (
                      ""
                    )}
                  </h1>
                  <h1>{data.gender.charAt(0) && data.age}</h1>
                </div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-semibold"> {data.occupation}</h1>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <h1 className="text-xl font-semibold">{data.religion}</h1>
                <div className="flex items-center gap-2">
                  <span>
                    <FaRegUser />{" "}
                  </span>
                  <h1 className="font-semibold">{data.maritalStatus}</h1>
                </div>
              </div>
              <div className="w-32 rounded-full bg-[#F0F5FF] px-2 text-[#0B63E5]">
                <h1
                  className="flex items-center justify-around"
                  style={{ fontFamily: "Proxima-Nova-Semibold, sans-serif" }}
                >
                  {" "}
                  <FaRegMap />
                  {` ${data.country && data.country}`}
                </h1>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
