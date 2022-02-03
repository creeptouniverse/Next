import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Logo from './image/Logo.png'
import Link from 'next/link'
import Script from 'next/script'
import Navbar from './compo/Navbar'
import Information from './compo/Information'
import Members from './compo/Members'
import Roadmap from './compo/Roadmap'
import About from './compo/About'
import Contact from './compo/Contact'

export default function Home() {
  return (
    <>
    <Navbar />


  <main className="et-main">
    <Information />
    <Members />
   <Roadmap />
    <About />
 <Contact />
  </main>
  <script>
  {
    className StickyNavigation {
	
      constructor() {
        this.currentId = null;
        this.currentTab = null;
        this.tabContainerHeight = 70;
        let self = this;
        $('.et-hero-tab').click(function() { 
          self.onTabClick(event, $(this)); 
        });
        $(window).scroll(() => { this.onScroll(); });
        $(window).resize(() => { this.onResize(); });
      }
      
      onTabClick(event, element) {
        event.preventDefault();
        let scrollTop = $(element.attr('href')).offset().top - this.tabContainerHeight + 1;
        $('html, body').animate({ scrollTop: scrollTop }, 600);
      }
      
      onScroll() {
        this.checkTabContainerPosition();
        this.findCurrentTabSelector();
      }
      
      onResize() {
        if(this.currentId) {
          this.setSliderCss();
        }
      }
      
      checkTabContainerPosition() {
        let offset = $('.et-hero-tabs').offset().top + $('.et-hero-tabs').height() - this.tabContainerHeight;
        if($(window).scrollTop() > offset) {
          $('.et-hero-tabs-container').addclassName('et-hero-tabs-container--top');
        } 
        else {
          $('.et-hero-tabs-container').removeclassName('et-hero-tabs-container--top');
        }
      }
      
      findCurrentTabSelector(element) {
        let newCurrentId;
        let newCurrentTab;
        let self = this;
        $('.et-hero-tab').each(function() {
          let id = $(this).attr('href');
          let offsetTop = $(id).offset().top - self.tabContainerHeight;
          let offsetBottom = $(id).offset().top + $(id).height() - self.tabContainerHeight;
          if($(window).scrollTop() > offsetTop && $(window).scrollTop() < offsetBottom) {
            newCurrentId = id;
            newCurrentTab = $(this);
          }
        });
        if(this.currentId != newCurrentId || this.currentId === null) {
          this.currentId = newCurrentId;
          this.currentTab = newCurrentTab;
          this.setSliderCss();
        }
      }
      
      setSliderCss() {
        let width = 0;
        let left = 0;
        if(this.currentTab) {
          width = this.currentTab.css('width');
          left = this.currentTab.offset().left;
        }
        $('.et-hero-tab-slider').css('width', width);
        $('.et-hero-tab-slider').css('left', left);
      }
      
    }
    
  };
  </script>
    </>
  )
}
