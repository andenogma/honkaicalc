import { useState, useEffect} from "react";
import Charactercardsmall from "../../components/Charactercardsmall.js";
import getData from "../../utils/getData.js";
import dashify from "dashify";
import { Router, useRouter } from "next/router";
import Charactercardbig from "../../components/Charactercardbig.js";

const AddSuit = () => {

  const styles = {
    select: 'bg-black form-select border-0 border-2 border-white text-white h-full text-left outline-none focus:ring-0',
    input: 'form-input w-full bg-black border-2 border-white text-white outline-none text-left focus:ring-0'
  }


  const router = useRouter();

  const [suit, setSuit] = useState({
    descriptions: {
      name: '',
      slug: '',
      type: '',
      role: '',
      roletype: '',
      smallpic: '',
      largepic: '',
      rarity: ''
    },
    skills: {
      special: [],
      ult: [],
      leader: [],
      passive: [],
      basic: [],
      evade: []
    }

      
    });
    
    const [valks, setValks] = useState([]);

    const [errs, setErrs] = useState({
      message: 'All fields must be fulfilled!',
      toggle: false
    });

    const { descriptions, skills } = suit;

    useEffect(async () => {
      const valksnames = await getData('valkyries');
      setValks(valksnames);      
      console.log(valks);
      }, [])

      const onChange = (e) => {
        const { value, name } = e.target;
        setSuit(prevState => ({...prevState, descriptions: {...prevState.descriptions, [name]: value}}));
        console.log(suit);
      }

      const isNullUndefEmptyStr = Object.values(descriptions).every(value => {
        // 👇️ check for multiple conditions
        if (value === null || value === undefined || value === '') {
          return true;
        }
        return false;
      })

      const onSubmit = () => {
        if (isNullUndefEmptyStr === false) {
          const nameslug = dashify(descriptions.name);
          setSuit(prevState => ({...prevState, descriptions: {slug: nameslug}}))
          setErrs(err => ({...err, toggle: false}))
          console.log(suit);
          router.reload();
        }
        else {
          setErrs(err => ({...err, toggle: true}))
        }
        console.log(suit);
        }
        
      
      
    const valkoptions = valks.map((item, i) => (
        <option key={item.id + i} value={item.name}>{item.name}</option>
      ))
    
    const types = ['PSY', 'MECH', 'IMG', 'BIO', 'QUA']
    const typeoptions = types.map((item, i) => (
      <option key={item + i} value={item}>{item}</option>
    ))

    const roletypes = ['Phys', 'Ice', 'Fire', 'Lightning']
    const roletypeoptions = roletypes.map((item, i) => (
      <option key={item + i} value={item}>{item}</option>
    ))

    const raritytypes = ['S', 'A', 'B']
    const raritytypeoptions = raritytypes.map((item, i) => (
      <option key={item + i} value={descriptions.item}>{item}</option>
    ))

    const floatformtext = 'float-left -top-2 left-2  absolute z-10 px-1 bg-black';


  return (
    <div className="text-white relative max-w-full mx-3 sm:flex sm:flex-wrap">
      <div className="sm:max-w-[50%] block">{/*Main Left Section*/}
        <div className="w-full my-2 relative">{/*CHARACTER NAME*/}
          <label htmlFor="valks" className={`${floatformtext} left-2 text-sm`}>Valkyrie</label>
          <select name="valks" id="valks" className={`${styles.select} text-center w-full`} onChange={onChange}>
            <option value='' disabled selected hidden>Select a Valkyrie</option>
            {valkoptions}
          </select>
        </div>
        <div className="flex flex-wrap">{/*DESCRIPTIONS SECTION*/}
          <h1 className="w-full my-2">DESCRIPTIONS</h1>
          <div className="w-full my-2 relative">
            <label htmlFor="name" className={`${floatformtext} text-xs`}>Battlesuit Name</label>
            <input
              type="text"
              name="name"
              value={descriptions.name}
              onChange={onChange}
              className={`${styles.input} w-full border-2 z-0`}
              autoComplete='off'
              />
          </div>
          <div className="inline-flex flex-wrap my-2 gap-2 justify-items-stretch w-full justify-between">
            <div className="relative">
              <label htmlFor="rarity" className={`${floatformtext} left-1 text-xs`}>Rarity</label>
              <select name="rarity" id="rarity" onChange={onChange} value={descriptions.rarity} className={styles.select}>
                <option value ='' disabled selected hidden/>
                {raritytypeoptions}
              </select>
            </div>
            <div className="relative">
              <label htmlFor="type" className={`${floatformtext} left-1 text-xs`}>Type</label>
              <select name="type" id="type" onChange={onChange} value={descriptions.type} className={styles.select}>
                <option value ='' disabled selected hidden/>
                {typeoptions}
              </select>
            </div>
            
            <div className="relative">
              <label htmlFor="roletype" className={`${floatformtext} left-1 text-xs`}>DMG Type</label>
              <select name="roletype" id="roletype" value={descriptions.roletype} onChange={onChange} className={styles.select}>
                <option value ='' disabled selected hidden/>
                {roletypeoptions}
              </select>
            </div>
            <div className="flex relative border-2 px-2">
              <h2 className={`${floatformtext} -left-3 text-xs`}>Role</h2>
              <div className="w-fit text-right">
                <div>
                  <label htmlFor="rolechoice1" className="text-sm">DPS</label>
                  <input type='radio' id='rolechoice1' name='role' value={descriptions.role} className="focus:ring-0 mx-1" onChange={onChange}/>
                </div>
                  <div className="self-end">
                  <label htmlFor="rolechoice2" className="text-sm">Support</label>
                  <input type='radio' id='rolechoice2' name='role' value={descriptions.role} className="focus:ring-0 mx-1" onChange={onChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className="inline-flex flex-wrap w-full my-2 gap-3">
            <div className="relative w-full h-auto">
              <label htmlFor="smallpic" className={`${floatformtext} left-2 text-xs`}>Small Picture</label>
                <input
                  type="text"
                  name="smallpic"
                  value={descriptions.smallpic}
                  onChange={onChange}
                  className={styles.input}
                  autoComplete='off'
                />
            </div>
            <div className="relative w-full">
              <label htmlFor="largepic" className={`${floatformtext} left-2 text-xs`}>Large Picture</label>
              <input
                type="text"
                name="largepic"
                value={descriptions.largepic}
                onChange={onChange}
                className={styles.input}
                autoComplete='off'
              />
            </div>
          </div>
        </div> 
        <div>{/*SKILLS SECTION*/}
          <h2 className="w-full">SKILLS</h2>
        </div>
        <div> {/*ERRORS AND BUTTONS*/}
          { errs.toggle ? <span className="text-red-500 italic">{errs.message}</span> : ''}
          <button type='button' className="my-2  mx-2 w-fit self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onSubmit}>SAVE</button>
          <button type='button' className="my-2 w-fit self-center bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={() => router.reload()}>RESET</button>
        </div>
      </div>
      
      <div className="lg:w-[50%] flex items-start">{/*IMAGES SECTION*/}
        <Charactercardsmall name={descriptions.name} type={descriptions.type} pic={descriptions.smallpic}/>
        <Charactercardbig name={descriptions.name} type={descriptions.type} pic={descriptions.largepic}/>
      </div>
        
       
    </div>
  )
}


export default AddSuit;

