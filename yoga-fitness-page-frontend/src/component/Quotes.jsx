import React from 'react'

const Quotes = () => {
    return (
        <div className='flex items-center justify-center md:w-1/3 md:px-5 px-16 text-3xl md:text-left text-center  relative py-4 '>
            <div className='absolute md:h-full w-full bg-blue-400 top-0 left-0 overflow-hidden -z-10'>
                <div className='absolute h-full min-w-full bg-red-100 top-2 left-2'></div>
            </div>
            <hr />
            "Yoga is not about touching your toes, it’s about what you learn on the way down."                      — Jigar Gor
        </div>
    )
}

export default Quotes