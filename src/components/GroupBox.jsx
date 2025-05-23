import React, { useContext } from 'react';
import { useNavigate } from 'react-router';
import { valueContext } from '../Layout/MainLayout';
import Swal from 'sweetalert2';

const GroupBox = ({group}) => {
    const {userN} = useContext(valueContext)
    const navigate = useNavigate();
    const handleClick = (id) => {
            if (userN) {
                navigate(`/groupDetails/${id}`)
              } else {
                Swal.fire({
                    title: 'warning!',
                    text: 'Please Log in to access the page.',
                    icon: 'warning',
                    confirmButtonText: 'OK'
                  });
                 (navigate("/login"))
             }        
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