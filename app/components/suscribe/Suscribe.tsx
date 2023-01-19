'use client'

import { useFormspark } from '@formspark/use-formspark'
import { useState, MouseEvent } from 'react'
import styles from './Suscribe.module.css'

export default function Suscribe () {
  const FORMSPARK_FORM_ID = 'your-form-id'
  const [submit, submitting] = useFormspark({
    formId: FORMSPARK_FORM_ID
  })

  const [message, setMessage] = useState<string>('')

  const onSubmit = async (event: MouseEvent<HTMLFormElement>) => {
    event.preventDefault()
    await submit({ message })
    alert('Form submitted')
  }

  return (
    <form onSubmit={onSubmit} className={styles.suscribeForm}>
      <input
        type='email'
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className={styles.suscribeInput}
      />
      <button
        type='submit'
        disabled={submitting}
        className={`btn ${styles.suscribeButton}`}
      >
        Suscríbete
      </button>
    </form>
  )
}
