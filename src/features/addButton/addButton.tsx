import { JSX, MouseEvent } from 'react'
import { Button } from 'antd'
import { PlusCircle } from 'lucide-react'
import { CurrencyType } from '../../shared/types/currencyTypes'
import {
  changeShowWindow,
  changeWindowCurrency,
} from '../../shared/redux/slices/modalWindowSlice'
import { useAppDispatch } from '../../shared/hooks/hooks'

type PropsType = {
  record: CurrencyType
}

export const AddButton = ({ record }: PropsType): JSX.Element => {
  const dispatch = useAppDispatch()

  const addCurrency = (
    event: MouseEvent<HTMLElement>,
    record: CurrencyType
  ) => {
    event.stopPropagation()
    dispatch(changeWindowCurrency(record))
    dispatch(changeShowWindow())
  }

  return (
    <Button onClick={(event) => addCurrency(event, record)}>
      <PlusCircle />
    </Button>
  )
}
