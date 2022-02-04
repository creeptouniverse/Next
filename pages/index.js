import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
 <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
        <Image alt="Vercel logo" src="/Dark.png" width={100} height={100}/>
  
      <Navbar />

  <main className="et-main">
    <Information />
    <Members />
   <Roadmap />
    <About />
 <Contact />
  </main>
  <div className='fixed flex shadow-lg hover:shadow-green-500/50 w-full bottom-0 p-2 rounded bg-black text-white'>
  <a className="et-hero-tab" href="#tab-es6">Information</a>
      <a className="et-hero-tab" href="#tab-flexbox">Members</a>
      <a className="et-hero-tab" href="#tab-react">Roadmap</a>
      <a className="et-hero-tab" href="#tab-angular">About Us</a>
      <a className="et-hero-tab" href="#tab-other">Contact</a>
  </div>
  
    </>
  )
}
