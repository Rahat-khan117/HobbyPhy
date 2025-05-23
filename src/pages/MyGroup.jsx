import React from "react";
import { useLoaderData } from "react-router";
import GroupCart from "../components/GroupCart";

const MyGroup = () => {
  const groups = useLoaderData();
  console.log(groups);
  return (
    <div className="sm:px-10 px-5">
      <p className="font-bold text-4xl text-center mt-7">My Created Groups</p>

      <div className="bg-white rounded-3xl px-5 py-7 mt-4">
        <div>
          <div
            className={`py-9 space-y-2 ${groups.length !== 0 ? "hidden" : ""}`}
          >
            <p className="text-3xl font-semibold text-center">
              No Created group Yet
            </p>
            <p className="text-center text-sm text-[#00000092]">
              Create a new group <br /> after creating a new group you can see here
            </p>
          </div>
        </div>
        <div className={` ${groups.length == 0 ? "hidden" : ""}`}>
            {groups.map((group) => (
          <GroupCart group={group}></GroupCart>
        ))}
        </div>
      </div>
    </div>
  );
};

export default MyGroup;
