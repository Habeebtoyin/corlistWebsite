
import type { NextPage } from 'next'
import Intro from '../component/intro'
import Head from 'next/head'
import Image from 'next/image'
// import { Inter } from 'next/font/google'
// import styles from '@/styles/Home.module.css'
import Navbar from '../component/Header/Navbar'
import Service from '../component/Service'
import Partner from '../component/Partner'
import AboutComp from '../component/AboutMarket'
import Usecase from '../component/uesCase'
import Footer from '../component/footer/footer';
import Layout from '../component/Layout'
import About from '@/pages/about';
import Contact from '@/component/contact'

const  Home: NextPage =()  => {
  return (
    
    <div>
      <Layout showComponents={true}>debug</Layout>
    {/* <Layout/> */}
    {/* <Intro/>
<Service/>
<Usecase/>
<Partner/>
<AboutComp/> */}

    </div>

  
  )
}
export default Home