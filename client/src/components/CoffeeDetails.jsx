import React from 'react';
import { Link, useLoaderData } from 'react-router';

function CoffeeDetails() {
    const coffee = useLoaderData();
    
    return (
        <div className="min-h-screen bg-amber-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className='text-5xl md:text-6xl font-bold text-center text-amber-900 mb-12'>
                    Coffee Details
                </h1>
                
                <div className='bg-white rounded-2xl shadow-xl overflow-hidden'>
                    <div className='md:flex'>
                        <div className='md:w-1/2 p-6 flex items-center justify-center bg-amber-100'>
                            <img 
                                src={coffee.photo} 
                                alt={coffee.name} 
                                className='w-full h-auto max-h-96 object-contain rounded-lg'
                            />
                        </div>
                        
                        <div className='md:w-1/2 p-8 space-y-6'>
                            <div>
                                <h2 className='text-3xl font-bold text-amber-800'>{coffee.name}</h2>
                                <p className='text-amber-600 italic'>{coffee.category}</p>
                            </div>
                            
                            <p className='text-gray-700 text-lg'>{coffee.details}</p>
                            
                            <div className='flex items-center justify-between pt-4 border-t border-amber-200'>
                                <span className='text-2xl font-bold text-amber-900'>
                                    {coffee.price}
                                </span>
                                <button className='bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-6 rounded-full transition duration-300'>
                                    Add to Cart
                                </button>
                            </div>
                            
                            <div className='pt-4 border-t border-amber-200'>
                                <h3 className='font-semibold text-amber-800 mb-2'>Characteristics</h3>
                                <ul className='space-y-2 text-gray-700'>
                                    <li className='flex items-center'>
                                        <span className='mr-2'>☕</span> Medium roast
                                    </li>
                                    <li className='flex items-center'>
                                        <span className='mr-2'>🌱</span> Organic Arabica beans
                                    </li>
                                    <li className='flex items-center'>
                                        <span className='mr-2'>⏳</span> Brew time: 4-5 minutes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className='mt-12 text-center'>
                    <button className='inline-flex items-center px-6 py-3 border border-amber-300 text-amber-700 font-medium rounded-full hover:bg-amber-50 transition duration-300'>
                       <Link to='/' className='flex items-center'>
                        ← Back to Menu
                       </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CoffeeDetails;