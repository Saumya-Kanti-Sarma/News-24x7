import { useState } from 'react'
import Nav from './Components/Navigation/Nav'
import './App.css'
import Headlines from './Components/Top_Headlines/Headlines';

function App() {
  const [translate, setTreanslate] = useState('0%');
  return (
    <>
      <Nav interChange={(int) => {
        setTreanslate(int);
      }} />
      <br />
      <div className="main" style={{ transform: `translateX(${translate}) ` }} >
        <div className="page">
          <div className='heading'>
            <h1>Top Headlines</h1>
          </div>
          <Headlines />
        </div>
        <div className="page">
          <div className='heading'>
            <h1>Tripura Headlines</h1>
          </div>
        </div>
        <div className="page">
          <div className='heading'>
            <h1>Stocks</h1>
          </div>
        </div>
      </div>
    </>
  )
}


export default App
