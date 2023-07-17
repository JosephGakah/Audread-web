import Image from "next/image";

export default function Featured() {
  return (
    <section className="pt-24 pb-24">
        <div className="container">
            <div className="text-[#f1f1ef] text-3xl md:text-5xl text-center text-title mt-6">
                Featured and seen in
            </div>
            <ul className="seen_logos__V_t6Z flex flex-col md:flex-row justify-center gap-3 mt-9">
                <a href="https://techcrunch.com/2023/02/21/chronicle/" className="hover:bg-loading/5" target="_blank">
                    <Image src="/images/citizen.png" alt="" className="" height={48} width={100}></Image>            
                </a>
            </ul>
        </div>
    </section>
  )
}
