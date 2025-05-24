import React, { useContext} from 'react';
import { NavLink, useLocation, useNavigate} from 'react-router';
import Swal from 'sweetalert2';
import { valueContext } from '../Layout/MainLayout';

const Navbar = ({handleMenu}) => {
    const {pathname} = useLocation()
    const navigate = useNavigate()
    const {userN,handleLogout,handleTheme,theme} = useContext(valueContext)
    
    const handleCreateG = () => {
             if (userN) {
                navigate("/createGroup")
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

        
    const handleMyG = () => {
             if (userN) {
                navigate("/myGroup")
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
        <div className={`  h-[70px] w-[100vw] flex items-center px-4 lg:px-12 ${theme ? 'bg-[#000000d2] text-white':'bg-[#d5ead2] text-black'}`} >
            <div className='relative  w-full flex justify-between items-center'>
               
               <div onClick={()=> navigate("/")} className='flex items-center gap-2 cursor-pointer'>
                 <img className='h-[50px] w-[50px] rounded-2xl' src="https://i.ibb.co.com/whg4kN1z/logo.jpg" />
                 <p className='text-green-600 lg:text-4xl md:text-3xl text-4xl font-bold'>HOBBY<span className='text-white'>phy</span></p>
               </div>
               <div className='lg:flex items-center xl:gap-16 lg:gap-10 md:gap-4 hidden '>
                 <NavLink to="/allGroup" className={({isActive})=>(isActive ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500" : "cursor-pointer")}>
                 <div className='text-2xl flex items-center'>
                 <p>All Group</p>
                 </div>
                 </NavLink>
                 <div onClick={handleCreateG} className={(pathname == "/createGroup") ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500" : "cursor-pointer" }>
                 <div className='text-2xl flex items-center gap-2'>
                 <i className="fa-solid fa-user"></i>
                 <p>Create Group</p>
                 </div>
                 </div>
                 <div onClick={handleMyG} className={(pathname == "/myGroup") ? "cursor-pointer pb-2 text-green-500 border-b-2 border-green-500" : "cursor-pointer" }>
                 <div className='text-2xl flex items-center gap-2'>
                 <i className="fa-solid fa-user"></i>
                 <p>My Group</p>
                 </div>
                 </div>
                 
                 <div className='flex gap-3 items-center '>
                   <div>
                   {
                    userN ?
                   <button onClick={()=> {
                    handleLogout()
                    
                   }} 
                   className='btn bg-[#1d1b1b] text-white'>Log out</button>
                  : 
                  <button onClick={()=> navigate("/login")} className={(pathname == "/login")? "btn  bg-green-600 text-white" : "btn bg-[#1d1b1b] text-white" }>Log in</button>
         
                 }
                 
                   </div>
                 <div className='relative group inline-block cursor-pointer'> 
                    <img className='h-[50px] w-[50px] rounded-full' src={userN ? userN.photoURL : "https://i.ibb.co/8DXdyrBh/download.png" }/>
                    <div><p className='absolute hidden group-hover:block bg-black text-white text-sm rounded px-2 py-1 top-full left-1/2 -translate-x-1/2 mt-1 whitespace-nowrap'>{userN ? userN.displayName : ""}</p></div>
                 </div>
                 </div>
                 
               </div>
               
               
            </div>
            <button onClick={handleTheme} className='ml-3'>
                 <img className='h-[30px]' src="../theme-btn.png"/>
             </button>
             <div className='lg:hidden block text-3xl ml-5'>
               <i onClick={handleMenu} className="fa-solid fa-bars "></i>
               </div>
        </div>
    );
};

export default Navbar;