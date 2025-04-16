import { JSX, MouseEvent } from 'react'
import { X } from 'lucide-react'
import { WalletColumnType } from '../../shared/types/walletTypes'
import { StorageItem } from '../../shared/types/storageTypes'
import { useAppDispatch, useAppSelector } from '../../shared/hooks/hooks'
import { setWalletPrice } from '../../shared/redux/slices/walletSlice'
import { selectCurrenciesArray } from '../../shared/redux/slices/currenciesSlice'
import './deleteButtonStyle.css'

type PropsType = {
  record: WalletColumnType
}

export const DeleteButton = ({ record }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()
  const currencies = useAppSelector(selectCurrenciesArray)

  const deleteCurrency = (
    event: MouseEvent<SVGSVGElement>,
    record: WalletColumnType
  ) => {
    event.stopPropagation()
    const walletString = localStorage.getItem('wallet')
    let wallet: StorageItem[] = walletString ? JSON.parse(walletString) : []
    if (wallet.length > 0) {
      wallet = wallet.filter((value) => value.name !== record.name)
    }
    localStorage.setItem('wallet', JSON.stringify(wallet))
    dispatch(setWalletPrice(currencies))
  }

  return <X className="x" onClick={(event) => deleteCurrency(event, record)} />
}
