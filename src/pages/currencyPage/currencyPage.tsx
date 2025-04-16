import { JSX } from 'react'
import { PageHeader } from '../../features/pageHeader/pageHeader'
import { CurrencyInfoWidget } from '../../widgets/currencyInfoWidget/currencyInfoWidget'
import { WalletModalWindow } from '../../widgets/walletModalWindow/walletModalWindow'
import { ModalWindow } from '../../widgets/modalWindow/modalWindow'

export const CurrencyPage = (): JSX.Element => {
  return (
    <div>
      <PageHeader />
      <CurrencyInfoWidget />
      <ModalWindow />
      <WalletModalWindow />
    </div>
  )
}
