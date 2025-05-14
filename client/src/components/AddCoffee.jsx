import React from 'react'
import Swal from 'sweetalert2';

function AddCoffee() {
    const handleSubmit = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());
        console.log(coffeeData);
        fetch("http://localhost:5000/coffee", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(coffeeData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Coffee added!",
                        icon: "success",
                        draggable: true
                    });
                    form.reset();
                };
            });

    };
    return (
        <div className='bg-[#F4F3F0] p-24'>
            <div className='text-center space-y-4 p-12'>
                <h1 className='text-6xl '>Add coffee</h1>
                <p >It is a long established fact that a reader will be distraceted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here.</p>
            </div>
            <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto items-center justify-items-center'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Name</label>
                        <input type="text" name='name' className="input" placeholder="Coffee name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Quantity</label>
                        <input type="text" name='quantity' className="input" placeholder="Chef name" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Price</label>
                        <input type="text" name='price' className="input" placeholder="Enter your price" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Test</label>
                        <input type="text" name='test' className="input" placeholder="Enter test " />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Category</label>
                        <input type="text" name='category' className="input" placeholder="Enter your Catagory" />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
                        <label className="label">Details</label>
                        <input type="text" name='details' className="input" placeholder="Here is Details information" />
                    </fieldset>

                </div>
                <div className='mt-4 w-4xl mx-auto'>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Photo</label>
                        <input type="text" name='photo' className="input w-full" placeholder="Give your Photo URL" />
                    </fieldset>
                    <button className='bg-[#D2B48C] w-full p-3 mt-2 rounded-full cursor-pointer'>Update Coffee Details</button>
                </div>
            </form>
        </div>
    )
}

export default AddCoffee