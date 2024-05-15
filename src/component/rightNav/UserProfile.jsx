import React from "react";
import { FaUser } from "react-icons/fa";

function UserProfile() {
  return (
    <>
      <div className="h-10 w-10 rounded-full flex justify-center items-center bg-zinc-400">
        <div className="">
          <FaUser className="userProfileIcon" />
          <p className="userProfileDetail absolute right-0 bottom-[-50px] bg-zinc-900/90 backdrop-blur  rounded px-10 py-1 ">
            {" "}
            radhikanarayana{" "}
          </p>
        </div>
      </div>
    </>
  );
}

export default UserProfile;
