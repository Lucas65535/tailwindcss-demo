import React from 'react';

const Content = () => {
    return (
        <>
            <div className='flex flex-col  justify-center items-center h-screen bg-gray-200 font-mont py-40'>
                <img className='rounded h-full mb-12 shadow' src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80' alt="pic" />
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-2xl mb-2'>Egg Muffles</h2>
                    <p className='mb-2'>Delicious and nutritious.</p>
                    <span>$16</span>
                </div>
            </div>

            <div className='flex flex-col  justify-center items-center h-screen bg-gray-200 font-mont py-40'>
                <img className='rounded h-full mb-12 shadow' src='https://images.unsplash.com/photo-1484723091739-30a097e8f929?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1287&q=80' alt="pic" />
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='text-2xl mb-2'>Egg Muffles</h2>
                    <p className='mb-2'>Delicious and nutritious.</p>
                    <span>$16</span>
                </div>
            </div>
        </>
    );
};

export default Content;