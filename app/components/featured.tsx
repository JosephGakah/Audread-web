import Image from "next/image";

export default function Featured() {
  return (
    <section className="pt-24 pb-24">
        <div className="container">
            <div className="text-white text-3xl md:text-5xl text-center text-title mt-6">
                Featured and seen in
            </div>
            <ul className="flex flex-col md:flex-row justify-center gap-3 mt-9">
                <a 
                    href="https://techcrunch.com/2023/02/21/chronicle/" className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/logo-techcrunch.svg" alt="" className=""></Image>
                </a>
                <a 
                    href="https://www.forbes.com/sites/davidprosser/2023/02/21/how-chronicle-plans-to-kill-off-the-slide-deck-after-four-decades/?sh=1480edc8474f" 
                    className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/logo-forbes.svg" alt="" className=""></Image>
                </a>
                <a 
                    href="https://www.businessinsider.com/chronicle-saas-presentation-startup-raises-75-million-2023-2?_gl=1*1mf8wev*_ga*ODA2NDg2NjEuMTY3Njk4NDYzNg..*_ga_E21CV80ZCZ*MTY3Njk4NDYzNS4xLjEuMTY3Njk4NDY0NC4wLjAuMA#-2" 
                    className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/logo-bi.svg" alt="" className=""></Image>
                </a>
                <a 
                    href="https://www.beondeck.com/post/on-decks-top-companies-2022" className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/logo-ondeck.svg" alt="" className=""></Image>
                </a>
                <a 
                    href="https://venturecapital.cmail20.com/t/d-e-zdhddik-irtiljurdj-t/" className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/logo-wsj.svg" alt="" className=""></Image>
                </a>
                <a 
                    href="https://www.cnbctv18.com/startup/chronicle-raises-75-million-in-seed-funding-round-from-square-peg-and-accel-15997701.htm" 
                    className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/logo-cnbc.svg" alt="" className=""></Image>
                </a>
            </ul>
        </div>
    </section>
  )
}
