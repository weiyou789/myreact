
const testView = {
  path: 'testView',
  title: 'testView',
  getComponent(location, cb) {
    require.ensure([], require => cb(null, require('./testView').default), 'test2')
  }
}

export default {
  path: '/test2',
  childRoutes: [
    testView
  ]
}
