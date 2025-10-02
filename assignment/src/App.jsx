import { useState } from 'react'

import './App.css'
import WhatYouGet from './WhatYouGet'
import YourResume from './YourResume'
import Navbar from './Navbar'

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
