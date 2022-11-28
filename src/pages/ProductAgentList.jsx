import { useEffect } from "react"
import { useProgress } from "../components/function/Context"

import BackGroundHOC from "../components/BackGroundHOC"

const ProductAgentList = () => {

  const { setProgress } = useProgress()

  useEffect(() => {
    setProgress(1)
  },[])

  return (
    <BackGroundHOC></BackGroundHOC>
  )
}

export default ProductAgentList