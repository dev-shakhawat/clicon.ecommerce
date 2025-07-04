'use client' // Error boundaries must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])
 
  return (
    <div className='flex flex-col items-center justify-center h-screen bg-white text-black'>
      <h2 className='text-2xl font-bold'>Something went wrong!</h2>
      <button className='mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600'
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}