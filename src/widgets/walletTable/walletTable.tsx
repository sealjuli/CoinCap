import { JSX } from 'react'
import { Table } from 'antd'
import { useAppSelector } from '../../shared/hooks/hooks'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import { columns } from '../../entities/walletTableColumns/walletTableColumns'
import { LoadingSpin } from '../../features/loadingSpin/loadingSpin'
import { WalletColumnType } from '../../shared/types/walletTypes'
import { StorageItem } from '../../shared/types/storageTypes'
import './walletTableStyle.css'

export const WalletTable = (): JSX.Element => {
  const currencies = useAppSelector(selectCurrenciesArray)

  const walletString = localStorage.getItem('wallet')
  const wallet: StorageItem[] = walletString ? JSON.parse(walletString) : []
  let data: WalletColumnType[] = []
  if (wallet.length > 0) {
    data = wallet.map((value) => ({
      name: value.name,
      price: +(
        currencies.find((curr) => curr.id === value.name)?.priceUsd || 0
      ),
      amount: value.amount,
    }))
  }

  if (currencies.length > 0) {
    return (
      <div className="tableContainer">
        <Table<WalletColumnType>
          size="small"
          className="custom-table"
          columns={columns}
          dataSource={data}
          rowKey="name"
          rowClassName="custom-row"
          pagination={false}
        />
      </div>
    )
  }

  return <LoadingSpin />
}
