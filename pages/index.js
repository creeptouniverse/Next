import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from './image/Logo.png'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from './compo/Navbar'
import Information from './compo/Information'
import Members from './compo/Members'
import Roadmap from './compo/Roadmap'
import About from './compo/About'
import Contact from './compo/Contact'


export default function Home() {
  return (
    <>
    <Navbar />

  <main className="et-main">
    <Information />
    <Members />
   <Roadmap />
    <About />
 <Contact />
  </main>
  <div className='fixed shadow-indigo-500/50 bottom-0 p-2 m-2 rounded right-0 bg-blue-800 text-white'>
<Link href="/">
  <a>
  <button className=''>Home</button></a>
</Link>
  </div>
    </>
  )
}
