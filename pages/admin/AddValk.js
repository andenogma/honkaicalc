import { useState, useEffect } from "react";
import axios from 'axios';
import dashify from 'dashify';
import getData from "../../utils/getData";
import { XCircleIcon } from "@heroicons/react/outline";

const Addvalk = () => {
  const [content, setContent] = useState({
    name: '',
    weap: '',
    slug: '',
    suitsslug: ['any']
  });

  const [weapons, setWeapons] = useState ([]);

  const [missing, setMissing] = useState ({
    toggle: false,
    message: 'Valkyrie must have a NAME and a WEAPON TYPE!'
  });

  useEffect(async () => {
    const weaps = await getData('weapons');
    setWeapons(weaps);
  }, [])


  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value }));
  }
  const onSubmit = async () => {
    const { name, weap, suitsslug} = content;
    if (name == '' || weap == ''){
      setMissing(prevState => ({...prevState, toggle: true}))
    }
    else {
      setMissing(prevState => ({...prevState, toggle: false}));
      let slugified = dashify(name);    
      await axios.post('/api/valkyrie', { name, weap, slug: slugified, suitsslug} );
    }
  }

  const weaponoptions = weapons.map((item, i) => (
    <option key={item.id + i} value={item.id}>{item.name}</option>
  ))

  


  return (
    <div className='flex-col m-2 justify-center text-white w-auto flex'>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        value={content.name}
        onChange={onChange}
        className='text-black'
      />
      <label htmlFor="weap">Weapon Type</label>
      <select name="weap" id="weap" className='text-black' onChange={onChange}>
          <option value ="" disabled selected>Select a Weapon Type</option>
          {weaponoptions}      
      </select>
      {missing.toggle ? <p className="text-red-600 flex pt-2"><XCircleIcon className="h-6 pr-1 pt"/>{missing.message}</p> : ''}
      <button className='my-2 w-fit self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={onSubmit}>SAVE</button>
      
    </div>
  );
};

export default Addvalk;