import React from 'react';
import { useNavigate } from 'react-router';

const GroupBox = ({group}) => {
    const navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/groupDetails/${id}`)
    }
    return (
        <div  className='bg-white rounded-xl px-4 py-4 '>
            <img className='h-[200px] w-full rounded-2xl' src={group.image_url_2} />
            
            <p className='text-2xl mt-6'>{group.group_name}</p>
            <p className='mt-3'>{group.description}</p>
            <button onClick={() => handleClick(group.id)} className='btn text-[17px] mt-4 w-[100px] bg-blue-500 text-white rounded-4xl text-4'>see more</button>
        </div>
    );
};

export default GroupBox;