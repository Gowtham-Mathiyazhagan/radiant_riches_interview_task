import React from 'react'
import Navbar from './Components/Navbar'
import Headsection from './Components/Headsection'
import Contant from './Components/Contant'

const App = () => {
  return (
    <>
    <Navbar/>
   {/* Wrapper used to make a contant center */}
    <div className="wrapper"> 
    <Headsection/>
    <Contant/>
    </div>
    </>
  )
}

export default App