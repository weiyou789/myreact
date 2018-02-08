import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import Router from 'react-router/lib/Router'
import routes from './routes'

// binding React with Redux and Router
export default class Root extends Component {
  componentDidMount () {
    window.globalWindowHeight = window.innerHeight
    //window.kwapp && window.kwapp.allowRefreshOrShare(false, false)
  }
  render() {
    const { store, history } = this.props
    if (!this.routeConfig) {
      this.routeConfig = routes
    }
    return (
      <Provider store={store}>
        <Router history={history} routes={this.routeConfig} />
      </Provider>
    )
  }
}
