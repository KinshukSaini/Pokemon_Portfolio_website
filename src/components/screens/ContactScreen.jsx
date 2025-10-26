import React, { useState } from 'react'
import Image from 'next/image';
const ContactScreen = () => {

  return (
    <div className="z-90 p-[1%] pt-[2%] h-[90%] w-[80%] gap-auto bg-[#DBCBB0] flex items-center justify-around rounded-[2vh] text-box-shadow">
      <div className='bg-[#D9D9D9] h-full border-[#714906] border-[2px] w-[60%]'>

      </div>
      <div className='bg-[#DBCBB0] h-full w-[38%] flex flex-col'>
        <div className='bg-white m-auto h-[55%] w-[70%]'>

        </div>
        <div className='bg-[#DBCBB0] h-[45%] m-auto w-[80%]'>
          <div className='flex flex-row'>
            <div className='bg-[#E2BE82] h-[80px] m-auto w-[90px] rounded-[1.7vh] mt-4 flex items-center justify-center icon-box-shadow'>
              <Image src="/git.svg" width={50} height={50} alt="GitHub" />
            </div>
            <div className='bg-[#E2BE82] h-[80px] m-auto w-[90px] rounded-[1.7vh] mt-4 flex items-center justify-center icon-box-shadow'>
              <Image src="/linkedin.svg" width={50} height={50} alt="LinkedIn" />
            </div>
            <div className='bg-[#E2BE82] h-[80px] m-auto w-[90px] rounded-[1.7vh] mt-4 flex items-center justify-center icon-box-shadow'>
              <Image src="/gmail.svg" width={50} height={50} alt="Gmail" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactScreen