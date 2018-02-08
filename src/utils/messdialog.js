/**
 * Created by root on 2017/7/12.
 */
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import styles from './test.scss'

class Messdialog extends Component {
  //mixins = [LayeredComponentMixin]
  constructor() {
    super();
    this.state = {

    }
  }
  componentDidMount(){
    this.layer = document.createElement('div');
    this.layer.className = 'layer'
    document.body.appendChild(this.layer);
  }
  componentWillUnmount() {
    document.body.removeChild(this.layer);
  }
  render() {
    const { msg } = this.props
    //console.log(msg)
    return (
        <div className={styles.flex}>
          <span>{msg}</span>
        </div>
    )
  }
}

Messdialog.reWrite = function(properties){
  const { ...props } = properties || {};
  let div = document.createElement('div');
  const notification = ReactDOM.render(<Messdialog {...props} />, document.body.appendChild(div));
  return {
    hide() {
      ReactDOM.unmountComponentAtNode(div);
      document.body.removeChild(div);
    },
    component: notification
  }

}
export default Messdialog

