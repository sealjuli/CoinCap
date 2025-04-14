import { JSX } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { coinCapRoutes } from '../shared/routes/routes'
import { Assets } from '../pages/assets/assets'
import './appStyle.css'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={coinCapRoutes.root} element={<Outlet />}>
        <Route index element={<Navigate to={coinCapRoutes.assets} replace />} />
        <Route path={coinCapRoutes.assets} element={<Assets />} />
      </Route>
    </Routes>
  )
}
