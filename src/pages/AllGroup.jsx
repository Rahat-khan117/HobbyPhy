import React from 'react';
import { useLoaderData } from 'react-router';
import GroupBox from '../components/GroupBox';

const AllGroup = () => {
    const groups = useLoaderData();
    return (
        <div className='pb-10'>
            <div className='mt-12 sm:px-14 lg:px-20 px-4'>
           <p className='text-3xl font-bold text-center'>Our Featured Groups</p>
           <div className='flex justify-center mt-4'>
             <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-5 '>

                {
                    groups.map(group => <GroupBox group={group}></GroupBox>)
                }
             </div>
           </div>
        </div>
        </div>
    );
};

export default AllGroup;