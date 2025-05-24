import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { valueContext } from '../Layout/MainLayout';

const Featured = ({group}) => {
    const {theme} = useContext(valueContext);
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate('/allGroup')} className={`  rounded-xl px-4 py-4 relative cursor-pointer ${theme ? 'bg-[#000000d2] text-white':'bg-[#d5ead2] text-black'}`} >
            <img className='h-[200px] w-full rounded-2xl' src={group.image_url_1} />
            <button className='btn bg-green-500 text-white rounded-4xl absolute right-13 top-48'>From:{group.start_date}</button>
            <p className='text-2xl mt-6'>{group.group_name}</p>
            <p className='mt-3'>{group.description}</p>
        </div>
    );
};

export default Featured;