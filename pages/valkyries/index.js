/*import Image from 'next/image'
import seeleSN from '../assets/avatars/seeleSN.png'*/
import { useState, useEffect } from 'react';

import Charactercardsmall from '../../components/Charactercardsmall';
import Valksuits from '../../components/Valksuits';
import getData from '../../utils/getData';


function Characters() {
    
async function fetchData () {
        const valks = await getData('valkyries');
        setValkyries(valks);
        console.log(valkyries); 
}

const [valkyries, setValkyries] = useState([]);
const [cardShow, setcardShow] = useState('hidden');





useEffect(() => {
    fetchData();
    console.log(valkyries)
}, [])

const valksall = valkyries.map((item, i) => (
    <Valksuits key={item.id+i} name={item.name} weapon={item.weapon} suits={item.suitsslug}/>
))


function umLog(){ 
    console.log(valkyries)
}

    return (
        <div className="w-auto text-white flex flex-col items-center m-0" onClick={umLog()}>
            <h1 className="text-center w-full text-5xl">Valkyries</h1>
            {valksall}

           {/*} <div className="w-full grid grid-cols-[repeat(auto-fit,_minmax(7rem,_1fr))] gap-1 justify-items-center items-start">
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
                <Charactercardsmall/>
    </div> */}
            {/*Character Square Picture*/}
        </div>
    )
}

export default Characters
