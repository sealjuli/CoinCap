import { JSX } from 'react'
import { PageHeader } from '../../features/pageHeader/pageHeader'
import { CurrencyInformation } from '../../widgets/currencyInformation/currencyInformation'
import { WalletModalWindow } from '../../widgets/walletModalWindow/walletModalWindow'

export const CurrencyPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader />
      <CurrencyInformation />
      <WalletModalWindow />
    </div>
  )
}
