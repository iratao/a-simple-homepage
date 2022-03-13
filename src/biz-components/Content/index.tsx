import React, { useState, useCallback } from 'react'
import RequestModalContent from '../RequestModalContent'
import CongratsModalContent from '../CongratsModalContent'
import Button from '../../components/Button'
import Modal from '../../components/Modal'
import styles from './index.css'

const Content = () => {
  const [ showModal, setShowModal ]= useState(false)
  const [ showCongratsModal, setShowCongratsModal ] = useState(false)
  const handleRequestClick = useCallback(() => {
    setShowModal(true)
  }, [ setShowModal ])

  const handleModalClose = useCallback(() => {
    setShowModal(false)
  }, [ setShowModal ])

  const handleCongratsModalClose = useCallback(() => {
    setShowCongratsModal(false)
  }, [ setShowCongratsModal ])

  const handleRequestSuccess = useCallback(() => {
    setShowModal(false)
    setShowCongratsModal(true)
  }, [ setShowModal, setShowCongratsModal])

  const handleCongratsModalOk = useCallback(() => {
    setShowCongratsModal(false)
  }, [ setShowCongratsModal ])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>A better way <br/> to enjoy every day.</div>
      <div className={styles.subtitle}>Be the first to know when we launch.</div>
      <div className={styles.operation}>
        <Button size="large" onClick={handleRequestClick}>
          Request an invite
        </Button>
      </div>
      <Modal visible={showModal} onClose={handleModalClose}>
        <RequestModalContent onSuccess={handleRequestSuccess}/>
      </Modal>
      <Modal visible={showCongratsModal} onClose={handleCongratsModalClose}>
        <CongratsModalContent onOk={handleCongratsModalOk}/>
      </Modal>
    </div>
  )
}

export default Content;