import React from 'react'
import CommonProps from '../../../types/CommonProps'
import styles from './index.less'

const Header = ({ children }: CommonProps) => {
  return <div className={styles.header}>{children}</div>
}

export default Header;