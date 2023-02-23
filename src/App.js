import logo from './logo.svg'
import './App.css'
import Home from './Components/Cards'
import Cards from './Components/Cards'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './Components/Filter'

function App () {


  useEffect(() => {
    getContests()
  }, [])

 

  return (
   
  )
}

export default App
