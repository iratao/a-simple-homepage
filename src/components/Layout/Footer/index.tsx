import React from 'react'
import CommonProps from '../../../types/CommonProps'
import styles from './index.less'

const Footer = ({ children }: CommonProps) => {
  return <div className={styles.footer}>{children}</div>
}

export default Footer;