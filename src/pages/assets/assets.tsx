import { JSX, useEffect } from 'react'
import { PageHeader } from '../../features/pageHeader/pageHeader'
import { CurrencyTable } from '../../widgets/currencyTable/currencyTable'
import { useAppDispatch } from '../../shared/hooks/hooks'
import { fetchGetCurrencies } from '../../shared/redux/slices/currenciesSlice'
import { ModalWindow } from '../../widgets/modalWindow/modalWindow'
import { WalletModalWindow } from '../../widgets/walletModalWindow/walletModalWindow'

export const Assets = (): JSX.Element => {
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchGetCurrencies())
  }, [dispatch])

  return (
    <div>
      <PageHeader />
      <CurrencyTable />
      <ModalWindow />
      <WalletModalWindow />
    </div>
  )
}
