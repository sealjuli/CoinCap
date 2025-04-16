import { JSX, useEffect } from 'react'
import { Table } from 'antd'
import { useNavigate } from 'react-router-dom'
import { CurrencyType } from '../../shared/types/currencyTypes'
import { useAppSelector, useAppDispatch } from '../../shared/hooks/hooks'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import { columns } from '../../entities/currencyTableColumns/currencyTableColumns'
import { LoadingSpin } from '../../features/loadingSpin/loadingSpin'
import { coincapRoutes } from '../../shared/routes/routes'
import { setWalletPrice } from '../../shared/redux/slices/walletSlice'
import './currencyTableStyle.css'

export const CurrencyTable = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const currencies = useAppSelector(selectCurrenciesArray)
  const navigate = useNavigate()

  const navigateToCurrency = (id: string) => {
    navigate(`/${coincapRoutes.root}/${coincapRoutes.currency}/${id}`)
  }

  useEffect(() => {
    if (currencies.length > 0) {
      dispatch(setWalletPrice(currencies))
    }
  }, [currencies, dispatch])

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
          onRow={(record) => ({ onClick: () => navigateToCurrency(record.id) })}
        />
      </div>
    )
  }

  return <LoadingSpin />
}
