import { NavLink } from "react-router-dom"
import { range } from "./function/helper"
import { useProgress } from "./function/Context"

const BackGroundHOC = () => {

  const { progress } = useProgress()
  
  const arrProgress = ['https://imgur.com/N1fVaSc.png','https://imgur.com/0R8PbkO.png','https://imgur.com/vF5eTuJ.png','https://imgur.com/X55xM3r.png','https://imgur.com/ffzda8u.png']

  return (
    <>
      <div className='fixed bottom-0 w-screen'>
        
        <div className={`
        ${Math.round(range()) == 1 ? 'bg-[#80C74F]' : 'bg-[#8C6A5E]'}
        ${progress - 1 === 0 ? 'bg-transparent' : ''}
         h-[72px] w-full relative`}>
          {/* <div className="absolute bg-[url('https://imgur.com/ffzda8u.png')] w-full h-[475px] bg-no-repeat bottom-0 bg-[center_center]"></div> */}
          <img className="absolute -bottom-[2px] mx-auto" src={arrProgress[progress - 1]} alt="" />
        </div>
        <div className='bg-[#473438] h-[108px] w-full flex justify-between items-center px-[60px]'>
          <NavLink className='font-bold text-[28px] text-white' to='/'><span className='mr-8'>〈</span>前往上一座島</NavLink>
          <NavLink className='font-bold text-[28px] text-white' to='/'>前往下一座島<span className='ml-8'>〉</span></NavLink>
        </div>
      </div>
    </>
  )
}

export default BackGroundHOC