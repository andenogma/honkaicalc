import { XIcon } from "@heroicons/react/outline";

function Navdrawer( { handleMenuStatus } ) {

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

    const itemsComponent = menuItems.map((item, i) => (
        <a key={item.type + i} href={item.link} className="block min-w-full pl-4 pt-2 pb-2 border-b-2">{item.type}</a>   
    ))


    return (
    <div className='w-full h-screen absolute top-0 bg-opacity-50 bg-black flex flex-col'>
        <div className=' sm:w-full md:w-1/3 h-screen bg-gray-900 text-white text-2xl'>
            <div className="flex flex-row justify-between pt-2 pb-2 border-b-2 border-b-red-100">
                <a href='/' className="w-full text-center">Honkai Calc</a>
                <XIcon onClick={handleMenuStatus} className="h-6 w-auto cursor-pointer"/>
            </div>
            { itemsComponent }
        </div>
    </div>
    )
}

export default Navdrawer
