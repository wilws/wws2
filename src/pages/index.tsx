import { Inter } from 'next/font/google'
import Main from '../components/layout/Main'
import Foot from "../components/layout/Foot";
import Head from "../components/layout/Head";



const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="app-container">
   
      <Head/>
      <Main/>

    </div>
  )
}
