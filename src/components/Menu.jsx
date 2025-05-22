import React, { useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { valueContext } from "../Layout/MainLayout";

const Menu = () => {
    const { userN,handleLogout } = useContext(valueContext);
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


  
  const {pathname} = useLocation()
  const navigate = useNavigate()
  return (
    <div className="h-[380px] w-[210px] bg-green-400 z-50 flex flex-col gap-9 pl-5 pt-5">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer text-2xl text-white font-bold"
            : "cursor-pointer text-2xl  font-bold"
        }
      >
        {" "}
        <div className="flex gap-2 items-center">
          <p className="whitespace-nowrap">
            {userN ? userN.displayName : "No User"}
          </p>
          <img
            className="h-[50px] w-[50px] rounded-full"
            src={
              userN ? userN.photoURL : "https://i.ibb.co/8DXdyrBh/download.png"
            }
          />
        </div>
      </NavLink>
      <NavLink
        to="/allGroup"
        className={({ isActive }) =>
          isActive
            ? "cursor-pointer text-2xl text-white font-bold"
            : "cursor-pointer text-2xl  font-bold"
        }
      >
        All Group
      </NavLink>
      <div 
        onClick={handleCreateG}
        className={(pathname=="/createGroup")? "cursor-pointer text-2xl text-white font-bold" : "cursor-pointer text-2xl  font-bold" }
      >
        Create Group
      </div>
      <div 
        onClick={handleMyG}
        className={(pathname=="/myGroup")? "cursor-pointer text-2xl text-white font-bold" : "cursor-pointer text-2xl  font-bold" }
      >
        My Group
      </div>
      <div>
        {userN ? (
          <button
            onClick={() => {
              handleLogout();
              Swal.fire({
                title: "warning!",
                text: "You have completed Log out successfully.",
                icon: "warning",
                confirmButtonText: "OK",
              });
            }}
            className="btn bg-[#1d1b1b] text-white"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className={
              pathname == "/login"
                ? "btn  bg-red-600 text-white"
                : "btn bg-[#1d1b1b] text-white"
            }
          >
            Log in
          </button>
        )}
      </div>
    </div>
  );
};

export default Menu;
