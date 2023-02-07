import React from 'react'
import styles from './rowList.module.css'

export function RowList({children}) {
  return (
    <div className={styles.container}>
      <div className={styles.List}>
        <div className={styles.List__title}>#</div>
        <div className={styles.List__title}>NOMBRES Y APELLIDOS</div>
        <div className={styles.List__title}>Asistencia</div>
      </div>
      <div className={styles.List}>{children}</div>
    </div>
  )
}