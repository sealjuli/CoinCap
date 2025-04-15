import { TableProps } from 'antd'
import { WalletColumnType } from '../../shared/types/walletTypes'
import { DeleteButton } from '../../features/deleteButton/deleteButton'

export const columns: TableProps<WalletColumnType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
    render: (value) => `${value.toFixed(2)} $`,
  },
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
    render: (value) => value.toFixed(2),
  },
  {
    title: 'Total',
    dataIndex: 'total',
    key: 'total',
    render: (_, record) => `${(record.amount * record.price).toFixed(2)} $`,
  },
  {
    title: 'Total',
    dataIndex: 'delete',
    key: 'delete',
    render: (_, record) => <DeleteButton record={record} />,
  },
]
