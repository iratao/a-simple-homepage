
import React from 'react'
import loadingIcon from './loading.svg'
import styles from './index.css'

interface Props {
  className?: string;
}

const LoadingIcon = ({ className }: Props) => {
  return (
    <img className={`${styles.img} ${className} `} src={loadingIcon}/>
  )
}

export default LoadingIcon