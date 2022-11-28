import tw from "tailwind-styled-components"
import { Outlet } from "react-router-dom"
import { useProgress } from "./function/Context"

const ProgressBar = ( props ) => {

  const { progress } = useProgress()

  const Progress = tw.div`
    ${(p) => p.$state == 'active' ? 'bg-[url("https://imgur.com/Rsq4v3P.png")]' : p.$state == 'inactive' ? 'bg-[url("https://imgur.com/l1yDDey.png")]' : 'bg-[url("https://imgur.com/yNOh0KJ.png")]'}
    w-9
    h-9
    bg-contain
    bg-no-repeat
  `

  return (
    <>
      <div className="container fixed top-1 flex justify-between items-center">
        <Progress $state={progress == 0  ? 'active' : progress > 0 ? 'none' : 'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
        </div>
        <Progress $state={progress == 1  ? 'active' : progress > 1 ? 'none' : 'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
        </div>
        <Progress $state={progress == 2  ? 'active' : progress > 2 ? 'none' : 'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
        </div>
        <Progress $state={progress == 3  ? 'active' : progress > 3 ? 'none' : 'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
        </div>
        <Progress $state={progress == 4  ? 'active' : progress > 4 ? 'none' : 'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
          <div className="w-2 h-2 rounded-full bg-[rgba(44,132,146,0.5)]"></div>
        </div>
        <Progress $state={progress == 5  ? 'active' : progress > 5 ? 'none' : 'inactive'} />
      </div>
      < Outlet />
    </>
  )
}

export default ProgressBar