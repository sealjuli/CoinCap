import { JSX } from 'react'
import { Button } from 'antd'
import { useAppDispatch } from '../../shared/hooks/hooks'
import { changeShowWalletWindow } from '../../shared/redux/slices/walletSlice'

export const OkButton = (): JSX.Element => {
  const dispatch = useAppDispatch()

  const handleOk = () => {
    dispatch(changeShowWalletWindow())
  }

  return (
    <Button type="primary" onClick={handleOk}>
      OK
    </Button>
  )
}
