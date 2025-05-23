import { TableProps } from 'antd'
import { CurrencyType } from '../../shared/types/currencyTypes'
import { AddButton } from '../../features/addButton/addButton'

export const columns: TableProps<CurrencyType>['columns'] = [
  {
    title: '№',
    dataIndex: 'rank',
    key: 'rank',
  },
  {
    title: '',
    dataIndex: 'symbol',
    key: 'symbol',
    render: (val) => <p style={{ color: 'purple' }}> {val} </p>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'VWAP (24Hr)',
    dataIndex: 'vwap24Hr',
    key: 'vwap24Hr',
    render: (val) => `${Number(val).toFixed(2)} $`,
  },
  {
    title: 'Change (24Hr)',
    dataIndex: 'changeValue24Hr',
    key: 'changeValue24Hr',
    render: (_, record) => {
      const value = (+record.priceUsd * +record.changePercent24Hr) / 100
      const color = value > 0 ? 'green' : 'red'
      return <p style={{ color }}> {`${value.toFixed(2)} $`}</p>
    },
  },
  {
    title: 'Market Cap',
    dataIndex: 'marketCapUsd',
    key: 'marketCapUsd',
    render: (val) => `${(Number(val) / 1000000000).toFixed(1)} млрд $`,
  },
  {
    title: 'Price',
    dataIndex: 'priceUsd',
    key: 'priceUsd',
    render: (val) => `${Number(val).toFixed(2)} $`,
  },
  {
    title: '',
    key: 'add',
    render: (_, record) => <AddButton record={record} />,
  },
]
