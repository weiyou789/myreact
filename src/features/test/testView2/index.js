import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './main.scss'
import * as actions from '../redux/actions'

class testView2 extends Component {
  state = {
    // selectedProvinceId: '', // 默认全部
  }

  componentDidMount = () => {
    const { fetchDeptRadar,fetchDeptRadar2 } = this.props
    fetchDeptRadar2()
  }


  render() {
    const { testData2 } = this.props
    return (
      <div>
        <span>{testData2.length>0&&testData2[0].name}</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.test2
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(testView2)
