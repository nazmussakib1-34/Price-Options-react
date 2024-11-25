
import './App.css'
import NavBer from './Components/Navber/NavBer'
import PriceOptions from './Components/PriceOption/PriceOptions'
// import DaisyNav from './Components/Daisy nav/DaisyNav'

function App() {
  

  return (
    <>
      {/* <DaisyNav></DaisyNav> */}
      <NavBer></NavBer>
      <h1 className='text-2xl bg-purple-500'>Vite + React</h1>
      <PriceOptions></PriceOptions>
    </>
  )
}

export default App
