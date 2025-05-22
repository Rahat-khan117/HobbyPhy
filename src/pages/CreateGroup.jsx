import React, { useContext } from "react";
import { valueContext } from "../Layout/MainLayout";

const CreateGroup = () => {
    const {userN} = useContext(valueContext)


   const handleSubmit = (e) => {
      e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries());
        console.log(newGroup);
   }



  return (
    <div className="container mx-auto px-12">
      <div className="bg-[#331a152a] mt-10 px-12 py-9 rounded-3xl">
        <div>
          <p className="font-bold text-5xl text-[#331A15] text-center">
            Create Your Own
          </p>
          <p className="text-[#331a15c6] text-center mt-4">
            Can’t find a group for your passion? Start your own in just a few
            steps. Customize everything—from the name and description to how and
            where you meet. Invite friends or let others discover your group on
            HobbyPhy. Build a space where people connect through shared
            interests.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex gap-4">
            <div className="my-3 w-[50%]">
              <label className="text-xl">Group Name</label>
              <input
                name="group_name"
                type="text"
                placeholder="Enter the group name"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className=" w-[50%] mt-4">
              <label className="text-xl">Hobby Category</label>
              <select
                id="hobby"
                name="hobby-category"
                class="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-700 mt-1.5"
              >
                <option disabled selected>
                  Choose your hobby category
                </option>
                <option>Drawing & Painting</option>
                <option>Video Gaming</option>
                <option>Fishing</option>
                <option>Cooking</option>
                <option>Running</option>
                <option>Reading</option>
                <option>Writing </option>
              </select>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-3 w-[50%]">
              <label className="text-xl">Description</label>
              <input
                name="description"
                type="text"
                placeholder="Enter description"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 w-[50%]">
              <label className="text-xl">Meeting Location</label>
              <input
                name="meeting-location"
                type="text"
                placeholder="Enter the location"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-3 w-[50%]">
              <label className="text-xl">Max Members</label>
              <input
                name="max-member"
                type="text"
                placeholder="Enter the max member"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 w-[50%]">
              <label className="text-xl">start date</label>
              <input
                name="start-date"
                type="text"
                placeholder="Enter the start date"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="flex gap-4">
            <div className="my-3 w-[50%]">
              <label className="text-xl">User Name</label>
              <input
                value={userN ? `${userN.displayName}` : ""}
                readonly
                name="user-name"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
            <div className="my-3 w-[50%]">
              <label className="text-xl">Email address</label>
              <input
                value={userN ? `${userN.email}` : ""}
                readonly
                name="email-address"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
          </div>
          
          <div className="my-3 w-full">
            <label className="text-xl">Photo</label>
            <input
              name="photo-url"
              type="text"
              placeholder="Enter the photo url"
              className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full btn bg-[#D2B48C] mt-3 text-[16px]"
            >
              Create Group
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateGroup;
