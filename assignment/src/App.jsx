import { useState } from 'react'

import './App.css'
import WhatYouGet from './WhatYouGet'
import YourResume from './YourResume'
import Navbar from './Navbar'
import { BrowserRouter } from 'react-router-dom'
function App() {

  return (
    <>
     <Navbar/>
     <YourResume/>
     <WhatYouGet/>
    </>
  )
}

export default App
