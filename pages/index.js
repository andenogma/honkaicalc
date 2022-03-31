import { ArrowCircleDownIcon, ArrowCircleUpIcon } from '@heroicons/react/outline';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='overflow-y-scroll snap snap-y snap-mandatory main-content scroll-smooth hide-bar'>
      
      <div id='valkyries' className='snap-start bg-local bg-top bg-no-repeat text-black main-content overflow-hidden relative'>
        <div className='w-full h-full bg-cover bg-center absolute z-0 ' style={{backgroundImage:"url(https://uploadstatic-sea.hoyoverse.com/contentweb/20201012/2020101217312970870.png)"}}/>
        <a href='#team' className='animate-bounce flex flex-wrap justify-around absolute z-20 bottom-0 w-12 text-teal-700 left-[48vw]'>
          <ArrowCircleDownIcon className='w-8'/>
          <p>Team</p>
        </a>
        <div className='z-10 flex flex-wrap relative'>
          <h1>MAKE YOUR TEAM</h1>
          <p className='shadow-xl bg-slate-400 rounded-lg p-1'>Fight the honkai <br/>with powerful Valkyries <br/>that complement each other! <br/>Crush the beasts and save the World!</p>
          <p>May all the beauty be blessed!</p>
          <Link href='/valkyries'>
            <a><button className='rounded-lg p-1 w-auto bg-red-400 text-white'> MAKE YOUR TEAM </button></a>
          </Link>
          {/*Main Content Section*/}
        </div>
      </div>
      <div id='team' className='snap-start bg-local bg-top bg-no-repeat text-black main-content overflow-hidden relative'>
        <div className='w-full h-full bg-cover bg-center absolute z-0' style={{backgroundImage:"url(https://uploadstatic-sea.hoyoverse.com/contentweb/20200219/2020021914482961941.png)"}}/>
        <a href='#valkyries' className='animate-bounce flex flex-wrap justify-around absolute z-20 bottom-0 w-12 text-white left-[48vw]'>
          <p>Valkyries</p>
          <ArrowCircleUpIcon className='w-8'/>
        </a>
        <div className='z-10 flex flex-wrap relative text-white'>
          <h1>MAKE YOUR TEAM</h1>
          <p className='bg-slate-400 bg-opacity-90 rounded-lg p-1 shadow-sm shadow-slate-700'>Fight the honkai <br/>with powerful Valkyries <br/>that complement each other! <br/>Crush the beasts and save the World!</p>
          <div>
           <p className='-skew-y-12 text-red-400 font-bold text-2xl top-10 relative bg-amber-200 h-fit rounded-2xl px-1 shadow-sm shadow-amber-800'>MAY ALL THE BEAUTY BE BLESSED!</p>
          </div>
          <Link href='/valkyries'>
            <a><button className='rounded-lg p-1 w-auto bg-red-400 text-white'> MAKE YOUR TEAM </button></a>
          </Link>
          {/*Main Content Section*/}
        </div>
      </div>
    </div>
    
  )
}
