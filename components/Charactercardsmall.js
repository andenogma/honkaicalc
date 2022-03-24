import { useState, useEffect } from "react";


function Charactercardsmall({name, pic, type}) {

    const [color, setColor] = useState ('');

    useEffect (() => {
        let color;
        switch (type) {
            case 'PSY':
                color = 'bg-pink-300';
                break;
            case 'MECH':
                color = 'bg-blue-300';
                break;
            case 'QUA':
                color = 'bg-indigo-700';
                break;
            default:
                color = '';
        };
        setColor (color);
    },[]);

    return (
        <div className="w-[110px] h-auto text-center m-1 rounded-lg bg-white" >
            <div className={`wrapper block w-auto bg ${color} rounded-lg`}>
                <img src={pic} alt="" className='object-none overflow-hidden rounded-lg'/>
            </div>
            <h3 className={"h-10 w-auto p-1 bg-white text-gray-700 rounded-b-lg break-normal leading-tight text-xs"}>{name}</h3>
        </div>
    )
}

export default Charactercardsmall
