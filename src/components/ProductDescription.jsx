import React from 'react'

const ProductDescription = () => {
  return (
   <div className='mt-20'>
    <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
    </div>
    <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat maxime sapiente eveniet quisquam. Harum sequi vitae optio, doloremque iste, illum ipsam culpa magnam quisquam quibusdam ratione beatae ab fugit nihil.</p>
    </div>
   </div>
  )
}

export default ProductDescription
