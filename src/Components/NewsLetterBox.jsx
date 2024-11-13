import React from 'react'

const NewsLetterBox = () => {

    const OnSubmitHandler=(event)=>{
       event.preventDefault
    }
  return (
    <div className='text-center'>
    <p className='text-2xl font-medium'>Join our newsletter and stay updated!</p> {/* Changed the heading */}
    <p className='text-gray-400 mt-3'>
        Sign up to receive the latest news, updates, and promotions delivered straight to your inbox. {/* Changed the paragraph */}
    </p>
    <form onSubmit={OnSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input className='w-full sm:flex-1 outline-none' type='email' placeholder='Enter your email here' required></input> {/* Changed placeholder */}
        <button type='submit' className='bg-black text-white text-xs px-10 py-4'>JOIN NOW</button> {/* Changed button text */}
    </form>
</div>
  )
}

export default NewsLetterBox
