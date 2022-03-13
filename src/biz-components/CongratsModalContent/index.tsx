import React from 'react'
import Button from '../../components/Button'
import styles from './index.less'

interface Props {
  onOk: () => void
}
const CongratsModalContent = ({ onOk }: Props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>All done!</div>
      <div className={styles.content}>
        {'You will be one of the first to experience Brocoli & co. when we launch'}
      </div>
      <div>
        <Button className={styles.okButton} onClick={onOk}>OK</Button>
      </div>
    </div>
  )
}

export default CongratsModalContent