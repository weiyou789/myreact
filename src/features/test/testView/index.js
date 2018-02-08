import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import styles from './main.scss'
import * as actions from '../redux/actions'

class testView extends Component {
  state = {
    // selectedProvinceId: '', // 默认全部
  }

  componentDidMount = () => {
    const { fetchDeptRadar } = this.props
    //console.log(3434343)
    fetchDeptRadar()
    //console.log(2322322222)
  }


  render() {
    const { testData } = this.props
    //console.log(22323,testData)
    return (
      <div>
        <span>{testData.length>0&&testData[0].name}</span>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return state.test
}
const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(testView)
