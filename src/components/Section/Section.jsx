import React from 'react';
import org from '../../image/org.png'
const Section = () => {
    return (
        <div>
            <div className="container">
                    <div className='display-grid '> 
                        <img  className='h-[100%] w-[100%] object-cover'  src={org} alt="" />
                        <h3 className='absolute top-[260px] font-serif text-[25px] left-[130px] text-green-500' >100% Natural Food</h3>
                        <h1  className='absolute top-[290px] left-[120px] text-[60px] font-bold  '>Choose the best <br />  healthier way <br /> of life</h1>
                        <button type="button" class=" absolute  bottom-[100px] left-[120px] text-gray-700 font-bold     rounded-lg text-sm px-5 py-4 text-center inline-flex items-center dark:bg-yellow-400 ">
                        Explore Now
<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
<path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
</svg>
</button>
                    </div>
            </div>
            
<div className='flex items-center justify-center '>
<a href="#" class="flex flex-col items-center  gap-[10px]  bg-white md:flex-row  ">
    <img class="object-cover w-full  h-96 md:h-auto w-[350px]" src="https://s3-alpha-sig.figma.com/img/c70a/0f45/9125329a0a7927140804d8e958902e6d?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hVB1PapHEHCfXE3kZ5SslQ~UpmHGjQ9TTCRt~Hk63qm8xMIA2dQgIgfZUpfQVJ3fhnxIncpiCcjEUZNhUCEENXRNnF0p~KPkwHmp8uuzrDnCcHZqxJ7E1fXhdeFI3WJFbHtRJ0~ONVtbErZ05nP-9M9c53snulEGhf957rPzZ8V2fMculeAZHlizHPcE3HOxODLe2Rz9d9yFUrQ~gHdM6zBpOmZqzldydxmWhMlvYJBzo7shWLpg9lv8584YN2yOYz76Ga9aXsjPT-5REvky5XCOyWMt5t38v~IsqhvGkp8Nyr~MK~gKwCwyMfb0UQUPdjw1S9CVaMGxvCH-Iknv2A__" alt=""/>
    <div class="flex flex-col  p-4 leading-normal">
    <h5 class="mb-2 text-xl font-bold tracking-tight text-green-300 ">About Us</h5>

        <h5 class="mb-2 text-3xl font-bold tracking-tight text-green-900 ">We Believe in Working <br />  Accredited Farmers</h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Simply dummy text of the printing and typesetting industry. Lorem had ceased <br /> to 
        been the industry's standard dummy text ever since the 1500s, when an unknown <br /> printer took a galley.</p>
        <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
    </div>
</a>
</div>

        </div>
    );
};

export default Section;