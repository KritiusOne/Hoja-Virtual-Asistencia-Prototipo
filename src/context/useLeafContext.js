import { useContext } from "react"
import { LeafContext } from "./LeafContext"
export function useLeafContext() {
  const actualContext = useContext(LeafContext)
  if(actualContext === undefined){
    throw new Error('El contexto no esta disponible en este componente')
  }
  return actualContext
}
