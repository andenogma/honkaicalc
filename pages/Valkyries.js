import Image from 'next/image'
import seeleSN from '../assets/avatars/seeleSN.png'
import { useState } from 'react';
import Charactercardsmall from '../components/Charactercardsmall';
import Valksuits from '../components/Valksuits';

function Characters() {

const [cardShow, setcardShow] = useState('hidden');

function updateCardnames (e) {
    if (e === 'hidden'){
        setcardShow(''); 
    } else {
    setcardShow('hidden')
    }
    
}
    return (
        <div className="w-auto text-white flex flex-col items-center m-0">
            <h1 className="text-center w-full">Valkyries</h1>
            <Valksuits />
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
