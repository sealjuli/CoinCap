import { JSX } from 'react'
import { useParams } from 'react-router-dom'

export const CurrencyInformation = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  return <p>{id}</p>
}
