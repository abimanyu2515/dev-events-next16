'use client'

import Image from "next/image"
import arrowDown from '@/public/icons/arrow-down.svg'

const ExploreBtn = () => {
  return (
    <a href="#events">
      <button type="button" id="explore-btn" className="mt-7 mx-auto" onClick={() => console.log("Hello, Man")}>
          <span>Explore Events</span>
          <Image className="ml-2" src={arrowDown} alt="arrow-down" width={24} height={24} />
      </button>
    </a>
  )
}

export default ExploreBtn