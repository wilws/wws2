// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Main from '../components/layout/Main'
import Foot from "../components/layout/Foot";
import Head from "../components/layout/Head";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="main-container">
      <Head/>
      <Main/>
      <Foot/>
    </div>
  )
}
