import React from 'react'
// import react-icons
import {AiOutlineSearch} from 'react-icons/ai'
import { AiOutlineCloseCircle } from 'react-icons/ai';
import {BsHouseDoor} from 'react-icons/bs';
import { GiPositionMarker } from "react-icons/gi";

const Search = () => {
  return (
    <div className='serachDiv grid gap-10 bg-greyIsh rounded-[10px] p-[3rem]'>

      <from action="">
        <div className='firstDiv flex justify-between items-center rounded-[8px] gap-[10px] bg-white p-5 shadow-lg shadow-greyIsh-700'>
          
          {/* recherche empoli */}
          <div className='flex gap-2 items-center'>
            <AiOutlineSearch className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500
            focus:outline-none w-[100%]' placeholder="Recherche d'emploi ici......"/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

            {/* recherche entreprise */}
          <div className='flex gap-2 items-center'>
            <BsHouseDoor className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500
            focus:outline-none w-[100%]' placeholder="Recherche par entreprise......"/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          {/* recherche localisation */}
          <div className='flex gap-2 items-center'>
            <GiPositionMarker className='text-[25px] icon'/>
            <input type="text" className='bg-transparent text-blue-500
            focus:outline-none w-[100%]' placeholder='Recherche par localisation......'/>
            <AiOutlineCloseCircle className='text-[30px] text-[#a5a6a6] hover:text-textColor icon'/>
          </div>

          <button className="bg-blueColor h-full p-5 px-10 rounded-[10px] text-white cursor pointer hover:bg-blue-300">Recherche</button>

        </div>
      </from>

      <div className="secDiv flex items-center gap-10 justify-center">

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="relevante" className='text-[#808080] font-semiblod'>
            Trier par :
          </label>
          <select name="" id="relevante" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Pertinence</option>
            <option value="">Inclusive</option>
            <option value="">Débute par</option>
            <option value="">Contient</option>
          </select>
        </div>

        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="flexibilité" className='text-[#808080] font-semiblod'>
            Type :
          </label>
          <select name="" id="flexibilité" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Plein-temps</option>
            <option value="">Remote</option>
            <option value="">Contrat</option>
            <option value="">Partiel</option>
          </select>
        </div>


        <div className='singleSearch flex items-center gap-2'>
          <label htmlFor="expérience" className='text-[#808080] font-semiblod'>
            Trier par expérience :
          </label>
          <select name="" id="expérience" className='bg-white rounded-[3px] px-4 py-1'>
            <option value="">Junior</option>
            <option value="">Expérimenté</option>
            <option value="">Senior</option>
            <option value="">Consultant</option>
            <option value="">Lead</option>
          </select>
        </div>

        <span className='text-[#a1a1a1] cursor-pointer'>Réinitialiser</span>

      </div>

    </div>
  )
}

export default Search