import { useEffect, useState } from 'react';
import { RowList } from './components/rowList/RowList'
import CheckButton from './components/checkButton/CheckButton';
import { Header } from './components/header/Header';
import { firstname, lastname } from './helpers/fakeData';
import { useLeafContext } from './context/useLeafContext';
import './App.css'

function App() {
  const [i, setI] = useState(1)
  const context = useLeafContext()
  const [actualNames, setActualNames] = useState([])
  useEffect(()=>{
      const rand_first = Math.floor(Math.random()*firstname.length); 
      const rand_last = Math.floor(Math.random()*lastname.length); 
      const name = firstname[rand_first] + " " + lastname[rand_last]
      setActualNames([...actualNames, name])
      if(i < 20) setI(i +1)
      else console.log('he terminado')
 
  },[i])
  return (
    <div className="App">
      <Header />
      <RowList>
        {actualNames && actualNames.map((actualName, index)=>{
          return( <>
            <div className='App__numbers' key={actualName}>
              {index + 1}
            </div>
            <div className='App__name' key={actualName + actualName}>
              {actualName}
            </div>
            <div key={actualName + actualName +actualName}>
              <CheckButton key={actualName + actualName +actualName + actualName } />
            </div>
          </>)
        })}       
      </RowList>
      <section className='result-Container'>
        <span className='result__asistentes__title'>Asistentes totales: <strong className='totalAsistentes'>{context.asistentesTotales}</strong> </span>
      </section>
    </div>
  )
}

export default App
