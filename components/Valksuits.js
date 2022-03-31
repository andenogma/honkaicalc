import Charactercardsmall from "./Charactercardsmall";
import Link from 'next/link'
import { useState, useEffect } from "react";
import { ChevronDownIcon, ChevronLeftIcon} from '@heroicons/react/outline'


function Valksuits({name, suits, weapon, link, slug}) {

    const valkyrie = {name, weapon};

    const [isOpen, setisOpen] = useState (true);
    const [isHidden, setHidden] = useState ('grid')


    useEffect(() => {
        isOpen ? setHidden('grid') : setHidden('hidden');
    }, [isOpen])


    const onecard = suits.map(item => {
     return(
        link ? 
        <Link key={item.name+1} href={`/valkyries/${slug}/${item.slug}`}>
            <a>
                <Charactercardsmall name={item.name} slug={item.slug} pic={item.smallpic} type={item.type} />
            </a>
        </Link>
        :
        <Charactercardsmall name={item.name} slug={item.slug} pic={item.smallpic} type={item.type} />
     )

    })

    const icon = 
        isOpen ? <ChevronDownIcon className="w-8 border-white border-b-2 mr-2 text-white" onClick={handleClose}/> : <ChevronLeftIcon className="text-white w-8 border-white border-b-2 mr-2" onClick={handleClose}/>;    


    function handleClose() {
        let opened = !isOpen;
        setisOpen(opened);

    };


    return (
        <div className="w-full">
            <div className="flex w-full my-2 text-4xl justify-around">
                <Link href={`/valkyries/${slug}`}>
                    <a><h1 className="flex-none ml-1 text-white">{valkyrie.name} {/*Valk Name*/}</h1></a>
                </Link>
                <span className="flex-grow border-solid border-white border-b-2 ml-2" onClick={handleClose}/>
                {icon}
                
            </div>
            <div id='leCards' className={`${isHidden} lg:grid-cols-[repeat(auto-fit,_minmax(7rem,_0fr))] grid-cols-[repeat(auto-fit,_minmax(7rem,_1fr))] gap-1 justify-items-center lg:justify-items-start lg:pl-2`}>
                {onecard}
            </div> 
        </div>
    

        
            
 
    )
}

export default Valksuits
