import React from 'react'
import styles from './index.css'

interface Props {
  value?: string;
  placeholder: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, onChange, value }: Props) => {
  return (
    <input className={styles.input} placeholder={placeholder} onChange={onChange} value={value}/>
  )
}

export default Input;