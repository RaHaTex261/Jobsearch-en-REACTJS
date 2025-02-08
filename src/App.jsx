import React from 'react'
import Navbar from './components/NavBar/navbar'
import Search from './components/Search/Search'
import Job from './components/JobDiv/Job'
import Footer from './components/FooterDiv/Footer'
import Value from './components/ValueDiv/Value'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
      <Navbar/>
      <Search/>
      <Job/>
      <Value/>
      <Footer/>
    </div>
    
  )
}

export default App