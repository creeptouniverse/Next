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
    </>
  )
}
