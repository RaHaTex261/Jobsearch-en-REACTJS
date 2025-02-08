import React from 'react'

const navbar = () => {
  return (
    <div className='navbar flex justify-between item-center p-[3rem]'>

        <div className="LogoDiv">
            <h1 className="logo text-[25px] text-blueColor">
                <strong>Carriere</strong>Talent
            </h1>
        </div>

        <div className="menu flex gap-8">
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Emploi</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Sponsor</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Contact</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Avis</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Connexion</li>
            <li className="menuList text-[#6f6f6f] hover:text-blueColor ">Inscription</li>
        </div>

    </div>
  )
}

export default navbar