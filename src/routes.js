
import testRoute from './features/test/route'
import testRoute2 from './features/test2/route'

const childRoutes = [
  testRoute,
  testRoute2
]

// configuration with plain routes
const routes = [{
  path: '/',
  component: '',
  // indexRoute: { component: Hello },
  childRoutes: [
    ...childRoutes
  ]
}]

// check isIndex property of route config:
// 1. remove the first child with isIndex=true if no path property from childRoutes
// 2. assign it to the indexRoute property of the parent.
function checkIndexRoute(route) {
  if (!route.childRoutes || !route.childRoutes.length) {
    return
  }

  route.childRoutes = route.childRoutes.filter(child => {
    if (child.isIndex) {
      if ((process.env.NODE_ENV === 'development') && route.indexRoute) {
        console.error('More than one index route: ', route)
      }

      if (!route.indexRoute) {
        const indexRoute = { ...child }
        delete indexRoute.path
        route.indexRoute = indexRoute
        if (!child.path) {
          return false
        }
      }
    }
    return true
  })

  route.childRoutes.forEach(checkIndexRoute)
}

// routes.forEach(handleIndexRoute)
export default routes
