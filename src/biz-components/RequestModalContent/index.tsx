import React, { useCallback, useState } from 'react'
import Form, { FormItem } from '../../components/Form'
import type {FormInstance } from '../../components/Form/types'
import Input from '../../components/Input'
import Button from '../../components/Button'
import CommonProps from '../../types/CommonProps'
import * as services from '../../services/index';
import styles from './index.css'

interface Props extends CommonProps {
  onSuccess?: () => void
}

const RequestModalContent = ({ onSuccess }: Props) => {
  const [ sending, setSending ] = useState(false)
  const [ error, setError ] = useState('')
  const checkConfirmEmail = (value: string, form: FormInstance) => {
    if (value !== form.getFieldValue('email')) {
      return false;
    }
    return true;
  }

  const send = useCallback(async ({ values, errors }) => {
    if (!errors) {
      setSending(true)
      try {
        const res = await services.requestInvite({
          name: values.name,
          email: values.email,
        });
        setSending(false)
        if (res.status === 200) {
          setError('')
          onSuccess && onSuccess()
        } else {
          res.json().then(err => {
            setError(err.errorMessage || 'Network error.')
          })
        }
      } catch(error) {
        setSending(false)
        setError('Fatal error.')
      }
    }
  }, [])

  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>Request an invite</div>
      <div className={styles.content}>
        <Form>
          <FormItem name={'name'} rules={[{
            required: true,
          }, {
            min: 3,
          }]}>
            <Input placeholder="Full name" />
          </FormItem>
          <FormItem name={'email'} rules={[{
              required: true,
            }, {
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
            }]}>
            <Input placeholder="Email"  />
          </FormItem>
          <FormItem name={'confirmEmail'} rules={[{
              required: true,
              message: 'Confirm email is required'
            }, {
              validator: checkConfirmEmail,
              message: 'Confirm email must match email.'
            }]}>
            <Input  placeholder="Confirm email" />
          </FormItem>
          <FormItem type="submit" className={styles.sendButtonWrapper}>
            <Button loading={sending} className={styles.sendButton} onClick={send} >
              {sending ? 'Sending, please wait...' : 'Send'}
            </Button>
          </FormItem>
          <div className={styles.error}>{error}</div>
        </Form>
      </div>
      
      
    </div>
  )
}

export default RequestModalContent;