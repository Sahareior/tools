import React from 'react';

const Dounats = ({img,indx}) => {
    return (
        <div className='relative bg-white/80 rounded-3xl px-10 flex-col items-center justify-center w-72'>
            {
                indx == 3 ?(
                    <div className='third h-32 w-32'></div>
                ):(
            <div
            style={{
                backgroundImage: `url(${img})`
            }}
            className='h-32 w-32 bg-cover bg-center'
            >

            </div>
                )
            }

            <div className='space-y-3 text-center'>
                <h1 className='font-bold'>Donouts</h1>
                <p className='text-sm leading-6 opacity-80'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic, iure facilis ut tenetur ipsa id!</p>
            </div>
        </div>
    );
};

export default Dounats;