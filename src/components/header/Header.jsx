import React from 'react'
import styles from './header.module.css'
import logo from '../../assets/logo.png'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={logo} alt="" className={styles.img} />
      <ul className={styles.ul} >
        <li className={styles.li} >MATERIA: PROGRAMACIÓN WEB</li>
        <li className={styles.li} >PROGRAMA O FACULTAD: INGENIERIA DE SISTEMAS</li>
        <li className={styles.li} >GRUPO 3, PERIODO 2023-1</li>
        <li className={styles.li} >DOCENTE: JOHAN ROBLES</li>
      </ul>
    </header>
  )
}
