import React, {useState} from 'react'
import { LeafContext } from './LeafContext'

export function LeafContextProvider({children}) {
  const [asistentesTotales, setAsistentesTotales] = useState(0)
  return (
    <LeafContext.Provider value={{
      asistentesTotales,
      setAsistentesTotales
    }}>
      {children}
    </LeafContext.Provider>
  )
}