import {MenuIcon, SearchIcon} from '@heroicons/react/outline'

function Navbar() {
    return (
        <div className='sticky top-0 min-w-full h-14 bg-slate-600 flex justify-between items-center'>
            <a className='bg-gray-300 text-black p-2 border-2 border-solid border-white block absolute -translate-y-14 translate-x-6 focus:translate-y-2 ' href=''>Skip Navigation</a>
            <MenuIcon className='h-6 pr-2 pl-2'/>
            <a href='/' className='pr-2 pl-2 text-2xl focus:bg-gray-300'>Honkai Calc</a>
            <SearchIcon className='h-6 pr-2 pl-2'/>
        </div>
    )
}

export default Navbar
