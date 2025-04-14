import { JSX } from 'react'
import { Table } from 'antd'
import { CurrencyType } from '../../shared/types/currencyTypes'
import { useAppSelector } from '../../shared/hooks/hooks'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import { columns } from './currencyTableColumns'
import './currencyTableStyle.css'

export const CurrencyTable = (): JSX.Element => {
  const currencies = useAppSelector(selectCurrenciesArray)

  if (currencies.length > 0) {
    return (
      <div className="tableContainer">
        <Table<CurrencyType>
          size="small"
          className="custom-table"
          columns={columns}
          dataSource={currencies}
          rowKey="rank"
          rowClassName="custom-row"
        />
      </div>
    )
  }

  return <p>loading</p>
}
