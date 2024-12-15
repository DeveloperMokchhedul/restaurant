

import Recent from '@/component/home/recent/Recent'
import Review from '@/component/home/Review'
import Service from '@/component/home/Service'
import Trend from '@/component/home/Trend'
import React from 'react'

function Home() {
  return (
    <div>
      <Service />
      <Trend />
      <Review />
      <Recent />

    </div>
  )
}

export default Home