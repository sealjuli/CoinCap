import { JSX, useEffect } from 'react'
import { PageHeader } from '../../features/pageHeader/pageHeader'
import { CurrencyTable } from '../../features/currencyTable/currencyTable'
import { useAppDispatch } from '../../shared/hooks/hooks'
import { fetchGetCurrencies } from '../../shared/redux/slices/currenciesSlice'

export const Assets = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchGetCurrencies())
  }, [dispatch])

  return (
    <div>
      <PageHeader />
      <CurrencyTable />
    </div>
  )
}
