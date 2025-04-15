import { JSX } from 'react'
import { Spin } from 'antd'
import './loadingSpinStyle.css'

export const LoadingSpin = (): JSX.Element => {
  return (
    <div className="spinContainer">
      <Spin size="large" />
    </div>
  )
}
