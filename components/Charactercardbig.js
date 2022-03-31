import { useState, useEffect } from "react";


function Charactercardbig({name, pic, type}) {

    const [color, setColor] = useState ('');
    const [isEmpty, setisEmpty] = useState (true);

    useEffect (() => {
        let colore;
        switch (type) {
            case 'PSY':
                colore = 'bg-pink-300';
                break;
            case 'MECH':
                colore = 'bg-blue-300';
                break;
            case 'QUA':
                colore = 'bg-indigo-700';
                break;
            default:
                colore = 'bg-transparent';
        };
        setColor (colore);
        if (!(name == undefined || name == '')){
            setisEmpty(false);
        }
    },[]);

        
    

    

    return (
        <div className="w-[112px] h-[340px] text-center m-1 rounded-lg bg-white" >
            <div className={`wrapper w-full h-full block ${color} rounded-lg overflow-hidden relative` }>
                <img src={pic} alt="" className='object-cover rounded-lg h-[400px] -top-6 absolute'/>
            </div>
            { isEmpty ? '' : <h3 className={"h-10 w-auto p-1 bg-white text-gray-700 rounded-b-lg break-normal leading-tight text-xs"}>{name}</h3>}
        </div>
    )
}

export default Charactercardbig
