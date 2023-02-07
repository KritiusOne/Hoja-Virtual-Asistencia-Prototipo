import React from 'react'
import {useLeafContext} from '../../context/useLeafContext.js'
import style from './checkButton.module.css'

export default function CheckButton() {
  const context= useLeafContext()
  const handleClick = ({target}) =>{
   if(target.checked) context.setAsistentesTotales(context.asistentesTotales + 1)
    else context.setAsistentesTotales(context.asistentesTotales - 1)
  }
  return (
    <input className={style.checkButton} type='checkbox' onClick={handleClick}/>
  )
}
