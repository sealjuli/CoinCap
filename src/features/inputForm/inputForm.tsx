import { JSX } from 'react'
import { InputNumber } from 'antd'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks'
import {
  selectInputValue,
  setInputValue,
} from '../../shared/redux/slices/inputValueSlice'

export const InputForm = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const inputValue = useAppSelector(selectInputValue)

  const changeInputValue = (value: number | null) => {
    dispatch(setInputValue(value))
  }

  return (
    <InputNumber
      placeholder="1"
      value={inputValue}
      onChange={changeInputValue}
    />
  )
}
