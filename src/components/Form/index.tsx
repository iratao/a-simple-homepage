import React, { useCallback, useEffect, useState, useMemo } from 'react'
import { Props, FormErrors, FormValues, FormError, Rule, Fields, RegisterFieldConfig, FormInstance, OnChangeEvent } from './types'
import ErrorMsg from './ErrorMsg/index';
import FormItem from './FormItem/index';
import { capitalize } from '../../utils'

const Form = ({ children }: Props) => {
  const [ fields, setFields ] = useState<Fields>({})

  const updateFieldError = (name: string, error: string) => {
    setFields((prevFileds) => ({
      ...prevFileds,
      [name]: {
        ...fields[name],
        error,
      }
    }))
  }

  const validate = () => {
    let errors: FormErrors | undefined = undefined
    const values: FormValues = {}
    Object.keys(fields).forEach(name => {
      values[name] = fields[name].value
      const field = fields[name]
      const { rules, value } = field
      const error: FormError = {
        name,
        errors: []
      }
      rules?.forEach((rule: Rule) => {
        const { required, validator, pattern, message, min } = rule;
        if (required) {
          if (!value) {
            const errorMsg = message || `${capitalize(name)} is required`
            updateFieldError(name, errorMsg)
            error.errors.push(errorMsg)
          }
        }
        if (pattern && value) {
          if (!RegExp(pattern).test(value)) {
            const errorMsg = message || `Invalide ${name}`
            updateFieldError(name, errorMsg)
            error.errors.push(errorMsg)
          }
        }
        if (validator) {
          if (!validator(value, form)) {
            const errorMsg = message || 'Validator failed'
            updateFieldError(name, errorMsg)
            error.errors.push(errorMsg)
          }
        }
        if (min !== undefined && value && typeof value === 'string') {
          if (value.length < min) {
            const errorMsg = message || `${capitalize(name)} should be at least ${min} characters long.`
            updateFieldError(name, errorMsg)
            error.errors.push(errorMsg)
          }
        }
      })
      if (error.errors.length > 0) {
        if (!errors) {
          errors = []
        }
        errors.push(error)
      }
    })
    return {
      values,
      errors,
    };
  }
  
  const registerField = ({ name, rules }: RegisterFieldConfig) => {
    setFields((prevFields) => ({
      ...prevFields,
      [name]: {
        value: '',
        error: '',
        rules,
      }
    }))
    return  {
      value: fields[name]?.value,
      onChange: (event: OnChangeEvent) => {
        const { target } = event
        const value = target? target.value : ''
        setFields((prevFields) => ({
          ...prevFields,
          [name]: {
            ...prevFields[name],
            value,
            error: '',
          }
        }))
      },
    }
  }

  const getFieldValue = (name: string) => {
    return fields[name]?.value
  }

  const form = useMemo(() => {
    const form: FormInstance = {
      registerField,
      validate,
      getFieldValue,
    }
    return form
  }, [ registerField ] )

  return (
    <div className={'form'}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, { form, error: fields[child.props.name]?.error })
        }
        return child
      })} 
    </div>
  )
}


export default Form;
export {
  ErrorMsg,
  FormItem,
}