import Image from 'next/image'
import Header from './components/header'
import Featured from './components/featured'
import { AboutSection } from './components/about'


export default function Home() {
  return (
    <>
      <div className="loading-wrapper"></div>
      <div className="header-wrapper"></div>
      <div className="page-wrapper">
        <Featured></Featured>
        <AboutSection></AboutSection>
        <section className='section'></section>
      </div>
      <div className="footer-wrapper"></div>
    </>
  )
}
