import Image from 'next/image'
import Header from './components/header'
import Featured from './components/featured'


export default function Home() {
  return (
    <>
      <div className="loading-wrapper"></div>
      <div className="header-wrapper"></div>
      <div className="page-wrapper">
        <section className="pt-24 pb-24">
        <div className="container">
            <div className="text-3xl md:text-5xl text-center text-title mt-6">
                Featured and seen in
            </div>
        </div>
    </section>
      </div>
      <div className="footer-wrapper"></div>
    </>
  )
}
