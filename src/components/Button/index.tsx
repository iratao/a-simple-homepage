import React from 'react'
import CommonProps from '../../types/CommonProps'
import LoadingIcon from '../LoadingIcon'
import styles from './index.less'

interface Props extends CommonProps {
  size?: 'small' | 'medium' | 'large' | 'auto';
  onClick?: React.MouseEventHandler<HTMLElement>;
  className?: string;
  loading?: boolean;
}

const Button = ({ children, size = 'medium', onClick, className = '', loading }: Props) => {
  const disabled = loading
  return (
    <button className={`${className} ${styles.button} ${styles[size]}`} disabled={disabled} onClick={onClick}>
      {loading && <LoadingIcon className={`${styles.loading}`}/>} {children}
    </button>
  )
}

export default Button