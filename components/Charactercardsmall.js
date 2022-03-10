import Image from 'next/image'
import seeleSN from '../assets/avatars/seeleSN.png'

function Charactercardsmall() {
    return (
        <div className="w-[110px] bg-indigo-400  rounded-lg text-center m-1" >
        <div className='w-auto wrapper block'>
            <Image src={seeleSN} alt="" className='overflow-hidden' />
        </div>
        <h3 className={"p-1 bg-white text-gray-700 rounded-b-lg break-normal text-sm "}>Stygian Nymph</h3>
    </div>
    )
}

export default Charactercardsmall
