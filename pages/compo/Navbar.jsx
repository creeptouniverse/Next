import Image from 'next/image';
import Link from 'next/link';
import Logo from '../image/Logo.png'
export default function Navbar(){
    return(
        <>
     <nav>
     <div className='place-content-center w-40 fixed top-0 left-0 right-0'>
        <Image src={Logo} className=""></Image>
        </div>
      <div>
        
        <ul className="flex gap-5 bg-gray-800 text-white h-10 p-2">
          <li><Link href='/' ><a>Home</a></Link></li>
          <li><Link href='/Members'><a>Members</a></Link></li>
          <li><Link href='/Roadmap'><a>Roadmap</a></Link></li>
          <li><Link href='/About'><a>About</a></Link></li>
        </ul>
        <div className='place-content-center w-40 fixed top-0 left-0 right-0'>
        <Image src={Logo} className=""></Image>
        </div>

      </div>
  
    </nav>
    <div className='typing'>
      This is a typing demo.
      </div>
        </>
    )
}