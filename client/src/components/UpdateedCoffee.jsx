import React from 'react'
import { Link, useLoaderData } from 'react-router'
import Swal from 'sweetalert2';

function UpdateedCoffee() {

  const coffee = useLoaderData();
  const { _id, name, quantity, price, test, category, details, photo } = coffee;


  const handleUpdateCoffee = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    fetch(`http://localhost:5000/coffee/${_id}`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updatedCoffee)
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
          form.reset();
        }
      })

  }
  return (
    <div className='bg-[#F4F3F0] p-24'>
      <h1> <Link to="/"> Go Back</Link> </h1>
      <div className='text-center space-y-4 p-12'>
        <h1 className='text-6xl '>Update coffee</h1>
      </div>
      <form onSubmit={handleUpdateCoffee}>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center justify-items-center'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Name</label>
            <input type="text" name='name' defaultValue={name} className="input" placeholder="Coffee name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Quantity</label>
            <input type="text" name='quantity' defaultValue={quantity} className="input" placeholder="Chef name" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Price</label>
            <input type="text" name='price' defaultValue={price} className="input" placeholder="Enter your price" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Test</label>
            <input type="text" name='test' defaultValue={test} className="input" placeholder="Enter test " />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Category</label>
            <input type="text" name='category' defaultValue={category} className="input" placeholder="Enter your Catagory" />
          </fieldset>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
            <label className="label">Details</label>
            <input type="text" name='details' defaultValue={details} className="input" placeholder="Here is Details information" />
          </fieldset>

        </div>
        <div className='mt-4 w-4xl mx-auto'>
          <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
            <label className="label">Photo</label>
            <input type="text" name='photo' defaultValue={photo} className="input w-full" placeholder="Give your Photo URL" />
          </fieldset>
          <button className='bg-[#D2B48C] w-full p-3 mt-2 rounded-full cursor-pointer'>Update Coffee Details</button>
        </div>
      </form>
    </div>
  )
}

export default UpdateedCoffee