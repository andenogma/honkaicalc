import { useState, useEffect } from 'react';
import Valksuits from '../../components/Valksuits';
import getData from '../../utils/getData';


function Characters() {

    const [valkyries, setValkyries] = useState([]);
    const [cardShow, setcardShow] = useState('hidden');
    
async function fetchData () {
        const valks = await getData('valkyries');
        setValkyries(valks);
        console.log(valkyries); 
}

useEffect(() => {
    fetchData();
    console.log(valkyries)
}, [])

const valksall = valkyries.map((item, i) => (
    <Valksuits key={item.id+i} name={item.name} weapon={item.weapon} suits={item.suitsslug} link={true} slug={item.slug}/>
))

    return (
        <div className="w-auto text-white flex flex-col items-center m-0">
            <h1 className="text-center w-full text-5xl">Valkyries</h1>
            {valksall}
        </div>
    )
}

export default Characters
