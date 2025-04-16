import { JSX, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Space } from 'antd'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/hooks'
import { CurrencyInformationTable } from '../currencyInfoTable/currencyInfoTable'
import { AddButton } from '../../features/addButton/addButton'
import { LoadingSpin } from '../../features/loadingSpin/loadingSpin'
import { setWalletPrice } from '../../shared/redux/slices/walletSlice'
import { HistoryGraph } from '../../features/historyGraph/historyGraph'
import { fetchGetCurrencyHistory } from '../../shared/redux/slices/currenciesSlice'
import {
  selectCurrenciesArray,
  fetchGetCurrencies,
} from '../../shared/redux/slices/currenciesSlice'
import './currencyInfoWidgetStyle.css'

export const CurrencyInfoWidget = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const dispatch = useAppDispatch()
  const currencies = useAppSelector(selectCurrenciesArray)
  const currentCurrency = currencies.find((value) => value.id === id)

  useEffect(() => {
    if (currencies.length === 0) {
      dispatch(fetchGetCurrencies())
    } else {
      dispatch(setWalletPrice(currencies))
      if (id) {
        dispatch(fetchGetCurrencyHistory(id))
      }
    }
  }, [dispatch, currencies, id])

  if (currentCurrency) {
    return (
      <div className="container">
        <Space className="cryptoHeader">
          <h1>{`${currentCurrency?.symbol} ${currentCurrency?.name}`}</h1>
          <AddButton record={currentCurrency} />
        </Space>
        <CurrencyInformationTable />
        <HistoryGraph />
      </div>
    )
  }

  return <LoadingSpin />
}
