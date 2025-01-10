import Image from "next/image"
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { Button } from "../ui/button";

const MobileCard = () => {
  return (
    <div  className='h-[90vh] flex flex-col items-center justify-center'>
      <div className="card glass bg-blue-100 mt-5 w-[95%] p-5 flex flex-col justify-center items-center">

        <Image src={"/assets/profile-pic.png"} alt="Profile Pic" width={250} height={250} priority={true} className="rounded-md mx-auto" />

        <div className="card-body flex flex-col justify-center items-center">
          <h1 className="card-title text-2xl text-center font-bold tracking-tight uppercase py-2">Muhammad Owais Tasawar</h1>
          <h2 className="text-lg font-semibold text-blue-500">
            <Typewriter
              options={{
                strings: ['Web Developer', 'UI/UX Designer'],
                autoStart: true,
                loop: true,
              }}
            />
          </h2>

          {/* Social Media Links */}

          <div className="mt-4 grid grid-cols-2 gap-3">

            <div>
              <Link href="#" target="_blank" className="text-gray-500 hover:text-[#0077B5]">
                <FaLinkedin className="text-4xl" />
              </Link>
            </div>

            <div>
              <Link href="https://github.com/MuhammadOwais1412" target="_blank" className="text-gray-500 hover:text-[#333]">
                <FaGithubSquare className="text-4xl" />
              </Link>
            </div>

          </div>

           {/* Download CV Button */}
          <Link href="#" className="mt-4 w-full flex justify-center">

            <Button className="font-semibold hover:bg-sky-300 hover:shadow-lg hover:text-black">
              <FaCloudDownloadAlt className="mr-1" /> Download CV
            </Button>

          </Link>
        </div>
      </div>
    </div>
  )
}

export default MobileCard
