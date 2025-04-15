import { JSX } from 'react'
import { useAppSelector } from '../../shared/hooks/hooks'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import './popularCurrenciesStyle.css'
import { Space } from 'antd'

export const PopularCurrencies = (): JSX.Element => {
  const currencies = useAppSelector(selectCurrenciesArray)

  if (currencies && currencies.length > 0) {
    const popularDivs = currencies.slice(0, 3).map((value) => (
      <Space size="middle" className="popular" key={value.rank}>
        <span>{value.name}</span>
        <span>{`${Number(value.priceUsd).toFixed(2)} $`}</span>
      </Space>
    ))

    return (
      <div className="popularContainer">
        <div>
          <p className="text">Популярные криптовалюты</p>
        </div>
        <div className="popularInfo">{popularDivs}</div>
      </div>
    )
  }

  return <p>Добро пожаловать!</p>
}
