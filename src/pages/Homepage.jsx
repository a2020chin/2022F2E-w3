import { useEffect , useRef } from 'react'
import tw from "tailwind-styled-components"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const Homepage = () => {

  const tl = useRef(null);

  useEffect(() => {
    // tl.current =  gsap.timeline({
    //   scrollTrigger: {
    //     trigger: '.am_MediumShot',
    //     markers: true,
    //     start: 'top 0',
    //     end: '200%',
    //     pin: true, 
    //     scrub: 1,
    //     pinSpacer: true
    //   }
    // })
    //   .to('.am_MediumCloseUp',{
    //     top: '-50%',
    //   })
  


    // return () => {
    //   tl.current.kill()
    // }
  },[])

  return (
    <>
      <MediumShot>
        <MediumCloseUp/>
        <LongShot/>
      </MediumShot>
    </>
  )
}



const MediumCloseUp = tw.div`
  am_MediumCloseUp
  w-full
  h-full
  absolute
  left-0
  top-0
  bg-[url('https://imgur.com/suJ7Jc5.png')]
  bg-cover
  bg-no-repeat
`
const MediumShot = tw.div`
  am_MediumShot
  w-screen
  h-screen
  relative
  overflow-x-hidden
  bg-[url('https://imgur.com/9QutbbP.png')]
  bg-cover
`
const LongShot = tw.div`
  w-full
  h-full
  absolute
  right-0
  bg-[url('https://imgur.com/3MtSbSW.png')]
  bg-cover
  bg-no-repeat
`



export default Homepage