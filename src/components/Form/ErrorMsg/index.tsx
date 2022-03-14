import React from 'react'
import styles from './index.less'

interface ErrorMsgProps {
  error?: string
}

const ErrorMsg = ({ error }: ErrorMsgProps) => {
  if (!error) {
    return null
  }
  return <div className={styles.errorMsg}>{error}</div>
}

export default ErrorMsg;
  