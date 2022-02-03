import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from './image/Logo.png'
import Link from 'next/link'
import Navbar from './compo/Navbar'

export default function Home() {
  return (
    <>
    <Navbar />
    <h1>hello</h1>
    <h2>hi</h2>
    </>
  )
}
