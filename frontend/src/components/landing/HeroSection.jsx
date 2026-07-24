import {Target, Rocket , TrendingUp , Star , Users , CircleCheck  } from 'lucide-react';
import { Link  } from 'react-router-dom';

function HeroSection(){
    return(
    <div className="bg-blue-400/10 w-full">
        <div className="py-15 px-4 grid justify-items-center grid-cols-1 gap-4 lg:grid-cols-2 max-w-7xl m-auto sm:gap-40" >
           {/* Heros left section  */}
            <div className="">
               <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-100/50 border border-indigo-200/50 text-indigo-700 text-sm font-semibold mb-6 shadow-sm backdrop-blur-sm">
                    <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-indigo-500"></span>
                    </span>
                    AI-Powered Resume Analysis
                </div>

                <h1 className="mb-6 font-extrabold text-5xl sm:text-6xl">Save hours by using <span className="text-blue-700/80">AI</span> for your job hunt</h1>
                <p className="text-xl text-gray-500 mb-6">
                    This AI-powered resume analyzer helps candidates improve their resumes and pass ATS screening systems used by recruiters. Land more interviews and beat the ATS.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6 ">
                    <Link to='/' className=' py-2 hover:-translate-y-1 cursor-pointer h-15 items-center px-4 font-semibold rounded-xl hover:shadow-sm bg-green-700 flex gap-1 text-white'>
                       <Rocket className='w-5' />
                       Bulid Your Resume
                    </Link>
                    <Link to='/' className='py-2 hover:scale-105 cursor-pointer h-15 items-center px-4 font-semibold rounded-xl hover:shadow-sm bg-white-700 flex gap-1 text-black border-2 border-gray-500 bg-white'>
                        <TrendingUp className='w-5'/>
                        Get Your Resume Score
                    </Link>
                </div>

                {/* feature section */}
                <div className='sm:mt-18 grid grid-cols-2 sm:grid-cols-3 gap-4 justify-between'>
                    <div className='hover:shadow-md transition-shadow p-4 flex gap-4 h-18 bg-white rounded-2xl'>
                       <Star className='w-8 h-8 rounded-full bg-amber-700 p-1 text-white'/>
                       <div className='flex flex-col'>
                        <h2 className='font-bold'>4.9/5</h2>
                        <p className='text-[10px] font-semibold text-gray-600'>RATING</p>
                       </div>
                    </div>
                     <div className='hover:shadow-md transition-shadow p-4 flex gap-4 h-18 bg-white rounded-2xl'>
                       <Users className='w-8 h-8 rounded-full bg-green-700 p-1 text-white'/>
                       <div className='flex flex-col'>
                        <h2 className='font-bold'>5K+</h2>
                        <p className='text-[10px] font-semibold text-gray-600'>INTERVIEWS LANDED</p>
                       </div>
                    </div>
                     <div className='hover:shadow-md transition-shadow p-4 flex gap-4 h-18 bg-white rounded-2xl'>
                       <Target className='w-8 h-8 rounded-full bg-amber-700 p-1 text-white'/>
                       <div className='flex flex-col'>
                        <h2 className='font-bold'>90%</h2>
                        <p className='text-[10px] font-semibold text-gray-600'>ATS ACCURACY</p>
                       </div>
                    </div>

                </div>
            </div>

            {/* RIght side of heros section  */}
            <div className='-rotate-1 hover:rotate-0 transition-all duration-700 mt-10 sm:p-10 sm:max-w-122 bg-white relative border-t-6 rounded-xl border-blue-500'>
                <div className='flex items-center justify-center rounded-2xl absolute w-8 h-8 text-center bg-blue-600 -top-2 -left-2  sm:-top-2 sm:-left-2  animate-bounce' style={{animationDuration:'4s'}}>
                   <CircleCheck className='text-white'  />
                </div>
                <div className='absolute flex flex-col justify-center items-center rounded-full -right-5 -top-8 border-5 border-white w-20 h-20  bg-amber-300'>
                    <h2 className='font-bold'>92</h2>
                    <p className='text-[8px] font-semibold'>ATS SCORE</p>
                </div>
             <div className='w-[80%] m-auto '>
                <div className='flex mt-10 mb-5 gap-5'>
                    <div className=''>
                         <Users className='w-15 h-15 rounded-full bg-blue-500 p-1 text-white'/>
                    </div>
                    <div>
                        <h1 className='text-2xl font-bold '>
                            Alpha Kai
                        </h1>
                        <p className='text-[10px] font-semibold text-gray-500'>
                           Software Engineer
                        </p>
                    </div>
                   
                </div>
                <hr className='text-gray-300/60' />
                <div>
                    <h2 className='mt-4 text-sm font-bold mb-4 text-gray-500'>EXPERIANCE</h2>
                    <div className='border-l-[1px] border-gray-400/80  relative'>
                        <div className='absolute w-2 h-2 -top-2  -left-1 bg-gray-400 rounded-full'>
                        </div>
                        <div className='absolute w-2 h-2 top-30 -left-1 bg-gray-400 rounded-full'>
                        </div>
                        <div className='px-4 flex flex-col'>
                            <div>
                                <p className='font-semibold leading-tight'>Senior Software Engineer</p>
                                <p className='text-sm text-blue-500 leading-tight font-semibold'>at Tech Core</p>
                                <p className='mt-2 text-sm text-gray-500 font-semibold'>
                                    Led development of AI-powered features that improved user engagement by 40%. Architected scalable cloud solutions.
                                </p>
                            </div>
                            <div className='mt-4'>
                                <p className='font-semibold leading-tight'>Software Engineer</p>
                                <p className='text-sm text-blue-500 leading-tight font-semibold'>at Tech Teams Inc</p>
                                <p className='mt-2 text-sm text-gray-500 font-semibold'>
                                   Built scalable backend systems using Python and AWS. Reduced latency by 200ms across all endpoints.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                  <h2 className='mt-4 text-sm font-bold mb-4 text-gray-500'>SKILLS</h2>
                  <div className='flex gap-1 flex-wrap'>
                    <div className='bg-blue-300/70 text-blue-500 px-4 rounded-md'>
                        Python
                    </div>
                    <div className='bg-blue-300/70 text-blue-500 px-4 rounded-md'>
                        React
                    </div>
                     <div className='bg-blue-300/70 text-blue-500 px-4 rounded-md'>
                        ML
                    </div>
                     <div className='bg-blue-300/70 text-blue-500 px-4 rounded-md'>
                        DL
                    </div>
                     <div className='bg-blue-300/70 text-blue-500 px-4 rounded-md'>
                        Docker
                    </div>
                  </div>
                </div>
             </div>

            </div>

        </div>
    </div>
        
    )
}

export default HeroSection;