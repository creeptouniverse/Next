import Image from 'next/image';
import Link from 'next/link';
export default function Navbar(){
    return(
        <>
          <section className="et-hero-tabs">
            <div className=''>

    <h1>CreepTo</h1>
    <h3>Sliding content with sticky tab nav</h3></div>
    <div className="et-hero-tabs-container">
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