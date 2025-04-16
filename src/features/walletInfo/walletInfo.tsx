import { JSX } from 'react'
import { Space } from 'antd'
import { Wallet } from 'lucide-react'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks'
import { changeShowWalletWindow } from '../../shared/redux/slices/walletSlice'
import {
  selectWalletPrice,
  selectWalletPercent,
  selectWalletDifference,
} from '../../shared/redux/slices/walletSlice'
import './walletInfoStyle.css'

export const WalletInfo = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const walletPrice = useAppSelector(selectWalletPrice)
  const walletPercent = useAppSelector(selectWalletPercent)
  const walletDifference = useAppSelector(selectWalletDifference)

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
            className={walletDifference >= 0 ? 'green' : 'red'}
          >{`${walletDifference.toFixed(2)} (${walletPercent.toFixed(3)} %)`}</p>
        </div>
      </Space>
    </div>
  )
}
