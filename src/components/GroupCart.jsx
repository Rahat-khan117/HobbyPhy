import React from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const GroupCart = ({ group }) => {
    const navigate = useNavigate()
  const { _id } = group;


// for update 

 const handleUpdate = (id) => { 
    navigate(`/updateGroup/${id}`);
 }


// for delete
  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting group
        fetch(`http://localhost:3000/createGroup/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your group has been deleted.",
                icon: "success",
              });
              setTimeout(() => {
                window.location.reload();
              }, 1000);
            }
          });
      }
    });
  };

  return (
    <div className="flex justify-center sm:block">
      <div className="py-4 border-b-2 border-b-[#3230372f] sm:flex justify-between items-center sm:pl-7 pl-2 pr-12 text-sm">
        <div className="flex gap-3">
          <img className="h-[70px] w-[70px]" src={group.photo_url} />
          <div>
            <p className="text-3xl">{group.group_name}</p>
            <p>{group.description}</p>
          </div>
        </div>
        <div className="flex gap-10 mt-4">
          <button onClick={() => handleUpdate(_id)} className="btn bg-green-600 text-white hover:bg-black">
            Update group
          </button>
          <button
            onClick={() => handleDelete(_id)}
            className="btn bg-red-600 text-white hover:bg-black"
          >
            delete Group
          </button>
        </div>
      </div>
    </div>
  );
};

export default GroupCart;
