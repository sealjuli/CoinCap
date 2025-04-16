import { CurrencyType } from '../../shared/types/currencyTypes'
import { CurrencyInfoType } from '../../shared/types/currencyInfoTypes'

export const setData = (
  currentCurrency: CurrencyType | undefined
): CurrencyInfoType[] => {
  const change = +(currentCurrency?.changePercent24Hr || '0')
  const color = change >= 0 ? 'green' : 'red'

  return [
    {
      id: 1,
      info: 'Цена',
      data: (+(currentCurrency?.priceUsd || '0')).toFixed(2),
    },
    {
      id: 2,
      info: 'Доступное предложение для торговли',
      data: (+(currentCurrency?.supply || '0')).toFixed(2),
    },
    {
      id: 3,
      info: 'Общее кол-во выпущенных активов',
      data: (+(currentCurrency?.maxSupply || '0')).toFixed(2),
    },
    {
      id: 4,
      info: 'Объем торгов за последние 24 часа',
      data: (+(currentCurrency?.volumeUsd24Hr || '0')).toFixed(2),
    },
    {
      id: 5,
      info: 'Средняя цена по объему за последние 24 часа',
      data: (+(currentCurrency?.vwap24Hr || '0')).toFixed(2),
    },
    {
      id: 6,
      info: 'Процентное изменение цены за последние 24 часа',
      data: <span className={color}>{change.toFixed(2) + ' %'}</span>,
    },
    {
      id: 7,
      info: 'Сайт',
      data: (
        <a href={currentCurrency?.explorer}>
          {currentCurrency?.explorer || ''}
        </a>
      ),
    },
  ]
}
