import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import axios from 'axios';
import Valksuits from '../../../components/Valksuits';

const SingleValk = () => {
  const router = useRouter()
  const [valk, setValk] = useState({
    name: undefined,
    weapon: undefined,
    slug: undefined
  });
  const [suits, setSuits] = useState([])

  async function fetchData (){
    const { id } = router.query;
    const res = await axios.get(`/api/valkyrie/${id}`);
    const { name, weapon, slug, suitsslug } = res.data;
    setValk({
      name: name,
      weapon: weapon, 
      slug: slug, 
    }),
    setSuits(suitsslug);
    console.log(valk, suits);
}

  
  useEffect(async () => {
    await fetchData();
    console.log(valk, suits);
    
  }, [router.query])     
  

  return(
  
  
    <Valksuits name={valk.name} suits={suits} weapon={valk.weapon} link={true} slug={valk.slug}/>
  )
}

export default SingleValk;