import { useEffect, useState, useRef } from 'react'
import './App.css'
import SimpleForm from './components/SimpleFrom';
import CustomHookForm from './components/CustomHookForm';

function App() {
  


  return (
  <div className='App'>
    <SimpleForm></SimpleForm>
    <CustomHookForm></CustomHookForm>
  </div>
  )
}

export default App
