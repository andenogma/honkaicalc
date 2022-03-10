import {MenuIcon, SearchIcon, XIcon} from '@heroicons/react/outline';
import {useState} from 'react';
import Navdrawer from './Navdrawer';

function Navbar() {

    const [isOpen, setisOpen] = useState(false);
   // const [menuContr, setmenuContr] = useState('-translate-x-full')

    function handleMenuStatus(status) {
        console.log(status);
        status ? status=false : status=true;
            setisOpen(status);
    };

    return (
        <div className='sticky top-0 min-w-full h-14 bg-slate-600 flex justify-between items-center z-50'>
            <nav className='bg-gray-300 text-black p-2 border-2 border-solid border-white block absolute -translate-y-14 translate-x-6 focus:translate-y-2 '>Skip Navigation</nav>
            <MenuIcon onClick={()=>handleMenuStatus(isOpen)} className='h-6 pr-2 pl-2 cursor-pointer'/>
            { isOpen ?   <Navdrawer handleMenuStatus={handleMenuStatus} /> : ''}
            <a href='/' className='pr-2 pl-2 text-2xl focus:bg-gray-300'>Honkai Calc</a>
            <SearchIcon className='h-6 pr-2 pl-2'/>
        </div>
    )
}

export default Navbar
