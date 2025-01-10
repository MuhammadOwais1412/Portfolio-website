import React from 'react'

const MobileEducation = () => {
  return (
    <div>
      <div className='flex flex-col w-full p-5 mt-3'>

        <h2 className="border-b border-blue-300 pb-2 text-3xl font-semibold tracking-tight">
          Education
        </h2>

        <div className='my-4'>
          <div >
            <h1 className='font-semibold text-2xl'>Matriculation &nbsp; (SSC)</h1>
            <p className='mt-2 text-blue-500 text-lg'>Sep 2020</p>
          </div>
          <div className='text-xl leading-relaxed'>Matriculation with Science from Board of Secondary education Karachi </div>
        </div>

        <hr className='border-blue-500 py-4' />

        <div>
          <div>
            <h1 className='font-semibold text-2xl'>Intermediate &nbsp; (I.Com)</h1>
            <p className='mt-2 text-blue-500 text-lg'>June 2023</p>
          </div>
          <div className='text-xl leading-relaxed'>Intermediate with Commerce from Board of Intermediate eduction Karachi </div>
        </div>

      </div>
    </div>
  )
}

export default MobileEducation
