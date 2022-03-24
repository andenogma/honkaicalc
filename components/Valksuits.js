import {useEffect} from 'react';
import Charactercardsmall from "./Charactercardsmall";


function Valksuits({name, suits, weapon}) {

    const valkyrie = {name, weapon};



    const onecard = suits.map(item=> {
            return (
                <Charactercardsmall name={item.name} slug={item.slug} pic={item.smallpic} type={item.type} />
            )
    })

        function seeData (){
            console.log(suits)
        }

    return (
        <div className="w-full" onClick={seeData()} >
            <div className="flex w-full my-2 text-4xl">
                <h1 className="flex-none ml-1">{valkyrie.name} {/*Valk Name*/}</h1>
                <span className="flex-grow border-solid border-white border-b mx-2"/>
            </div>
            <div id='leCards' className="grid lg:grid-cols-[repeat(auto-fit,_minmax(7rem,_0fr))] grid-cols-[repeat(auto-fit,_minmax(7rem,_1fr))] gap-1 justify-items-center lg:justify-items-start lg:pl-2">
                {onecard}
            </div> 
        </div>
    

        
            
 
    )
}

export default Valksuits
