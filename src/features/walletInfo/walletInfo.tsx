import { JSX } from 'react'
import { Space } from 'antd'
import { Wallet } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks'
import {
  selectWalletPrice,
  selectWalletPercent,
} from '../../shared/redux/slices/walletSlice'
import { changeShowWalletWindow } from '../../shared/redux/slices/walletSlice'
import './walletInfoStyle.css'

export const WalletInfo = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const walletPrice = useAppSelector(selectWalletPrice)
  const walletPercent = useAppSelector(selectWalletPercent)

  const openWalletWidget = () => {
    dispatch(changeShowWalletWindow())
  }

  return (
    <div className="walletContainer" onClick={openWalletWidget}>
      <Space size="middle">
        <Wallet size={40} />
        <div>
          <p>Итого</p>
          <p>{`${walletPrice.toFixed(2)} USD`}</p>
          <p
            className={walletPercent >= 0 ? 'green' : 'red'}
          >{`${walletPercent.toFixed(3)} %`}</p>
        </div>
      </Space>
    </div>
  )
}
