import { useState, ReactNode} from 'react';
import Header from '../Header/Navbar';
import Footer from '../footer/footer';
import Service from '..//Service'
import Partner from '../Partner'
import AboutComp from '../AboutMarket'
import Usecase from '../uesCase'
import Intro from '../intro'
import Update from '../update';
import News from '../news';
import Contact from '../contact';


interface Props{
    children?: ReactNode
    showComponents?: boolean;

}
export default function Layout({children, showComponents = false }: Props) {
    
    return (
        <>
        <Header/>
        <main>{children}
        {showComponents && (
          <>
            <Intro />
            <Service />
            <Usecase />
            <Partner />
            <AboutComp />
            <Update/>
            <News/>
            <Contact/>
          </>
        )}
      </main>
      <Footer />
      </>

    )
}
