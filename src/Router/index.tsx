import React, { FC } from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import { Footer, Navbar } from 'components'
import routes from './routes'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        {routes.map(({ component, exact, path }, i) => (
          <Route
            key={`route-${i}`}
            component={component}
            exact={exact}
            path={path}
          />
        ))}
      </main>
      <Footer />
    </BrowserRouter>
  )
}

export default Router
