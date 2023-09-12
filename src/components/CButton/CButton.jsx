import React from 'react'
import styles from "./CButton.module.css"
const CButton = (props) => {
  return (
    <button link className={styles.button}> <a href={props.href} className={styles.link} target='_blank'>{props.name}</a> </button>
  )
}

export default CButton