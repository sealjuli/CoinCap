import { TableProps } from 'antd'
import { CurrencyInfoType } from '../../shared/types/currencyInfoTypes'

export const columns: TableProps<CurrencyInfoType>['columns'] = [
  {
    title: 'Информация',
    dataIndex: 'info',
    key: 'info',
  },
  {
    title: 'Данные о валюте',
    dataIndex: 'data',
    key: 'data',
  },
]
