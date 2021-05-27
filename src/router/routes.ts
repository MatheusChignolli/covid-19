import { Home, World } from 'pages'

const routes = [
  {
    component: Home,
    path: '/',
    exact: true,
  },
  {
    component: World,
    path: '/world',
    exact: false,
  },
]

export default routes
