import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Marks from './Marks.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App nm={"Shilpi"} em={"shilpi12@gmail.com"} mb={8799718190} />
    <Marks m1={89} m2={87} m3={86} />    
    <App nm={"Shivani"} em={"shivani123@gmail.com"} mb={8908863282} />
    <Marks m1={88} m2={89} m3={85} />
    <App nm={"Riya"} em={"riya1234@gmail.com"} mb={7654789098} />
    <Marks m1={87} m2={86} m3={89} />

    
    <Marks />
  </StrictMode>,
)
