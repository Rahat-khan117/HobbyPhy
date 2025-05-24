import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const GroupDetails = () => {
    const [joinGroup,setJoinGroup] = useState(false)
    const groups = useLoaderData();
    const {id} = useParams();
    const machDetails = groups.find((group) => group.id === parseInt(id));



    const handleSuccess = () => {
        setTimeout(() => {
          Swal.fire({
            title: 'success!',
            text: 'You have joined the group successfully',
            icon: 'success',
            confirmButtonText: 'OK'
          });     
              }, 1000);
        
    }
    const handleWarning = ()=> {
        setTimeout(()=>{
            Swal.fire({
            title: 'warning!',
            text: 'You have left the group',
            icon: 'warning',
            confirmButtonText: 'OK'
          });
        },1000)
    }
    return (
        <div className='mt-10 px-4 sm:px-10 lg:px-20 pb-10'>
            <p className="text-4xl text-center font-bold">{machDetails.group_name}</p>
      <p className="text-center text-[#0000009f] mt-3">
        {machDetails.description}
      </p>
      <div className="  mt-5">
        <div className="p-4 bg-white rounded-3xl">
          <img className="rounded-3xl w-full" src={machDetails.image_url_1} />
        </div>
      </div>

      <div className="h-[370px]  bg-white rounded-2xl mt-10 flex gap-4 pr-2">
          <div className="h-[310px] w-[300px]">
          <img
            className="h-[310px] w-[300px] ml-5 mt-5 rounded-3xl"
            src={machDetails.image_url_2}
          />
          </div>
          <div className="md:ml-7 ml-5 mt-5 ">
          <p className="md:text-3xl sm:text-xl text-[17px] font-bold">{machDetails.group_name}</p>
          
          
          <p className="md:text-2xl sm:text-xl text-[16px] font-bold mt-1">
            Category : {machDetails.hobby_category}
          </p>
          <p className="text-[#00000086] font-bold mt-4">
          Meeting Location : {machDetails.meeting_location}
          </p>
          <div className="border-t-1 border-t-[#00000095] border-dashed sm:mt-5 mt-2 md:w-full w-[100px]">
            <hr />
          </div>
          <div className="flex gap-1 items-center mt-3">
            <p className="font-bold sm:text-xl text-[16px]">start date: <span className="ml-1 font-bold">{machDetails.start_date}</span>
            </p>
          </div>
          <div className="border-t-1 border-dashed border-t-[#00000095] sm:mt-5 mt-2 md:w-full w-[100px]">
            <hr />
          </div>
          
          <div className="flex gap-2 mt-3">
            <p className="font-bold text-[14px] md:text-xl">
              Max-Members:
            </p>
            <p className=" md:text-[18px] text-[14px] font-bold">
              {machDetails.max_members}
            </p>
            
           </div>
           <div className="mt-3"> 
                <button onClick={()=> {
                    setJoinGroup(!joinGroup)
                    !joinGroup ? handleSuccess() : handleWarning()
                }} className={joinGroup ? "btn bg-black md:text-xl text-white md:w-[150px] md:h-[40px]" : "btn bg-green-600 md:text-xl text-white md:w-[150px] md:h-[40px]" }>{
                  joinGroup ? "Leave Group"
                   : "Join Group"
                }</button>
            </div>
          </div>
        </div>
        </div>
    );
};

export default GroupDetails;