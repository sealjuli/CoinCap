import { JSX } from 'react'
import { Modal } from 'antd'
import { WalletTable } from '../walletTable/walletTable'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks'
import { selectWalletPrice } from '../../shared/redux/slices/walletSlice'
import { OkButton } from '../../features/okButton/okButton'
import {
  selectShowWalletWindow,
  changeShowWalletWindow,
} from '../../shared/redux/slices/walletSlice'
import './walletModalWindowStyle.css'

export const WalletModalWindow = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector(selectShowWalletWindow)
  const walletPrice = useAppSelector(selectWalletPrice)

  const handleCancel = () => {
    dispatch(changeShowWalletWindow())
  }

  return (
    <Modal
      className="modal"
      title={<h2>Портфель</h2>}
      open={isModalOpen}
      footer={<OkButton />}
      onCancel={handleCancel}
    >
      <WalletTable />
      <p>{`Итого: ${walletPrice.toFixed(2)} $`}</p>
    </Modal>
  )
}
