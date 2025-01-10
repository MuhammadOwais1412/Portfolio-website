import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"

const Education = () => {
  return (
    <div>
      
      <Card data-aos="zoom-in" className='h-[85vh] overflow-y-scroll'>
        <CardHeader>
          <CardTitle className='font-bold text-3xl uppercase mt-3'>Education:</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">

          {/* My Education here */}
          <div className='flex flex-col w-full'>

            <div className='flex w-full my-6'>
              <div className='flex flex-col w-1/2'>
                <h1 className='font-semibold text-2xl'>Matriculation &nbsp; (SSC)</h1>
                <p className='mt-2 text-gray-400 text-lg'>Sep 2020</p>
              </div>
              <div className='flex w-1/2 text-xl text-justify hyphens-auto leading-relaxed'>Matriculation with Science from Board of Secondary education Karachi </div>              
            </div>

            <hr className='border-gray-200 py-4'/>

            <div className='flex w-full'>
              <div className='flex flex-col w-1/2'>
                <h1 className='font-semibold text-2xl'>Intermediate &nbsp; (I.Com)</h1>
                <p className='mt-2 text-gray-400 text-lg'>June 2023</p>
              </div>
              <div className='flex w-1/2 text-xl text-justify hyphens-auto leading-relaxed'>Intermediate with Commerce from Board of Intermediate eduction Karachi </div>
            </div>

          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default Education
