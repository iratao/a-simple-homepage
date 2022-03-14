import React from 'react'
import CommonProps from '../../../types/CommonProps'

import styles from './index.less'

const Content = ({ children }: CommonProps) => {
  return <div className={styles.content}>{children}</div>
}

export default Content;