import React from 'react'

const PointsParlor = () => {
  return (
    <div className='bg-[#111111] pt-[5rem] md:pl-[5rem] h-full pb-5 font-[ProFontWindows]'>
      <div className='flex-col  lg:flex-row items-center flex justify-between'>
        <div className='flex flex-row  h-[7rem] w-[30rem]  items-center justify-around m-auto'>
       
       <div className=' p-3 '> 
        <div
            className='points_main_div_right_svg h-[7rem] w-32 items-center flex'>
            <img src='https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg' alt='' className='styled-image '/>
         </div>
         </div>
         <div className='flex w-full h-full pl-[5%]  points_main_div   flex-col  '>
            <div className='flex flex-row items-center justify-center gap-x-5  w-full m-auto'>
            <div className='text-xl'>LINEA</div>
            <div className='flex flex-col'>
              <div>
                3/123
              </div>
              <div className='text-base text-gray-600'>Task completed</div>
            </div>
            </div>
            <div className='text-center flex flex-row justify-center w-full '>
              <div className='justify-end px-3 m-auto text-gray-600  w-[30%] flex items-center text-center  bg-transparent '>XP</div>
              
              <div className=' flex flex-col pt-3 relative w-full  '>
              <div className="w-full h-1   bg-[#212121]  ">
              <div
                  className="bg-[#cb03cf]   h-1  absolute"
                style={{ width: `${40}%` }}
              >
                  <div className="w-full h-full bg-[#cb03cf] progress_bar_shadow    absolute " />
                  <div className="w-full h-full bg-[#cb03cf]   absolute " />
              </div>
            </div>
            <div className='text-xs text-[#cb03cf] flex w-full px-5 pt-1 justify-start'>{40} Xps</div>
            </div>
            </div>
         </div>

         
        </div>
        <div className='flex flex-row border-t border-white/10 border-b text-gray-500 text-xl p-3 w-[31rem] justify-between h-32 bg-[#111111] shadow-lg shadow-[#0d0d0d]  items-center  m-auto'>      
            <div className='flex   flex-col  gap-5  w-full   '>
            <div className='text-sm   text-[#4d4d4d] flex flex-row gap-1 justify-between '> 
            <div className=''>#1</div>
            <div className='justify-start   w-[40%] px-2'><del> Connect Gitcoin</del></div>
            <div className='relative pt-2 w-full '>
            <div className="w-full h-1  opacity-25  bg-img   ">
              <div
                  className="   h-1  absolute"
                style={{ width: `${20}%` }}
              >
                  <div className="w-full  h-full    absolute " />
                  <div className="w-full h-full    absolute " />

              </div>
            </div>
            </div>
            <div className='text-[#cb03cf]   w-[25%]'>10 points</div>
            </div>
            <div className='text-sm   text-[#4d4d4d] flex flex-row gap-1 justify-between '> 
            <div className=''>#1</div>
            <div className='justify-start   w-[40%] px-2'><del> Connect Gitcoin</del></div>
            <div className='relative pt-2 w-full '>
            <div className="w-full h-1  opacity-25  bg-img   ">
              <div
                  className="   h-1  absolute"
                style={{ width: `${20}%` }}
              >
                  <div className="w-full  h-full    absolute " />
                  <div className="w-full h-full    absolute " />

              </div>
            </div>
            </div>
            <div className='text-[#cb03cf]   w-[25%]'>10 points</div>
            </div>
            <div className='text-sm   text-[#4d4d4d] flex flex-row gap-1 justify-between '> 
            <div className=''>#1</div>
            <div className='justify-start   w-[40%] px-2'><del> Connect Gitcoin</del></div>
            <div className='relative pt-2 w-full '>
            <div className="w-full h-1  opacity-25  bg-img   ">
              <div
                  className="   h-1  absolute"
                style={{ width: `${20}%` }}
              >
                  <div className="w-full  h-full    absolute " />
                  <div className="w-full h-full    absolute " />

              </div>
            </div>
            </div>
            <div className='text-[#cb03cf]   w-[25%]'>10 points</div>
            </div>
            
            </div>
            

         
        </div>
      </div>
      <hr className="h-[1px] my-12 items-center m-auto border-[0.5px] w-3/4 border-dashed bg-violet-800 "/>
      <div>
      <div className='text-white text-lg py-8'>Add Stamps </div>
      <div className='flex flex-wrap'>
        <div className='flex w-72 h-40  relative '>
          <div className='border-2 border-gray-600'>
      <div className=' w-full h-full  p-1 pb-0  points_div   flex text-gray-600  border-[#282828] border  flex-col'>
         <div className='flex w-full flex-row    p-2 py-1 items-center justify-between m-auto'>
             <div className='w-2/5  '>Tabi</div>
             <div className='flex flex-row w-1/2 '>
             <div className='text-xs px-3 w-1/2 text-center'>Available Points</div>
             <div className='text-lg flex justify-end text-white'>15.13</div>
             </div>
             </div>
         <hr className="h-[1px] mt-0 w-full  m-auto border-[0.5px] border-dashed   "/>
         <div className='     p-2    text-xs'>
          NFT: this round aims to strengthen the etherurm ecosystem’s foundational infranstructure Lorem ipsum.
         </div>
         <div className='btn_div  bg-[#5538CE] w-[10rem] rounded-sm  m-1 ml-[60px]  justify-center flex h-5  ' />
       </div>
       </div>
       <div className='left_side__trapezium m-1 w-[74px] h-[22px] absolute bg-green-600'/>
       <div className='right_side__trapezium m-1 w-[74px] h-[22px] absolute bg-green-600'/>
       </div>
      </div>
      </div>
    </div>
  )
}

export default PointsParlor