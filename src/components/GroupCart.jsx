import React from 'react';

const GroupCart = ({group}) => {
    return (
        <div className='flex justify-center sm:block'>
            <div className="py-4 border-b-2 border-b-[#3230372f] sm:flex justify-between items-center sm:pl-7 pl-2 pr-12 text-sm">
          <div className="flex gap-3">
            <img className="h-[70px] w-[70px]" src={group.photo_url} />
            <div>
                <p className='text-3xl'>{group.group_name}</p>
                <p>{group.description}</p>
            </div>
          </div>
          <div className="flex gap-10 mt-4">
            <button className="btn bg-green-600 text-white hover:bg-black">Update group</button>
            <button className="btn bg-red-600 text-white hover:bg-black">delete Group</button>
          </div>
        </div>
        </div>
    );
};

export default GroupCart;