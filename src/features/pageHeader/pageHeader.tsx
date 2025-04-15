import { JSX } from 'react'
import { Layout } from 'antd'
import { PopularCurrencies } from '../popularCurrencies/popularCurrencies'
import { WalletInfo } from '../walletInfo/walletInfo'
import './pageHeaderStyle.css'

const { Header } = Layout

export const PageHeader = (): JSX.Element => {
  return (
    <Header className="headerStyle">
      <PopularCurrencies />
      <WalletInfo />
    </Header>
  )
}
