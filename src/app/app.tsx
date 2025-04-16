import { JSX } from 'react'
import { Routes, Route, Navigate, Outlet } from 'react-router-dom'
import { coincapRoutes } from '../shared/routes/routes'
import { AssetsPage } from '../pages/assetsPage/assetsPage'
import { CurrencyPage } from '../pages/currencyPage/currencyPage'
import './appStyle.css'

export const App = (): JSX.Element => {
  return (
    <Routes>
      <Route path={coincapRoutes.root} element={<Outlet />}>
        <Route index element={<Navigate to={coincapRoutes.assets} replace />} />
        <Route path={coincapRoutes.assets} element={<AssetsPage />} />
        <Route
          path={`${coincapRoutes.currency}/:id`}
          element={<CurrencyPage />}
        />
      </Route>
    </Routes>
  )
}
