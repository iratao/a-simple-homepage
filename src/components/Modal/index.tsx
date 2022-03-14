import React from 'react'
import ReactDOM from 'react-dom'
import styles from './index.less'

interface Props {
  visible: boolean;
  children: React.ReactNode;
  onClose?: () => void;
}

const modalRoot = document.getElementsByTagName('body')[0]

const InnerModal = ({ children, onClose }: Props) => {
  return (
    <div className={`${styles.root}`}>
      <div className={styles.mask} onClick={onClose}></div>
      <div className={styles.modalWrapper}>
        {children}
      </div>
    </div>
  )
}

const Modal = (props: Props) => {
  const { visible } = props;
  if (!visible) {
    return null;
  }

  return ReactDOM.createPortal(<InnerModal {...props}/>, modalRoot)
}

export default Modal;