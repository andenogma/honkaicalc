import { XIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

function Navdrawer( { handleMenuStatus } ) {
    const router = useRouter()

    const menuItems = [
        {
            type: 'Team',
            link: 'Team',
            icon: ''
        },
        {
            type: 'Valkyries',
            link: 'valkyries/',
            icon: ''
        },
        {
            type: 'Stigmatas',
            link: 'stigmatas/',
            icon: ''
        },
        {
            type: 'Weapons',
            link: 'weapons/',
            icon: ''
        },
    ]

    useEffect(() => {
        router.events.on('routeChangeStart', handleMenuStatus)
        return () => {
            router.events.off('routeChangeComplete', handleMenuStatus)
        };
    }, [router.events])

    const itemsComponent = menuItems.map((item, i) => (
        <Link href={item.link}>
            <a key={item.type + i} className="block min-w-full pl-4 pt-2 pb-2 border-b-2" >{item.type}</a>
        </Link>
    ))


    return (
    <div className='w-full h-screen absolute top-0 bg-opacity-50 bg-black flex flex-col'>
        <div className=' sm:w-full md:w-1/3 h-screen bg-gray-900 text-white text-2xl'>
            <div className="flex flex-row justify-between pt-2 pb-2 border-b-2 border-b-red-100">
                <Link href="/">
                    <a className="w-full text-center">Honkai Calc</a>
                </Link>
                <XIcon onClick={handleMenuStatus} className="h-6 w-auto cursor-pointer"/>
                
            </div>
            { itemsComponent }
        </div>
    </div>
    )
}

export default Navdrawer
