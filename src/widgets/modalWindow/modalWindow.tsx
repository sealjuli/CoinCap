import { JSX } from 'react'
import { Modal } from 'antd'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/hooks'
import {
  selectShowWindow,
  selectWindowCurrency,
  changeShowWindow,
} from '../../shared/redux/slices/modalWindowSlice'
import { InputForm } from '../../features/inputForm/inputForm'
import {
  selectInputValue,
  clearInputValue,
} from '../../shared/redux/slices/inputValueSlice'
import './modalWindowStyle.css'
import { CurrencyType } from '../../shared/types/currencyTypes'
import { StorageItem } from '../../shared/types/storageTypes'
import { setWalletPrice } from '../../shared/redux/slices/walletSlice'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'

export const ModalWindow = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector(selectShowWindow)
  const currency = useAppSelector(selectWindowCurrency)
  const inputValue = useAppSelector(selectInputValue)
  const currArray = useAppSelector(selectCurrenciesArray)

  const cryptoCalculations = (currency: CurrencyType, inputValue: number) => {
    const walletString = localStorage.getItem('wallet')
    const wallet: StorageItem[] = walletString ? JSON.parse(walletString) : []
    const currentIndex = wallet.findIndex((val) => val.name === currency?.id)
    if (currentIndex >= 0) {
      wallet[currentIndex].priceHistory.push({
        price: +currency?.priceUsd,
        amount: inputValue,
      })
      wallet[currentIndex].amount = wallet[currentIndex].amount + inputValue
      wallet[currentIndex].avgPrice =
        wallet[currentIndex].priceHistory.reduce(
          (acc, val) => acc + val.amount * val.price,
          0
        ) / wallet[currentIndex].amount
    } else {
      wallet.push({
        name: currency?.id,
        avgPrice: +currency?.priceUsd,
        amount: inputValue,
        priceHistory: [{ price: +currency?.priceUsd, amount: inputValue }],
      })
    }
    localStorage.setItem('wallet', JSON.stringify(wallet))
    dispatch(setWalletPrice(currArray))
  }

  const handleOk = () => {
    if (inputValue && currency) {
      cryptoCalculations(currency, inputValue)
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
