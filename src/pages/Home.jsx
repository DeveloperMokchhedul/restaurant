import Cart from '@/component/common/Cart'
import CommonBtn from '@/component/common/CommonBtn'
import React from 'react'

function Home() {
  return (
    <div>
      <h1 className='text-3xl bg-bgPrimary text-white text-center py-3 '> hey this is home page of restaurant website</h1>
      <CommonBtn className={""}>hey welcome to shadcn </CommonBtn>
      <Cart />
    </div>
  )
}

export default Home