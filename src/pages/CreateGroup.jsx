import React, { useContext } from "react";
import { valueContext } from "../Layout/MainLayout";
import Swal from "sweetalert2";

const CreateGroup = () => {
    const {userN} = useContext(valueContext)


   const handleSubmit = (e) => {
      e.preventDefault()
        const form = e.target;
        const formData = new FormData(form);
        const newGroup = Object.fromEntries(formData.entries());
        console.log(newGroup);

        if(!newGroup.description) {
           return alert('enter the description')
        }
        if(!newGroup.group_name){
            return alert('enter the group name')
        }
        if(!newGroup.hobby_category){
            return alert('enter the category')
        }
        if(!newGroup.max_member){
            return alert('enter the maximum member')
        }
        if(!newGroup.meeting_location){
            return alert('enter the meeting location')
        }
        if(!newGroup.photo_url) {
            return alert('enter the Photo Url')
        }
        if(!newGroup.start_date) {
            return alert('enter the start date')
        }
        


        // send data to the server
        fetch('http://localhost:3000/createGroup',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(newGroup)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId) {
            Swal.fire({
                title: 'Success!',
                text: 'You have Created a new group successfully.',
                icon: 'success',
                confirmButtonText: 'OK'
                });
            }
        })
   }



  return (
    <div className="container mx-auto sm:px-12 px-4">
      <div className="bg-[#331a152a] mt-10 sm:px-12 px-6 py-9 rounded-3xl">
        <div>
          <p className="font-bold text-5xl text-[#331A15] text-center">
            Create Your Own Group
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
          <div className="sm:flex gap-4 ">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Group Name</label>
              <input
                name="group_name"
                type="text"
                placeholder="Enter the group name"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className=" sm:w-[50%] mt-4">
              <label className="text-xl">Hobby Category</label>
              <select
                id="hobby"
                name="hobby_category"
                className="block w-full rounded-md border border-gray-300 bg-white py-2 px-3 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm text-gray-700 mt-1.5"
              >
                
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
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Description</label>
              <input
                name="description"
                type="text"
                placeholder="Enter description"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Meeting Location</label>
              <input
                name="meeting_location"
                type="text"
                placeholder="Enter the location"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Max Members</label>
              <input
                name="max_member"
                type="text"
                placeholder="Enter the max member"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">start date</label>
              <input
                name="start_date"
                type="text"
                placeholder="Enter the start date"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white"
              />
            </div>
          </div>
          <div className="sm:flex gap-4">
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">User Name</label>
              <input
                value={userN ? `${userN.displayName}` : ""}
                readOnly
                name="user_name"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
            <div className="my-3 sm:w-[50%]">
              <label className="text-xl">Email address</label>
              <input
                value={userN ? `${userN.email}` : ""}
                readOnly
                name="email_address"
                type="text"
                className="w-full h-[35px] mt-2.5 px-3 text-gray-900 focus:ring-violet-600 border-gray-300 bg-white
                pointer-events-none select-none cursor-default"
              />
            </div>
          </div>
          
          <div className="my-3 w-full">
            <label className="text-xl">Photo</label>
            <input
              name="photo_url"
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
