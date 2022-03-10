import Charactercardsmall from "./Charactercardsmall"

function Valksuits() {
    return (
        <div className="w-full">
            <div className="flex w-full my-2 text-4xl">
                <h1 className="flex-none ml-1">Seele{/*Valk Name*/}</h1>
                <span className="flex-grow border-solid border-white border-b mx-2"/>
            </div>
            <div id='leCards' className="grid lg:grid-cols-[repeat(auto-fit,_minmax(7rem,_0fr))] grid-cols-[repeat(auto-fit,_minmax(7rem,_1fr))] gap-1 justify-items-center lg:justify-items-start lg:pl-2">
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
            </div> 
        </div>
    

        
            
 
    )
}

export default Valksuits
