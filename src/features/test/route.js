
const testView = {
  path: 'testView',
  title: 'testView',
  getComponent(location, cb) {
    require.ensure([], require => cb(null, require('./testView').default), 'test')
  }
}

const testView2 = {
  path: 'testView2',
  title: 'testView2',
  getComponent(location, cb) {
    require.ensure([], require => cb(null, require('./testView2').default), 'test')
  }
}

export default {
  path: '/test',
  childRoutes: [
    testView,
    testView2
  ]
}
