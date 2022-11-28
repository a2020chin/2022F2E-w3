import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { Link } from 'react-router-dom';

import BubbleEffect from '../components/Bubble';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

gsap.registerPlugin(TextPlugin);
gsap.registerPlugin(ScrollTrigger);


const Welcome = () => {

  const bubble = new BubbleEffect();

  useEffect(() => {
    bubble.init()
    window.addEventListener('resize', () => { bubble.resize(window.innerWidth, window.innerHeight) });

    gsap.timeline({
      scrollTrigger: {
        trigger: ".am_welcome",
        markers: true,
        start: 'top 0',
      }
    })
      .to('.am_text1', {
        duration: 1.3,
        text: '歡迎來到Scrum新手村~我是鈦坦吉祥物Tica!',
        stagger: {
          each: 0.15
        }
      })
      .to('.am_text2', {
        duration: 1.3,
        text: '首先恭喜你加入 TT 資訊小組！',
        stagger: {
          each: 0.15
        }
      })
      .to('.am_text3', {
        duration: 1.3,
        text: '在正式加入專案開發之前，需要請你先了解',
        stagger: {
          each: 0.15
        }
      })
      .to('.am_text4', {
        duration: 1.3,
        text: 'Scrum 的流程與精神！',
        stagger: {
          each: 0.15
        }
      })
      .to('.am_text5', {
        duration: 1.3,
        text: '接受挑戰任務，成為Scrum大師吧～',
        stagger: {
          each: 0.15
        }
      })
      .to('.am_toCharacter', {
        opacity: 1
      })

    return (() => {
      window.removeEventListener('resize', () => { bubble.resize(window.innerWidth, window.innerHeight) });
    })
  }, [])







  const MediumCloseUp = tw.div`
    w-screen
    h-screen
    absolute
    left-0
    bottom-0
    -translate-y-[55%]
    bg-[url('https://imgur.com/MSDbP3b.png')]
    bg-contain
    bg-no-repeat
  `

  const Bubble = tw.canvas`
    bg-gradient-to-b
    from-[#2C8492]
    to-[#70D6DF]
  `

  const Dialogue = tw.div`
    absolute
    w-1/2
    h-1/2
    top-1/2
    left-1/2
    flex
    flex-col
    justify-between
    -translate-x-1/2
    -translate-y-1/2
    border-[5px]
    border-[#473438]
    py-8
    pl-9
    pr-[30px]
    rounded-2xl
    bg-white

    before:content-['']
    before:border-[transparent_transparent_transparent_#473438]
    before:border-y-[25px]
    before:border-l-[80px]
    before:absolute
    before:-bottom-[40px]
    before:-right-[55px]
    before:rotate-45

    after:content-['']
    after:border-[transparent_transparent_transparent_#ffffff]
    after:border-y-[20px]
    after:border-l-[75px]
    after:absolute
    after:-bottom-[29px]
    after:-right-[47px]
    after:rotate-45
    `

  const WelcomeText = tw.p`
    ${(p) => (p.$textnum && `am_${p.$textnum}`)}
    ${(p) => (p.$blod && 'font-bold')}
    
    font-NotoSans
    text-[32px]
    leading-[57.5px]
    
  `




  return (
    <section className='am_welcome relative w-screen h-screen'>
      <Bubble id='bubble' />
      <MediumCloseUp />
      <Dialogue>
        <div>
          <WelcomeText $textnum={'text1'} />
          <WelcomeText $textnum={'text2'} />
          <WelcomeText $textnum={'text3'} />
          <WelcomeText $textnum={'text4'} $blod={true} />
          <WelcomeText $textnum={'text5'} />
        </div>
        <Link className='am_toCharacter px-12 py-4 bg-[#70D6DF] rounded-xl shadow-[4px_4px_4px_rgba(0,0,0,0.25)] self-end font-bold text-[28px] opacity-0' to="/Character" >接受挑戰</Link>
      </Dialogue>
      <img className='absolute bottom-3 right-8' src="./images/Tica.png" alt="" />
    </section>
  )
}




export default Welcome