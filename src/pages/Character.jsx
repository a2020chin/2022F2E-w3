import { useEffect } from 'react'
import tw from "tailwind-styled-components"
import { NavLink } from 'react-router-dom';
import { useProgress } from '../components/function/Context';

import BubbleEffect from '../components/Bubble';

const Character = () => {

  const bubble = new BubbleEffect();

  const { setProgress } = useProgress()

  

  useEffect(() => {
    setProgress(0)
  },[])

  useEffect(()=>{
    bubble.init()
    window.addEventListener('resize', () => { bubble.resize(window.innerWidth, window.innerHeight) });

    return () => {
      window.removeEventListener('resize', () => bubble.resize(window.innerWidth, window.innerHeight) );
    }
  })


  const Bubble = tw.canvas`
    fixed
    h-screen
    -z-10
    bg-gradient-to-t
    from-[#2C8492]
    to-[#70D6DF]
  `
  const Card = tw.div`
    px-12
    py-9
    bg-[rgba(44,132,146,0.5)]
    rounded-[20px]
    flex
    flex-col
    items-center
    justify-between
    gap-9
    text-center
  `

  return (
    <div className='h-screen'>
      <Bubble id='bubble' />
      <div className='container flex flex-col items-center pt-10'>
        <h2 className='text-[60px] font-bold text-white mb-6'>角色介紹</h2>
        <div className='grid grid-cols-3 gap-[66px] mb-6'>
          <Card>
            <img className='w-[136px] h-[294px]' src="https://imgur.com/zlI29nm.png" alt="" />
            <h3 className='text-5xl font-bold text-white'>
              產品負責人
              <br />
              <span className='text-[32px]'>Product Owner</span>
            </h3>
            <p className='text-2xl text-white'>
              產品方向及願景，定義產品細節、優先級別、交付時間，清楚的表達及排序產品待辦事項。
            </p>
          </Card>
          <Card>
            <img className='w-[136px] h-[294px]' src="https://imgur.com/VEGEx1x.png" alt="" />
            <h3 className='text-5xl font-bold text-white'>
              敏捷教練
              <br />
              <span className='text-[32px]'>Scrum Master</span>
            </h3>
            <p className='text-2xl text-white'>
              確保開發團隊遵循Scrum的價值觀，使團隊能正確且合理地運作。教育組織內部，幫助團隊理解Scrum。
            </p>
          </Card>
          <Card>
            <img className='w-[136px] h-[294px]' src="https://imgur.com/bkrHoFg.png" alt="" />
            <h3 className='text-5xl font-bold text-white'>
              開發團隊
              <br />
              <span className='text-[32px]'>Development Team</span>
            </h3>
            <p className='text-2xl text-white'>
              負責開發與交付產品，可為跨領域團隊，由設計師、工程師等不同專業人士組成。
            </p>
          </Card>
        </div>
        <NavLink className='self-end font-bold text-white text-[28px]' to='/ProductAgentList'>前往下一座島<span className='ml-8'>〉</span></NavLink>
      </div>
    </div>
  )
}

export default Character