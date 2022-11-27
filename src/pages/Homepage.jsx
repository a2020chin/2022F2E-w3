
import tw from "tailwind-styled-components";

import Welcome from '../components/Welcome';




const Homepage = () => {


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

  return (
    <>
      <MediumShot>
        <LongShot />
      </MediumShot>
      <Welcome />
    </>
  )
}




export default Homepage