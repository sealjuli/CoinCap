import { JSX } from 'react'
import { Modal, Button } from 'antd'
import {
  selectShowWalletWindow,
  changeShowWalletWindow,
} from '../../shared/redux/slices/walletSlice'
import { WalletTable } from '../walletTable/walletTable'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks'
import { selectWalletPrice } from '../../shared/redux/slices/walletSlice'

export const WalletModalWindow = (): JSX.Element => {
  const dispatch = useAppDispatch()
  const isModalOpen = useAppSelector(selectShowWalletWindow)
  const walletPrice = useAppSelector(selectWalletPrice)

  const handleOk = () => {
    dispatch(changeShowWalletWindow())
  }

  const handleCancel = () => {
    dispatch(changeShowWalletWindow())
  }

  return (
    <Modal
      style={{ textAlign: 'center' }}
      title={<h2>Портфель</h2>}
      open={isModalOpen}
      footer={
        <Button type="primary" onClick={handleOk}>
          OK
        </Button>
      }
      onCancel={handleCancel}
      width={800}
    >
      <div>
        <WalletTable />
        <p>{`Итого: ${walletPrice.toFixed(2)} $`}</p>
      </div>
    </Modal>
  )
}
