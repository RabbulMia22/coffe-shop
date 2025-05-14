import React, { useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { MdDelete, MdEdit } from "react-icons/md";
import { IoEyeSharp } from "react-icons/io5";
import Swal from 'sweetalert2';

function Home() {
  const coffees = useLoaderData();
  const [coffeeEat, setCoffeeEat] = useState(coffees);
  const handleClicked = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              const remaining = coffeeEat.filter((coffee) => coffee._id !== id);
              setCoffeeEat(remaining);
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
          });
      }
    });
  };
 
  
  return (
    <div className=" bg-gradient-to-br from-[#f4f3f0] to-[#fefae0] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-[#6B4F4F] mb-12">
          ☕ Our Coffee Selection
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {coffeeEat.map((coffee) => (
            <div
              key={coffee._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#f1ece1]"
            >
              <div className="flex">
                {/* Image */}
                <div className="w-1/3 h-48 bg-amber-50">
                  <img
                    src={coffee.photo}
                    alt={coffee.name}
                    className="w-full h-full p-6 object-cover object-center hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="w-2/3 p-4 flex itmes-center justify-between">
                  <div className='ml-10'>
                    <h2 className="text-xl font-semibold text-[#3E2723] truncate">
                      {coffee.name}
                    </h2>
                    <p className="text-[#795548] text-sm mt-1 font-medium">
                      Price: <span className="text-black font-semibold">{coffee.price} ৳</span>
                    </p>

                    <div className="mt-3 text-sm text-gray-600 space-y-1">
                      <p>
                        <span className="font-medium">Taste:</span> {coffee.test}
                      </p>
                      <p>
                        <span className="font-medium">Category:</span> {coffee.category}
                      </p>
                      <p className="text-xs text-gray-500 mt-2 line-clamp-2">
                        {coffee.details}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col  gap-4 mt-4">
                    <button
                      title="View"
                      className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-blue-600 hover:bg-blue-50 transition-colors"
                    >
                      <Link to={`/coffee/${coffee._id}`} className="flex items-center">
                      <IoEyeSharp size={18} />
                      </Link>
                    </button>
                    <button
                      title="Edit"
                      className="p-2 bg-gray-100 rounded-full text-gray-500 hover:text-green-600 hover:bg-green-50 transition-colors"
                    >
                      <Link to={`/update/${coffee._id}`} className="flex items-center">
                      <MdEdit size={18} />
                      </Link>
                    </button>
                    <button
                      title="Delete"
                      onClick={() => handleClicked(coffee._id)}
                      className="p-2  bg-red-500 hover:text-red-700 rounded-full text-gray-500 transition-colors"
                    >
                      <MdDelete size={18} className='text-white' />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
