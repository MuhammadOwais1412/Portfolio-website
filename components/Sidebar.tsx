import Image from "next/image"
import { Button } from "./ui/button"
import Typewriter from 'typewriter-effect';
import { FaCloudDownloadAlt, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="h-screen flex flex-col justify-center items-center p-3">
      {/* image */}

      <Image src={"/assets/profile-pic.png"} alt="Profile Pic" width={250} height={250} priority={true} className="rounded-md" />

      {/* Name here */}

      <div className="mt-2 text-center">
        <h1 className="text-2xl font-bold tracking-tight uppercase py-2">Muhammad Owais Tasawar</h1>
        <h2 className="text-lg font-semibold tracking-tight text-gray-600">
          <Typewriter
            options={{
              strings: ['Web Developer', 'UI/UX Designer'],
              autoStart: true,
              loop: true,
            }}
          />
        </h2>

      </div>


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

      <Link href="#" className="mt-4">

        <Button className="font-semibold hover:bg-sky-300 hover:shadow-lg hover:text-black">
          <FaCloudDownloadAlt className="mr-1" /> Download CV
        </Button>

      </Link>

    </div>
  )
}