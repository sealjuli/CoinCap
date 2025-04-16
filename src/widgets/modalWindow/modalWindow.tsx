import { JSX } from 'react'
import { Modal } from 'antd'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/hooks'
import { InputForm } from '../../features/inputForm/inputForm'
import { setWalletPrice } from '../../shared/redux/slices/walletSlice'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import { modalWindowCalculations } from './modalWindowCalculations'
import {
  selectShowWindow,
  selectWindowCurrency,
  changeShowWindow,
} from '../../shared/redux/slices/modalWindowSlice'
import {
  selectInputValue,
  clearInputValue,
} from '../../shared/redux/slices/inputValueSlice'
import './modalWindowStyle.css'

export const ModalWindow = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector(selectShowWindow)
  const currency = useAppSelector(selectWindowCurrency)
  const inputValue = useAppSelector(selectInputValue)
  const currArray = useAppSelector(selectCurrenciesArray)

  const handleOk = () => {
    if (inputValue && currency) {
      modalWindowCalculations(currency, inputValue)
      dispatch(setWalletPrice(currArray))
      dispatch(changeShowWindow())
      dispatch(clearInputValue())
    }
  }

  const handleCancel = () => {
    dispatch(changeShowWindow())
    dispatch(clearInputValue())
  }

  return (
    <Modal
      className="modal"
      title={`Купить ${currency?.name}`}
      open={isModalOpen}
      onOk={handleOk}
      okText="Добавить"
      onCancel={handleCancel}
      cancelText="Отменить"
    >
      <p>Введите количество:</p>
      <InputForm />
    </Modal>
  )
}
