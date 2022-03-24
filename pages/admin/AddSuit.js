import axios from "axios";
import { useState, useEffect} from "react";
import getData from "../../utils/getData.js";

const AddSuit = () => {
    const [suit, setSuit] = useState({
        name: 'Blablabla',
        type: 'PSY'
    });
    
    const [valks, setValks] = useState()

    async function fetchValks (){
      const valksnames = getData('valkyries');
      setValks(valksnames);
      console.log(valks);
    }

    useEffect(async () => {
       fetchValks()
      }, [])

      const onChange = (e) => {
        const { value, name } = e.target;
        setSuit(prevState => ({ ...prevState, [name]: value}));
        console.log(suit);
      }
      
     const valkoptions = valks.map((item, i) => (
        <option key={item.id + i} name={item.name}>{item.name}</option>
      ))
  return (
    <div className="text-white">
        <select name="valks" id="valks" className='text-black' onChange={onChange}>
          {valkoptions}
      </select>
        
    </div>
  )
}


export default AddSuit;

