import React from 'react'
import { Card, CardContent, CardHeader, CardTitle, } from "@/components/ui/card"
import { FaCheckSquare } from 'react-icons/fa'

const Skills = () => {
  return (
    <div>
      <Card data-aos="zoom-in" className='h-[85vh] overflow-y-scroll'>
        <CardHeader>
          <CardTitle className='font-bold text-3xl uppercase mt-3'>Skills:</CardTitle>
        </CardHeader>

        <CardContent className="space-y-2">

          {/* Skills here  */}

          <div className="flex flex-wrap mt-5">

            {/* HTML */}
            <div className="p-4 w-full md:w-1/3">

              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <FaCheckSquare className="text-white text-lg" />
                </div>
                <h2 className="text-lg font-semibold ">
                  HTML
                </h2>
              </div>
              <div className="w-full h-1 bg-gray-400 rounded-lg">
                <div className="w-[100%] h-full bg-blue-400 rounded-lg"/>
                <h3 className="text-sm text-blue-400 tracking-tight font-semibold text-right">100%</h3>
              </div>
              
              
            </div>


            {/* CSS */}
            <div className="p-4 w-full md:w-1/3">

              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <FaCheckSquare className="text-white text-lg" />
                </div>
                <h2 className="text-lg font-semibold ">
                  CSS
                </h2>
              </div>
              <div className="w-full h-1 bg-gray-400 rounded-lg">
                <div className="w-[95%] h-full bg-blue-400 rounded-lg"/>
                <h3 className="text-sm text-blue-400 tracking-tight font-semibold text-right">95%</h3>
              </div>       
              
            </div>

            {/* Typescript/Js */}
            <div className="p-4 w-full md:w-1/3">

              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <FaCheckSquare className="text-white text-lg" />
                </div>
                <h2 className="text-lg font-semibold ">
                Javascript / Typescript
                </h2>
              </div>
              <div className="w-full h-1 bg-gray-400 rounded-lg">
                <div className="w-[80%] h-full bg-blue-400 rounded-lg"/>
                <h3 className="text-sm text-blue-400 tracking-tight font-semibold text-right">80%</h3>
              </div>       
              
            </div>


            {/* Next.js */}
            <div className="p-4 w-full md:w-1/3 mt-5">

              <div className="flex items-center mb-3">
                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
                  <FaCheckSquare className="text-white text-lg" />
                </div>
                <h2 className="text-lg font-semibold ">
                  Next.js
                </h2>
              </div>
              <div className="w-full h-1 bg-gray-400 rounded-lg">
                <div className="w-[85%] h-full bg-blue-400 rounded-lg"/>
                <h3 className="text-sm text-blue-400 tracking-tight font-semibold text-right">85%</h3>
              </div>       
              
            </div>

          </div>


        </CardContent>
      </Card>
    </div>
  )
}

export default Skills