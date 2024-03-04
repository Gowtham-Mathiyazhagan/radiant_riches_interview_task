import React from 'react'
import Navbar from './Components/Navbar'
import Headsection from './Components/Headsection'
import Contant from './Components/Contant'
import ContantTwo from './Components/ContantTwo'

const App = () => {
  return (
    <>
    <Navbar/>
   {/* Wrapper used to make a contant center */}
    <div className="wrapper"> 
    <Headsection/>
    <Contant/>
    <ContantTwo/>
    </div>
    </>
  )
}

export default App