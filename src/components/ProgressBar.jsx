import tw from "tailwind-styled-components"

const ProgressBar = ({ props }) => {

  const Progress = tw.div`
    ${(p) => p.$state == 'active' ? 'bg-[url("https://imgur.com/Rsq4v3P.png")]' : p.$state == 'inactive' ? 'bg-[url("https://imgur.com/l1yDDey.png")]' : 'bg-[url("https://imgur.com/yNOh0KJ.png")]'}
    w-9
    h-8
    bg-contain
    bg-no-repeat
  `

  return (
    <>
      <div className="container mt-1 flex justify-between items-center">
        <Progress $state={'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
        </div>
        <Progress $state={'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
        </div>
        <Progress $state={'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
        </div>
        <Progress $state={'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
        </div>
        <Progress $state={'inactive'} />
        <div className="flex gap-5">
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
          <div className="w-2 h-2 rounded-full bg-[#2C8492/50%]"></div>
        </div>
        <Progress $state={'inactive'} />
      </div>
    </>
  )
}

export default ProgressBar