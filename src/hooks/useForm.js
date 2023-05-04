import { useState } from 'react'

export const useForm = () => {
  const [amount, setAmount] = useState(1)

  const handleChange = (event) => {
    if (event.target.value < 0) return
    setAmount(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return { amount, handleChange, handleSubmit }
}
