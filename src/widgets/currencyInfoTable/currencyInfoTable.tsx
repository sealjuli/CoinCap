import { JSX } from 'react'
import { Table } from 'antd'
import { useParams } from 'react-router-dom'
import { useAppSelector } from '../../shared/hooks/hooks'
import { CurrencyInfoType } from '../../shared/types/currencyInfoTypes'
import { columns } from '../../entities/currencyInfoTableColumns/currencyInfoTableColumns'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import { setData } from './setData'

export const CurrencyInformationTable = (): JSX.Element => {
  const { id } = useParams<{ id: string }>()
  const currencies = useAppSelector(selectCurrenciesArray)
  const currentCurrency = currencies.find((value) => value.id === id)
  const data = setData(currentCurrency)

  return (
    <div className="tableContainer">
      <Table<CurrencyInfoType>
        size="small"
        className="custom-table"
        columns={columns}
        dataSource={data}
        rowKey="id"
        rowClassName="custom-row"
        pagination={false}
      />
    </div>
  )
}
