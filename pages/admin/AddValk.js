import { useState, useEffect } from 'react';
import axios from 'axios';
import dashify from 'dashify';

const Addvalk = () => {
  const [content, setContent] = useState({
    name: undefined,
    weap: undefined,
    slug: undefined,
  });

  const [weapons, setWeapons] = useState ([]);

  useEffect(async () => {
    const res = await axios.get('/api/weapons',);
    setWeapons(res.data.entriesData);
  }, [])


  const onChange = (e) => {
    const { value, name } = e.target;
    setContent(prevState => ({ ...prevState, [name]: value, slug: content.name }));
  }
  const onSubmit = async () => {
    console.log (weapons);
    console.log (content);
    const slug = dashify (content.slug)
    const { name, weap} = content;
    await axios.post('/api/valkyrie', { name, weap: dashify(weap), slug} );
  }

  const onSend = () => {
    console.log(content)
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
          {weaponoptions}      
      </select>
      <button className='my-2 w-fit self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' onClick={onSubmit}>POST</button>
    </div>
  );
};

export default Addvalk;