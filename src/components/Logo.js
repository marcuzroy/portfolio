import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from "next/image";
import MyLogo from '../../public/images/profile/marc-logo.png'


let MotionLink = motion(Link);

const Logo = () => {
  return (
    <div
      className='flex flex-col items-center justify-center'>
      <a href='/'>
        <Image
          className="w-20 h-20"
          src={MyLogo}
          alt="Marc Roy"
        />
      </a>

    </div>
  )
}

export default Logo