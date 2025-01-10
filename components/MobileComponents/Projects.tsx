import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const MobileProjects = () => {
  const project = [

    {
      name: "Cli Number Guessing Game",
      image: "new.png",
      detail: "This is a \"code with owais cli number guessing game\" Run the following command to experience a CLI number guessing game: \"npx code-with-owais-cli-number-guessing-game\"",
      Link: "https://github.com/MuhammadOwais1412/Cli-Number-Gussing-Game.git"
    },
    {
      name: "Dynamic Resume Builder",
      image: "cv.jpg",
      detail: "This is an Editable and shareable Dynamic resume builder Project",
      Link: "https://hackathon-milestone-5-sandy.vercel.app/"
    },
    {
      name: "E-commerce website",
      image: "image.jpeg",
      detail: "This is an e-commerce website with focused on frontend design approach",
      Link: "https://next-js-hackathon-pi.vercel.app/"
    },

  ]

  return (
    <div className='w-full p-5'>
      <h2 className="border-b border-blue-300 pb-2 text-3xl font-semibold tracking-tight">
        Projects
      </h2>

      <div className="mt-4 flex flex-wrap -m-4">

        {/* My Projects here */}

        {project.map((item, i) => (
          <div key={i} className="lg:w-1/3 sm:w-1/2 p-4">
            <div className="flex relative h-64">
              <Image
                src={`/assets/${item.image}`}
                alt="Project-Pic"
                width={1000}
                height={1000}
                priority={true}
                className="absolute inset-0 w-full h-full object-cover object-center"
              />
              <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 cursor-pointer duration-300">

                <h2 className="text-lg font-bold text-gray-900 mb-3">
                  {item.name}
                </h2>
                <p className="leading-relaxed line-clamp-3 mb-3">
                  {item.detail}
                </p>
                <Link href={item.Link} target='_blank' className='text-sm font-medium hover:text-blue-500 hover:underline'>
                  View Project
                </Link>
              </div>
            </div>
          </div>))}

      </div>
    </div>
  )
}

export default MobileProjects
