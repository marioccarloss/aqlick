'use client'

import { useState, ChangeEvent, FormEvent } from 'react'
import styles from './Suscribe.module.css'

type FormValues = {
  email: string,
}

export default function Suscribe () {
  const [values, setValues] = useState<FormValues>({ email: '' })
  const [messageSend, setMessageSend] = useState<boolean>(false)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const res = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(values)
    })
    const data = await res.json()
    if (data.error) {
      console.log(data.error)
    } else {
      setMessageSend(true)
    }
  }

  return (
    <>
      {!messageSend
        ? (
          <form onSubmit={handleSubmit} className={styles.suscribeForm}>
            <input
              placeholder='Correo electrónico'
              type='email'
              name='email'
              value={values.email}
              onChange={handleChange}
              required
              className={styles.suscribeInput}
            />
            <button
              type='submit'
              className={`btn ${styles.suscribeButton}`}
            >
              Suscríbete
            </button>
          </form>
          )
        : ('')}
    </>
  )
}
