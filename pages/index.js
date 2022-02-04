import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from './compo/Navbar'
import Aboutus from './compo/Aboutus'
import Information from './compo/Information'
import Roadmap from './compo/Roadmap'
import Contact from './compo/Contact'
import Members from './compo/Members'
export default function Home() {
  return (
    <>
    <section>
   <Navbar />
   <Information />
   <Members />
   <Roadmap />
   <Aboutus />
   <Contact />
   </section>
   <div className="fixed p-1 bottom-0 flex w-full bg-black">
      <a className="et-hero-tab" href="#information">Information</a>
      <a className="et-hero-tab" href="#members">Members</a>
      <a className="et-hero-tab" href="#roadmap">Roadmap</a>
      <a className="et-hero-tab" href="#aboutus">About Us</a>
      <a className="et-hero-tab" href="#contact">Contact</a>

      <span className="et-hero-tab-slider"></span>
    </div>
   </>
  )
}
