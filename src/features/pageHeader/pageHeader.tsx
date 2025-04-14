import { JSX } from 'react'
import { Layout, Space } from 'antd'
import { Wallet } from 'lucide-react'
import './pageHeaderStyle.css'

const { Header } = Layout

export const PageHeader = (): JSX.Element => {
  return (
    <Header className="headerStyle">
      <div className="popularContainer">
        <div>
          <p>Популярные криптовалюты</p>
        </div>
        <div className="popularInfo">
          <span>BitCoin</span>
          <span>ETC</span>
        </div>
      </div>
      <div className="walletContainer">
        <Space size="middle">
          <Wallet size={40} />
          <div>
            <p>Итого</p>
            <p>1627.44 USD</p>
          </div>
        </Space>
      </div>
    </Header>
  )
}
