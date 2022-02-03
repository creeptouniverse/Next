import Image from 'next/image';
import Link from 'next/link';
import Logo from"../image/Logo.png"
import Dark from "../image/Dark.png"
export default function Navbar(){
    return(
        <>
          <section className="et-hero-tabs">
            <div className=''>

    <h1>CREEPTO UNIVERSE</h1>
    <div class="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div class="md:flex">
    <div class="md:shrink-0">
      <Image class="h-48 w-full object-cover md:h-full md:w-48" src={Dark} alt="Man looking at item at a store"></Image>
    </div>
    <div class="p-8">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Finding customers for your new business</a>
      <p class="mt-2 text-slate-500">Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your first customers.</p>
    </div>
  </div>
</div>

    <h3>Sliding content with sticky tab nav</h3></div>
    <div className="fixed et-hero-tabs-container">
      <a className="et-hero-tab" href="#tab-es6">Information</a>
      <a className="et-hero-tab" href="#tab-flexbox">Members</a>
      <a className="et-hero-tab" href="#tab-react">Roadmap</a>
      <a className="et-hero-tab" href="#tab-angular">About Us</a>
      <a className="et-hero-tab" href="#tab-other">Contact</a>

      <span className="et-hero-tab-slider"></span>
    </div>
  </section>

  
        </>
    )
}