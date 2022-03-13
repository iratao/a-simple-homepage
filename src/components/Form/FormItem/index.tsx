import React, { useEffect, useState } from 'react'
import ErrorMsg from '../ErrorMsg'
import { FormInstance, Rules, FormItemType } from '../types'
import styles from './index.css'

interface FormItemProps {
  children: React.ReactElement;
  form?: FormInstance;
  name?: string;
  rules?: Rules;
  type?: FormItemType;
  error?: string;
  className?: string;
}

const FormItem = ({ children, name, form, rules, type, error, className }: FormItemProps) => {
  const [field, setField] = useState({})

  useEffect(() => {
    if (name && form) {
      setField({
        ...form.registerField({ name, rules, type })
      })
    }
  }, [])

  return (
    <div className={`${styles.formItem} ${className}`}>
      {React.Children.map(children, (child, index) => {
        if (child && index === 0 && form) {
          if (type === 'submit') {
            const onClick = child.props.onClick ? () => {
              child.props.onClick(form.validate())
            } : null
            return React.cloneElement(child, {
              ...field,
              ...child.props,
              onClick,
            })
          }
          if (name) {
            return React.cloneElement(child, {
              ...field,
              ...child.props,
            })
          }
        }
        return child;
      })}
      <ErrorMsg error={error} />
    </div>
  )
}

export default FormItem;